Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function SamuraiEventEndDialogItemVO() {
    this._rank = -1;
    this._points = -1;
    this._rewards = new __dep_export_CollectableList.CollectableList();
  }
  SamuraiEventEndDialogItemVO.prototype.parseServerObject = function (__s5param0, __s5param1) {
    this._points = __dep_exact_f855840627e6e145.int(__s5param1.hasOwnProperty("OP") ? __s5param1.OP : -1);
    this._rank = __dep_exact_f855840627e6e145.int(__s5param1.hasOwnProperty("OR") ? __s5param1.OR : -1);
    this._rewards = __dep_export_CastlePopUpHelper.CastlePopUpHelper.createRewardList(__s5param1);
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_ALLIANCE;
        this._rank = 1;
        break;
      case __dep_exact_26a421b704832cff.PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_ALLIANCE;
        break;
      case __dep_exact_26a421b704832cff.PopupConst.SAMURAI_INVASION_FIRST_PLAYER:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER;
        this._rank = 1;
        break;
      case __dep_exact_26a421b704832cff.PopupConst.SAMURAI_INVASION_TOPX_PLAYER:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER;
        break;
      case __dep_exact_26a421b704832cff.PopupConst.DAIMYO_REWARD:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_DAIMYO;
        this._rewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getEndReward(__s5param1.RSID, this._rank).rewardIds);
    }
  };
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    set: function (__s12param0) {
      this._rank = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (__s16param0) {
      this._points = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiEventEndDialogItemVO.TYPE_DAIMYO = "daimyo";
  SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER = "singleplayer";
  SamuraiEventEndDialogItemVO.TYPE_ALLIANCE = "alliance";
  SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER = [SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER, SamuraiEventEndDialogItemVO.TYPE_ALLIANCE, SamuraiEventEndDialogItemVO.TYPE_DAIMYO];
  return SamuraiEventEndDialogItemVO;
}();
exports.SamuraiEventEndDialogItemVO = __s0local0;
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
