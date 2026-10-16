Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __s0local0 = function (__s1param0) {
  function CastleWorldCupFinisher() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWorldCupFinisher.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupFinisher, __s1param0);
  CastleWorldCupFinisher.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_worldCup"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    this.initBasicButtons([this.dialogDisp.btnOk, this.dialogDisp.btnClose]);
  };
  CastleWorldCupFinisher.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0 = new __dep_exact_92d05af59ee2ff30_2.LocalizedDateTimeVO(new Date(this.dialogProperties.date * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC), __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
    var __s7local1 = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_worldCup_team" + this.dialogProperties.teamA);
    var __s7local2 = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_worldCup_team" + this.dialogProperties.teamB);
    var __s7local3 = __dep_exact_f855840627e6e145.int(this.dialogProperties.paymentC2 * this.dialogProperties.bonusC2 / 100);
    if (this.dialogProperties.winner == this.dialogProperties.vote) {
      switch (this.dialogProperties.winner) {
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_A:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin1";
          break;
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_B:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin2";
          break;
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin3";
      }
      this.tfDesc.textContentVO.textReplacements = [__s7local0, __s7local1, __s7local2, __s7local3];
    } else {
      switch (this.dialogProperties.winner) {
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_A:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose1";
          break;
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_B:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose2";
          break;
        case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose3";
      }
      this.tfDesc.textContentVO.textReplacements = [__s7local0, __s7local1, __s7local2];
    }
  };
  CastleWorldCupFinisher.prototype.onClick = function (__s13param0) {
    switch (__s13param0.target) {
      case this.dialogDisp.btnClose:
      case this.dialogDisp.btnOk:
        this.hide();
    }
  };
  Object.defineProperty(CastleWorldCupFinisher.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldCupFinisher.__initialize_static_members = function () {
    CastleWorldCupFinisher.NAME = "CastleWorldCupFinisherExternal";
  };
  return CastleWorldCupFinisher;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleWorldCupFinisher = __s0local0;
var __dep_export_WorldCupEventVO = require("gge-module:export_WorldCupEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
