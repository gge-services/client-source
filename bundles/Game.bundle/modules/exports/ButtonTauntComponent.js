Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SLaunchWolfkingTauntAttackVO = require("gge-module:export_C2SLaunchWolfkingTauntAttackVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SkippableCooldownDialogProperties = require("gge-module:export_SkippableCooldownDialogProperties");
var __dep_export_SamuraiDaimyoTauntDialogProperties = require("gge-module:export_SamuraiDaimyoTauntDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonTauntComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonTauntComponent, __s1param0);
  Object.defineProperty(ButtonTauntComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonTauntComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
      this._button.visible = true;
      var __s7local0 = __dep_exact_f855840627e6e145.int(this.eventVO.playerRage);
      var __s7local1 = __dep_exact_f855840627e6e145.int(this.eventVO.neededPlayerRage);
      if (__s7local0 < __s7local1) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "dialog_nomadInvasion_khanCamp_insufficientRage_tooltip",
          p: [__s7local0, __s7local1]
        };
      } else {
        this._button.enableButton = true;
        this._button.toolTipText = null;
      }
    } else if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      this._button.visible = true;
      var __s7local2 = false;
      for (var __s7local3 = 0, __s7local4 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s7local3 < __s7local4.length; __s7local3++) {
        if ((__s7local7 = __s7local4[__s7local3]) !== undefined && !__s7local7.isMyMovement && __s7local7.targetAreaPos.equals(this._worldMapObjectVO.absAreaPos)) {
          __s7local2 = true;
          break;
        }
      }
      if (__s7local2) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "ringmenu_taunt_incoming"
        };
      } else {
        this._button.enableButton = true;
        this._button.toolTipText = null;
      }
    } else if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_WOLF_KING) {
      this._button.visible = true;
      __s7local2 = false;
      for (var __s7local5 = 0, __s7local6 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s7local5 < __s7local6.length; __s7local5++) {
        var __s7local7;
        if ((__s7local7 = __s7local6[__s7local5]) !== undefined && !__s7local7.isMyMovement && __s7local7.targetAreaPos.equals(this._worldMapObjectVO.absAreaPos)) {
          __s7local2 = true;
          break;
        }
      }
      this._button.enableButton = __dep_export_CastleModel.CastleModel.generalsIntroductionData.canTauntWolfking() && !__s7local2;
    } else {
      this._button.visible = false;
    }
  };
  ButtonTauntComponent.prototype.onClick = function () {
    if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNomadInvasionTauntDialog.CastleNomadInvasionTauntDialog);
    } else if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      if (this._worldMapObjectVO.isCoolingDown) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SkippableCooldownDialog.SkippableCooldownDialog, new __dep_export_SkippableCooldownDialogProperties.SkippableCooldownDialogProperties(this._worldMapObjectVO, this.bindFunction(this.tauntDaimyo), []));
      } else {
        this.tauntDaimyo();
      }
    } else if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_WOLF_KING) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLaunchWolfkingTauntAttackVO.C2SLaunchWolfkingTauntAttackVO());
    }
  };
  ButtonTauntComponent.prototype.tauntDaimyo = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SamuraiDaimyoTauntDialog.SamuraiDaimyoTauntDialog, new __dep_export_SamuraiDaimyoTauntDialogProperties.SamuraiDaimyoTauntDialogProperties(this._worldMapObjectVO));
  };
  Object.defineProperty(ButtonTauntComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonTauntComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_taunt";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonTauntComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonTauntComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SkippableCooldownDialog = require("gge-module:export_SkippableCooldownDialog");
var __dep_export_CastleNomadInvasionTauntDialog = require("gge-module:export_CastleNomadInvasionTauntDialog");
var __dep_export_SamuraiDaimyoTauntDialog = require("gge-module:export_SamuraiDaimyoTauntDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
