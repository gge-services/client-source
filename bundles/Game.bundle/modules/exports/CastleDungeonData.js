Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleDungeonData(__s3param0) {
    this.generateData(__s3param0);
  }
  CastleDungeonData.prototype.generateData = function (__s5param0) {
    var __s5local0 = __s5param0.dungeons;
    this.maxVictories = new Map();
    this.dungeons = new Map();
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = parseInt(__s5local3.skipCosts || "");
          var __s5local5 = parseInt(__s5local3.kID || "");
          var __s5local6 = parseInt(__s5local3.countVictories || "");
          var __s5local7 = new __dep_export_DungeonVO.DungeonVO(__s5local5, __s5local6, __s5local4);
          if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.dungeons, __s5local5)) {
            this.dungeons.set(__s5local5, new Map());
          }
          this.dungeons.get(__s5local5)[__s5local6] = __s5local7;
          var __s5local8 = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE);
          if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.maxVictories, __s5local5)) {
            __s5local8 = __dep_exact_f855840627e6e145.int(this.maxVictories.get(__s5local5));
          }
          if (__s5local6 > __s5local8) {
            this.maxVictories.set(__s5local5, __s5local6);
          }
        }
      }
    }
  };
  CastleDungeonData.prototype.getMaxLevel = function (__s14param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getLevel(this.maxVictories.get(__s14param0), __s14param0));
  };
  CastleDungeonData.prototype.getDungeon = function (__s16param0, __s16param1) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(Math.min(this.maxVictories.get(__s16param0), __s16param1));
    return this.dungeons.get(__s16param0)[__s16local0];
  };
  return CastleDungeonData;
}();
exports.CastleDungeonData = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_DungeonVO = require("gge-module:export_DungeonVO");
