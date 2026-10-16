Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonAttackComponent = require("gge-module:export_ButtonAttackComponent");
var __s0local0 = function (__s1param0) {
  function ButtonAttackCollectorComponent(__s3param0) {
    return __s1param0.call(this, __s3param0.basicButton) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackCollectorComponent, __s1param0);
  ButtonAttackCollectorComponent.prototype.initAttackButton = function (__s5param0) {
    var __s5local0 = this;
    __s1param0.prototype.initAttackButton.call(this, __s5param0);
    if (this._worldMapObjectVO && (this._button.disp.mouseChildren = false, this._button.disp.visible = this.isVisible, this.isVisible)) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._button.disp);
      var __s5local1 = "CollectorRingMenueBtn_" + this.eventVO.collectInfoVO.collectorEventSkinName;
      var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local1));
      this._button.disp.addChild(__s5local2);
      __s5local2.doWhenLoaded(function (__s8param0) {
        if (__s5local0._button.enabled) {
          if (__s5local0._worldMapObjectVO.ownerInfo.level > 70 ? __dep_export_CastleModel.CastleModel.userData.level - __s5local0._worldMapObjectVO.ownerInfo.level > 10 + Math.max((__dep_export_CastleModel.CastleModel.userData.level - 70) / 2, 0) : __dep_export_CastleModel.CastleModel.userData.level - __s5local0._worldMapObjectVO.ownerInfo.level > 10) {
            __s5local0._button.enableButton = false;
            __s5local0._button.toolTipText = "collector_attack_restriction_tooltip";
          }
        }
        if (__s5local0._button.enabled && !__s5local0.shopEventVO) {
          __s5local0._button.enableButton = false;
          __s5local0._button.toolTipText = "errorCode_actionNotPossible";
        }
        __s5local0._button.disp.toolTipText = __s5local0._button.toolTipText;
      });
    }
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "shopEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackCollectorComponent.prototype.initNormalCastleHandling = function (__s15param0 = true) {
    __s1param0.prototype.initNormalCastleHandling.call(this, true);
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "isVisible", {
    get: function () {
      return this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CASTLE && this.eventVO && this._worldMapObjectVO.ownerInfo.playerID != __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackCollectorComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK, null);
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_eventAttack";
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ButtonAttackComponent.ButtonAttackComponent.prototype, "infoTextId").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "targetMC", {
    get: function () {
      return this._button.disp;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ButtonAttackComponent.ButtonAttackComponent.prototype, "targetMC").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackCollectorComponent;
}(__dep_export_ButtonAttackComponent.ButtonAttackComponent);
exports.ButtonAttackCollectorComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
