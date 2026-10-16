Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ButtonAttackVillageComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackVillageComponent, __s1param0);
  Object.defineProperty(ButtonAttackVillageComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackVillageComponent.prototype.initAsRingmenuButton = function () {
    var __s7local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO");
    var __s7local1 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "VillageMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ResourceIsleMapobjectVO");
    if (__s7local0 || __s7local1) {
      var __s7local2 = this._worldMapObjectVO.isOwnMapobject;
      var __s7local3 = __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      this._button.visible = !__s7local2 && !__s7local3;
      if (this._button.visible) {
        this._button.toolTipText = null;
        this._button.enableButton = true;
        if (this._worldMapObjectVO.ownerInfo) {
          if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
            this._button.toolTipText = "cantAttackAlliedPlayer";
            this._button.enableButton = false;
          } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
            var __s7local4 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
            this._button.toolTipText = {
              t: "castleHasCooldown",
              p: [__s7local4]
            };
            this._button.enableButton = false;
          } else if (__s7local0) {
            if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isSpectator) {
              this._button.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
              this._button.visible = false;
              this._button.enableButton = false;
            } else if (!this._worldMapObjectVO.canBeAttacked()) {
              this._button.toolTipText = "dialog_factionEvent_blockedByTower";
              this._button.enableButton = false;
              var __s7local5 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
              this._button.visible = this._worldMapObjectVO.ownerInfo.factionID != __s7local5.ownFaction;
            }
          } else if (__s7local1) {
            var __s7local6 = this._worldMapObjectVO.typeName;
            var __s7local7 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO["villageCap" + __s7local6]);
            this._button.toolTipText = "";
            if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.hasContor) {
              if (__dep_export_CastleModel.CastleModel.userData.villageList.getCountByResourceTypeIncludingCurrentConquerMovements(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __s7local6) >= __s7local7) {
                switch (__s7local6) {
                  case "Food":
                    this._button.toolTipText = "errorCode_186";
                    break;
                  case "Wood":
                    this._button.toolTipText = "errorCode_184";
                    break;
                  case "Stone":
                    this._button.toolTipText = "errorCode_185";
                }
                this._button.enableButton = false;
              }
            } else {
              this._button.toolTipText = "errorCode_187";
              this._button.enableButton = false;
            }
          }
        }
      }
    } else {
      this._button.visible = false;
    }
  };
  Object.defineProperty(ButtonAttackVillageComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackVillageComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, this._worldMapObjectVO.attackType, null);
  };
  return ButtonAttackVillageComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAttackVillageComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
