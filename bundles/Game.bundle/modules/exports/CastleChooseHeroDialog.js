Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_1 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_HeroDecisionVO = require("gge-module:export_HeroDecisionVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleChooseHeroDialog() {
    var __s3local0 = this;
    __s3local0._heroesVector = [];
    __s3local0._heroID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleChooseHeroDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChooseHeroDialog, __s1param0);
  CastleChooseHeroDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = [this.dialogDisp.pick_btn];
    this.initBasicButtons(__s5local0);
    this.initHeroesIcons();
    this._pickBtn = this.dialogDisp.pick_btn.basicButton;
    this.setText();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.pick_btn, false);
    __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState("hero_selection_opened");
  };
  CastleChooseHeroDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.description_txt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_chooseHero_desc")).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.pick_btn.btn_txt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_chooseHero_choose"));
  };
  CastleChooseHeroDialog.prototype.initHeroesIcons = function () {
    this.dialogDisp.old_knight.basicButton = new __dep_exact_84d43d9c404bd4d8_1.HeroTwoStateButton(this.dialogDisp.old_knight);
    this._heroesVector.push(this.dialogDisp.old_knight.basicButton);
    this.dialogDisp.female_warrior.basicButton = new __dep_exact_84d43d9c404bd4d8_1.HeroTwoStateButton(this.dialogDisp.female_warrior);
    this._heroesVector.push(this.dialogDisp.female_warrior.basicButton);
    this.dialogDisp.young_knight.basicButton = new __dep_exact_84d43d9c404bd4d8_1.HeroTwoStateButton(this.dialogDisp.young_knight);
    this._heroesVector.push(this.dialogDisp.young_knight.basicButton);
    this._btnGroup = new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup(this._heroesVector);
  };
  CastleChooseHeroDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    var __s11local0;
    var __s11local1 = false;
    if (this._heroesVector != null) {
      for (var __s11local2 = 0, __s11local3 = this._heroesVector; __s11local2 < __s11local3.length; __s11local2++) {
        var __s11local4 = __s11local3[__s11local2];
        if (__s11local4 !== undefined && __s11local4.isSelected) {
          __s11local1 = true;
          __s11local0 = __s11local4;
        }
      }
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.pick_btn, __s11local1);
    if (__s11local1) {
      switch (__s11param0.target) {
        case this.dialogDisp.pick_btn:
          switch (__s11local0.disp) {
            case this.dialogDisp.old_knight:
              this._heroID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TutorialConst.TUTORIAL_HERO_1_ID);
              this._eventName = "hero_1_selected";
              break;
            case this.dialogDisp.young_knight:
              this._heroID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TutorialConst.TUTORIAL_HERO_0_ID);
              this._eventName = "hero_3_selected";
              break;
            case this.dialogDisp.female_warrior:
              this._heroID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TutorialConst.TUTORIAL_HERO_2_ID);
              this._eventName = "hero_2_selected";
          }
          this.sendHeroIdToServer(this._heroID, this._eventName);
          this.hide();
      }
    }
  };
  CastleChooseHeroDialog.prototype.sendHeroIdToServer = function (__s20param0, __s20param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_HeroDecisionVO.HeroDecisionVO(__s20param0));
    __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState(__s20param1);
  };
  CastleChooseHeroDialog.__initialize_static_members = function () {
    CastleChooseHeroDialog.NAME = "CastleChooseHero";
  };
  return CastleChooseHeroDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChooseHeroDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
