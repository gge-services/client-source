Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AAutoRecruitmentCopyListItemVE = require("gge-module:export_AAutoRecruitmentCopyListItemVE");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyListItemToolsVE(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyListItemToolsVE, __s1param0);
  AutoRecruitmentCopyListItemToolsVE.prototype.applyNewVO = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.vo.data.CN)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_production, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.data.P)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_tools, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.data.T)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_wood, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.data.W)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_stone, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.data.S)).autoFitToBounds = true;
  };
  AutoRecruitmentCopyListItemToolsVE.prototype.getErrorToolTipTextId = function (__s7param0) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        return "dialog_copyQueue_disabled_producing";
      case __dep_exact_26a421b704832cff.ERROR.MISSING_REQUIRED_BUILDING:
        return "dialog_copyQueue_disabled_toolsUnavailable";
      default:
        return __s1param0.prototype.getErrorToolTipTextId.call(this, __s7param0);
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemToolsVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "dialog_copyQueue_tools_eventEnd";
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyListItemVE.AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemToolsVE;
}(__dep_export_AAutoRecruitmentCopyListItemVE.AAutoRecruitmentCopyListItemVE);
exports.AutoRecruitmentCopyListItemToolsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
