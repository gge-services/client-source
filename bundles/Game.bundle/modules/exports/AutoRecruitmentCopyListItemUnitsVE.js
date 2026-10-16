Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_AAutoRecruitmentCopyListItemVE = require("gge-module:export_AAutoRecruitmentCopyListItemVE");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyListItemUnitsVE(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.mc_skull.toolTipText = "dialog_copyQueue_starved";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyListItemUnitsVE, __s1param0);
  AutoRecruitmentCopyListItemUnitsVE.prototype.applyNewVO = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.vo.data.CN)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_food, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_f855840627e6e145.int(this.vo.data.F))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_foodProduction, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.foodProduction)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_foodCycle, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.foodProductionAfterLoop)).autoFitToBounds = true;
    var __s5local0 = this.vo.recruitmentTime > 0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.vo.recruitmentTime) : "-";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s5local0)).autoFitToBounds = true;
    this.updateStarveEntry();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_units, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.vo.data.U)).autoFitToBounds = true;
    __dep_export_CostHelper.CostHelper.setCostColor(this.disp.txt_foodProduction, this.foodProduction < 0);
    __dep_export_CostHelper.CostHelper.setCostColor(this.disp.txt_foodCycle, this.foodProductionAfterLoop < 0);
  };
  AutoRecruitmentCopyListItemUnitsVE.prototype.updateStarveEntry = function () {
    var __s7local0 = this.getFoodIsEmptyTimeInSeconds();
    var __s7local1 = __s7local0 > 0 && this.vo.recruitmentTime > 0 && __s7local0 - this.vo.recruitmentTime <= 0;
    this.disp.mc_skull.visible = __s7local1;
    var __s7local2 = "";
    if (this.vo.errorId == __dep_exact_26a421b704832cff.ERROR.MISSING_REQUIRED_BUILDING) {
      __s7local2 = "-";
    } else if (!__s7local1) {
      __s7local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s7local0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_timeStarve, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s7local2)).autoFitToBounds = true;
  };
  AutoRecruitmentCopyListItemUnitsVE.prototype.getErrorToolTipTextId = function (__s11param0) {
    switch (__s11param0) {
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        return "dialog_copyQueue_disabled_recruiting";
      case __dep_exact_26a421b704832cff.ERROR.MISSING_REQUIRED_BUILDING:
        return "dialog_copyQueue_disabled_unitsUnavailable";
      default:
        return __s1param0.prototype.getErrorToolTipTextId.call(this, __s11param0);
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "dialog_copyQueue_units_eventEnd";
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyListItemVE.AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListItemUnitsVE.prototype.getFoodIsEmptyTimeInSeconds = function () {
    var __s18local0 = this.foodProductionAfterLoop;
    var __s18local1 = __dep_exact_f855840627e6e145.int(this.vo.data.F);
    if (__s18local0 >= 0) {
      return -1;
    } else {
      return __s18local1 / -__s18local0 * 60 * 60;
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "foodProductionAfterLoop", {
    get: function () {
      return this.foodProduction - this.vo.data.AFC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemUnitsVE.prototype, "foodProduction", {
    get: function () {
      return this.vo.data.DF / 10;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemUnitsVE;
}(__dep_export_AAutoRecruitmentCopyListItemVE.AAutoRecruitmentCopyListItemVE);
exports.AutoRecruitmentCopyListItemUnitsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
