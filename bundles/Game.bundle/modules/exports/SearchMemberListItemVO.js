Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SearchMemberListItemVO() {
    this.playerID = 0;
    this.distance = 0;
  }
  SearchMemberListItemVO.prototype.parseItem = function (__s5param0) {
    this.playerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this.distance = __dep_exact_f855840627e6e145.int(__s5param0.D);
    this.playerOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
  };
  return SearchMemberListItemVO;
}();
exports.SearchMemberListItemVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
