Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
var __dep_export_GeneralIntroductionGuidanceBasicCommand = require("gge-module:export_GeneralIntroductionGuidanceBasicCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralIntroductionGuidanceAssignBaronCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionGuidanceAssignBaronCommand, __s1param0);
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.internalExecute = function () {
    this.waitForExternalDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog, this.bindFunction(this.hintGeneralIcon));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintGeneralIcon = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    if (this.defenceDialog.sourceArea.equalsOtherWMO(__s7local0.objectId, __s7local0.kingdomID)) {
      this.removeGuidance();
      var __s7local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(__s7local0).assignedGeneralVO;
      if (!__s7local1 || __s7local1 && __s7local1.generalID != this.targetGeneralID) {
        this.arrows.add(this.defenceDialog.dialogDisp.mc_generalIcon, true, true, 1, new __s0local0(-25, 55));
        this.showGuidance(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_03");
        this.waitForOpenGeneralsPanel();
        this.waitForExternalDialogClose(__dep_export_CastleDefenceDialog.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
      }
    }
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintOpenGeneralSelection = function () {
    this.removeGuidance();
    var __s11local0 = this.defenceDialog.dialogDisp.mc_generals.mc_generalInfo.btn_switch;
    this.arrows.add(__s11local0, true, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForCloseGeneralsPanel();
    this.waitForExternalDialogClose(__dep_export_CastleDefenceDialog.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintGeneralSelection = function () {
    var __s13local0 = this;
    this.removeGuidance();
    this.defenceDialog.openGeneralSelection();
    var __s13local1 = this.defenceDialog.generalSelection.items.find(function (__s15param0) {
      return __s15param0.generalVO && __s15param0.generalVO.generalID == __s13local0.targetGeneralID;
    });
    if (__s13local1) {
      this.arrows.add(__s13local1.disp, false, true, 1, new __s0local0(25, 55));
    }
    this.waitForCloseGeneralsPanel();
    this.waitForCloseGeneralsSelection();
    this.waitForExternalDialogClose(__dep_export_CastleDefenceDialog.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForOpenGeneralsPanel = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS, this.bindFunction(this.hintGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForCloseGeneralsPanel = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS, this.bindFunction(this.hintGeneralIcon));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForOpenGeneralsSelection = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForCloseGeneralsSelection = function () {
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.registerListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.onCloseDialog = function () {
    this.removeGuidance();
    this.internalExecute();
  };
  Object.defineProperty(GeneralIntroductionGuidanceAssignBaronCommand.prototype, "targetGeneralID", {
    get: function () {
      return this._questConditionVO.conditionData[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAssignBaronCommand.prototype, "defenceDialog", {
    get: function () {
      return this.layoutManager.getDialog(__dep_export_CastleDefenceDialog.CastleDefenceDialog);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralIntroductionGuidanceAssignBaronCommand;
}(__dep_export_GeneralIntroductionGuidanceBasicCommand.GeneralIntroductionGuidanceBasicCommand);
exports.GeneralIntroductionGuidanceAssignBaronCommand = __s0local1;
