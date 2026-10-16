Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function LegendTempleBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LegendTempleBuildingVE, __s1param0);
  LegendTempleBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onLegendSkillDataUpdated));
  };
  LegendTempleBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLegendSkillDataUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onLegendSkillDataUpdated));
  };
  Object.defineProperty(LegendTempleBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_LegendTemple;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  LegendTempleBuildingVE.prototype.getRingMenuButtons = function () {
    var __s13local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s13local0.push(new __dep_export_RingMenuButtonLegendTemple.RingMenuButtonLegendTemple());
    return __s13local0;
  };
  LegendTempleBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (this.statusIcons.iconList.length <= 0) {
      var __s15local0 = __dep_export_CastleModel.CastleModel.legendSkillData.availablePoints > 0;
      var __s15local1 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN);
      var __s15local2 = __s15local1 ? __s15local1.amount : 0;
      var __s15local3 = __s15local2 > 0;
      var __s15local4 = __s15local2 > 0 && __s15local2 >= __s15local1.xmlCurrencyVO.softCap;
      var __s15local5 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT);
      var __s15local6 = __s15local5 ? __s15local5.amount : 0;
      var __s15local7 = __s15local6 > 0;
      var __s15local8 = __s15local6 > 0 && __s15local6 >= __s15local5.xmlCurrencyVO.softCap;
      var __s15local9 = "legendTemple";
      __s15local9 += __s15local4 ? "2" : __s15local3 ? "1" : "0";
      __s15local9 += __s15local0 ? "1" : "0";
      __s15local9 += __s15local8 ? "2" : __s15local7 ? "1" : "0";
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.getByName(__s15local9));
    }
  };
  LegendTempleBuildingVE.prototype.onLegendSkillDataUpdated = function (__s18param0) {
    this.updateStatusIcon();
  };
  return LegendTempleBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.LegendTempleBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RingMenuButtonLegendTemple = require("gge-module:export_RingMenuButtonLegendTemple");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
