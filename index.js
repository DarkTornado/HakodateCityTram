var axios = require('axios');
var protobuf = require('protobufjs');
var route = require('./route.js').getList();

module.exports = async function() {
    var url = 'https://api-public.odpt.org/api/v4/gtfs/realtime/odpt_HakodateCity_Alllines_vehicle';
    var response = await axios.get(url, {
        responseType: "arraybuffer"
    }, {});
    // return response.data;

    var root = await protobuf.load('gtfs-realtime.proto');
    var FeedMessage = root.lookupType('FeedMessage');
    // return FeedMessage.decode(Buffer.from(response.data));

    var data = [];
    FeedMessage.decode(Buffer.from(response.data)).entity.forEach((e, i) => {
        e = e.vehicle;
        var info = e.trip.tripId.split('_')[2].split('-');
        var line = info[0].replace('系統', '');
        var updn = 'up';
        var terminals = {
            2: {
                1: '야치가시라',
                3: '유노카와',
                5: '코마바샤코마에',
            },
            5: {
                1: '하코다테도크마에',
                5: '유노카와',
                10: '코마바샤코마에'
            }
        };
        if (line == '2') {
            if (info[2] == '1') updn = 'down';
            if (info[2] == '3') updn = 'up';
            if (info[2] == '5') updn = 'down'; //차고지행
        } else if (line == '5') {
            if (info[2] == '1') updn = 'down';
            if (info[2] == '5') updn = 'up';
            if (info[2] == '10') updn = 'down'; //차고지행
        }
        var p = {
            x: e.position.latitude,
            y: e.position.longitude
        };

        var pos = findPosition(p, route);
        if (pos == null) {
            console.log('위치 탐색 실패', trainNo, e);
            return;
        }
        var stn = pos.p.s, sts = '도착';
        if (stn.includes('~')) {
            stn = stn.split('~');
            if (updn == 'up') stn = stn[0];
            else stn = stn[1];
            sts = '접근';
        }
        var termial = terminals[line][info[2]];
        if (termial == undefined) termial = '???';
        data[i] = {
            updn: updn,
            terminal: termial,
            trainNo: e.vehicle.id,
            stn: stn,
            pos: pos,
            sts: sts,
        };
    });

    var stations = [
        {k:'유노카와', j:'湯の川'},
        {k:'유노카와온센', j:'湯の川温泉'},
        {k:'하코다테아레나마에', j:'函館アリーナ前'},
        {k:'코마바샤코마에', j:'駒場車庫前'},
        {k:'케이바죠마에', j:'競馬場前'},
        {k:'후카보리쵸', j:'深堀町'},
        {k:'카시와기쵸', j:'柏木町'},
        {k:'스기나미쵸', j:'杉並町'},
        {k:'고료카쿠코엔마에', j:'五稜郭公園前'},
        {k:'츄오뵤인마에', j:'中央病院前'},
        {k:'치요가다이', j:'千代台'},
        {k:'호리카와쵸', j:'堀川町'},
        {k:'쇼와바시', j:'昭和橋'},
        {k:'치토세쵸', j:'千歳町'},
        {k:'신카와쵸', j:'新川町'},
        {k:'마츠카제쵸', j:'松風町'},
        {k:'하코다테에키마에', j:'函館駅前'},
        {k:'시야쿠쇼마에', j:'市役所前'},
        {k:'우오이치바도리', j:'魚市場通'},
        {k:'쥬지가이', j:'十字街'},
        {k:'스에히로쵸', j:'末広町'},
        {k:'오마치', j:'大町'},
        {k:'하코다테도크마에', j:'函館どつく前'},
        {k:'호라이쵸', j:'宝来町'},
        {k:'아오야기쵸', j:'青柳町'},
        {k:'야치가시라', j:'谷地頭'}
    ];

    var result = [];
    stations.forEach((e, i) => {
        result[i] = {
            stn: e.k + ' (' + e.j + ')',
            up: [],
            down: []
        };
        data.forEach((e) => {
            if (stations[i].k != e.stn) return;
            result[i][e.updn].push({
                trainNo: e.trainNo,
                terminal: e.terminal,
                sts: e.sts
            });
        });
    });


    return result;
};


//점과 선분 사이의 거리를 구하는 방식으로 구간 찾기
function findPosition(train, route) {
	var min = null;
	
    for (var n = 0; n < route.length; n++) {
        var p = route[n];

        //선분(철도 구간) AB, 점 P(열차 위치)
        var AB = { //벡터 AB
            x: p.p[2] - p.p[0],
            y: p.p[3] - p.p[1]
        };
        var AP = { //벡터 AP
            x: train.x - p.p[0],
            y: train.y - p.p[1]
        };
        var BA = { //벡터 BA
            x: p.p[0] - p.p[2],
            y: p.p[1] - p.p[3]
        };
        var BP = { //벡터 BP
            x: train.x - p.p[2],
            y: train.y - p.p[3]
        };
        
        //벡터의 내적
        //내적 결과가 양수면 예갹, 0이면 직각, 음수면 둔각
        //둔각이면 지점 A 방향에서 선분을 벗어났다는 뜻.
        var dot1 = AB.x*AP.x + AB.y*AP.y;
                
        //벡터의 내적
        //내적 결과가 양수면 예갹, 0이면 직각, 음수면 둔각
        //둔각이면 지점 B 방향에서 선분을 벗어났다는 뜻. B와의 거리가 선분과의 거리
        var dot2 = BA.x*BP.x + BA.y*BP.y;

		//지점 A 방향에서 선분을 벗어난 경우, A와의 거리를 구함
        if (dot1 < 0) {
            dist = Math.sqrt((train.x-p.p[0])**2 + (train.y-p.p[1])**2);
        }

        //지점 B 방향에서 선분을 벗어난 경우, B와의 거리를 구함
        else if (dot2 < 0) {
            dist = Math.sqrt((train.x-p.p[2])**2 + (train.y-p.p[3])**2);
        }

        //선분을 벗어나지 않은 경우, 선분과의 거리를 구함
        else {
            //벡터의 외적
            //외적 후 부호를 때면 평행사변형의 넓이가 나오고, 그걸 선분 AB의 길이로 나누면 그게 점과 선분사이의 거리
            var cross = AB.x*AP.y + AB.y*AP.x; //넓이
            var ab = Math.sqrt((p.p[2]-p.p[0])**2 + (p.p[3]-p.p[1])**2); //밑변 = 선분 AB의 길이
            var dist = Math.abs(cross) / ab; //높이 = 점과 선분 사이의 거리. 선언 위치가 이상하지만 어차피 호이스팅 되어서 상관은 없는 맛있는 스파게티 상태
        }

		//최소값 찾기
        if (min == null || min.d > dist) min = {
            d: dist, //최소값
            p: p //가장 가까운 선분 관련 정보
        };
	}
	return min;
}
