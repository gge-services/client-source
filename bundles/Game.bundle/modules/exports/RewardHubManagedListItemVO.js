Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function RewardHubManagedListItemVO(__s3param0, __s3param1) {
    this._hubRewardID = __s3param0.hubRewardID;
    this._eventId = __s3param0.mainEventID;
    this._subEventId = __s3param0.subEventID;
    this._rewardTiers = __s3param0.rewardTiers;
    this._extraTierUnlockCostC2 = __s3param0.extraTierUnlockCostC2;
    this._isExtraTierUnlocked = __s3param0.isExtraTierUnlocked;
    this._rewardHubItemTextVO = __s3param1;
  }
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "txtTitle", {
    get: function () {
      return this._rewardHubItemTextVO.txtTitlte;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "txtSubtitle", {
    get: function () {
      return this._rewardHubItemTextVO.txtSubtitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "mcIcon", {
    get: function () {
      return __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this._eventId, new __s0local0(RewardHubManagedListItemVO.EVENT_ICON_SIZE, RewardHubManagedListItemVO.EVENT_ICON_SIZE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "mcSubIcon", {
    get: function () {
      if (this._eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
        if (this._subEventId > 0) {
          return __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this._subEventId, new __s0local0(RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE));
        }
        var __s11local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Icon_Promotion"))();
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s11local0, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE);
        return __s11local0;
      }
      if (this._subEventId > 0 && this._eventId != this._subEventId) {
        return __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this._subEventId, new __s0local0(RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE));
      } else {
        return new createjs.MovieClip();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "rewardsTiers", {
    get: function () {
      return this._rewardTiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "extraTierUnlockCostC2", {
    get: function () {
      return this._extraTierUnlockCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "isExtraTierUnlocked", {
    get: function () {
      return this._isExtraTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "hubRewardID", {
    get: function () {
      return this._hubRewardID;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManagedListItemVO.EVENT_ICON_SIZE = 46;
  RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE = 20;
  return RewardHubManagedListItemVO;
}();
exports.RewardHubManagedListItemVO = __s0local1;
