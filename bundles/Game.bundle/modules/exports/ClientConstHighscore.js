Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstHighscore() {}
  ClientConstHighscore.getLeagueIdByLevel = function (__s5param0) {
    for (var __s5local0 = 0; __s5local0 < ClientConstHighscore.LEAGUE_LEVELS.length; ++__s5local0) {
      if (__s5param0 >= ClientConstHighscore.LEAGUE_LEVELS[__s5local0][0] && __s5param0 <= ClientConstHighscore.LEAGUE_LEVELS[__s5local0][1]) {
        return __s5local0 + 1;
      }
    }
    return 1;
  };
  ClientConstHighscore.__initialize_static_members = function () {
    ClientConstHighscore.LEAGUE_LEVELS = [[1, 19], [20, 29], [30, 39], [40, 49], [50, 69], [70, 70]];
  };
  return ClientConstHighscore;
}();
exports.ClientConstHighscore = __s0local0;
__s0local0.__initialize_static_members();
