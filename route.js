module.exports.getList = function() {
    return [
        {s: '유노카와', p: [41.781143, 140.790361, 41.781071, 140.789886]},
        {s: '유노카와~유노카와온센', p: [41.781071, 140.789886, 41.779911, 140.785356]},
        {s: '유노카와온센', p: [41.779911, 140.785356, 41.780234, 140.784798]},
        {s: '유노카와온센~하코다테아레나마에', p: [41.780234, 140.784798, 41.781799, 140.782663]},
        {s: '하코다테아레나마에', p: [41.781799, 140.782663, 41.781965, 140.782252]},
        {s: '하코다테아레나마에~코마바샤코마에', p: [41.781965, 140.782252, 41.782996, 140.779822]},
        {s: '코마바샤코마에', p: [41.782996, 140.779822, 41.783525, 140.778599]},
        {s: '코마바샤코마에~케이바죠마에', p: [41.783525, 140.778599, 41.784133, 140.776673]},
        {s: '케이바죠마에', p: [41.784133, 140.776673, 41.784258, 140.776294]},
        {s: '케이바죠마에~후카보리쵸', p: [41.784258, 140.776294, 41.787062, 140.770172]},
        {s: '후카보리쵸', p: [41.787062, 140.770172, 41.787209, 140.769834]},
        {s: '후카보리쵸~카시와기쵸', p: [41.787209, 140.769834, 41.787912, 140.765562]},
        {s: '카시와기쵸', p: [41.787912, 140.765562, 41.787952, 140.764850]},
        {s: '카시와기쵸~스기나미쵸', p: [41.787952, 140.764850, 41.788621, 140.759452]},
        {s: '스기나미쵸', p: [41.788621, 140.759452, 41.788765, 140.757936]},
        {s: '스기나미쵸~고료카쿠코엔마에', p: [41.788765, 140.757936, 41.789144, 140.753070]},
        {s: '고료카쿠코엔마에', p: [41.789144, 140.753070, 41.789238, 140.752052]},
        {s: '고료카쿠코엔마에~츄오뵤인마에', p: [41.789238, 140.752052, 41.789210, 140.751640]},
        {s: '고료카쿠코엔마에~츄오뵤인마에', p: [41.789210, 140.751640, 41.786754, 140.750983]},
        {s: '츄오뵤인마에', p: [41.786754, 140.750983, 41.786528, 140.750922]},
        {s: '츄오뵤인마에~치요가다이', p: [41.786528, 140.750922, 41.784023, 140.748474]},
        {s: '치요가다이', p: [41.784023, 140.748474, 41.783853, 140.748264]},
        {s: '치요가다이~호리카와쵸', p: [41.783853, 140.748264, 41.780895, 140.744601]},
        {s: '호리카와쵸', p: [41.780895, 140.744601, 41.780406, 140.743960]},
        {s: '호리카와쵸~쇼와바시', p: [41.780406, 140.743960, 41.778031, 140.740955]},
        {s: '쇼와바시', p: [41.778031, 140.740955, 41.777832, 140.740682]},
        {s: '쇼와바시~치토세쵸', p: [41.777832, 140.740682, 41.776210, 140.738705]},
        {s: '치토세쵸', p: [41.776210, 140.738705, 41.775751, 140.738112]},
        {s: '치토세쵸~신카와쵸', p: [41.775751, 140.738112, 41.773958, 140.735886]},
        {s: '신카와쵸', p: [41.773958, 140.735886, 41.773506, 140.735306]},
        {s: '신카와쵸~마츠카제쵸', p: [41.773506, 140.735306, 41.771681, 140.733374]},
        {s: '마츠카제쵸', p: [41.771681, 140.733374, 41.771317, 140.733026]},
        {s: '마츠카제쵸~하코다테에키마에', p: [41.771317, 140.733026, 41.772510, 140.727988]},
        {s: '하코다테에키마에', p: [41.772510, 140.727988, 41.772151, 140.727748]},
        {s: '하코다테에키마에~시야쿠쇼마에', p: [41.772151, 140.727748, 41.769742, 140.725853]},
        {s: '시야쿠쇼마에', p: [41.769742, 140.725853, 41.769218, 140.725374]},
        {s: '시야쿠쇼마에~우오이치바도리', p: [41.769218, 140.725374, 41.767074, 140.723247]},
        {s: '우오이치바도리', p: [41.767074, 140.723247, 41.766502, 140.722634]},
        {s: '우오이치바도리~쥬지가이', p: [41.766502, 140.722634, 41.764214, 140.718932]},
        {s: '쥬지가이', p: [41.764214, 140.718932, 41.764083, 140.718462]},
        {s: '쥬지가이~스에히로쵸', p: [41.764083, 140.718462, 41.763937, 140.717558]}, //앞부분은 분기 지점
        {s: '쥬지가이~스에히로쵸', p: [41.763937, 140.717558, 41.766530, 140.712592]},
        {s: '스에히로쵸', p: [41.766530, 140.712592, 41.766676, 140.712369]},
        {s: '스에히로쵸~오마치', p: [41.766676, 140.712369, 41.769711, 140.709564]},
        {s: '오마치', p: [41.769711, 140.709564, 41.770187, 140.709082]},
        {s: '오마치~하코다테도크마에', p: [41.770187, 140.709082, 41.773046, 140.704447]},
        {s: '하코다테도크마에', p: [41.773046, 140.704447, 41.773263, 140.704122]},
        {s: '쥬지가이~호라이쵸', p: [41.764083, 140.718462, 41.763846, 140.718333]}, //앞부분은 분기 지점
        {s: '쥬지가이~호라이쵸', p: [41.763846, 140.718333, 41.761206, 140.719852]},
        {s: '호라이쵸', p: [41.761206, 140.719852, 41.760405, 140.720347]},
        {s: '호라이쵸~아오야기쵸', p: [41.760405, 140.720347, 41.759606, 140.720914]},
        {s: '호라이쵸~아오야기쵸', p: [41.759606, 140.720914, 41.758323, 140.720460]},
        {s: '호라이쵸~아오야기쵸', p: [41.758323, 140.720460, 41.756586, 140.718590]},
        {s: '아오야기쵸', p: [41.756586, 140.718590, 41.756372, 140.718345]},
        {s: '아오야기쵸~야치가시라', p: [41.756372, 140.718345, 41.755245, 140.717116]},
        {s: '아오야기쵸~야치가시라', p: [41.755245, 140.717116, 41.753504, 140.716490]},
        {s: '야치가시라', p: [41.753504, 140.716490, 41.753050, 140.716330]},
    ];
};