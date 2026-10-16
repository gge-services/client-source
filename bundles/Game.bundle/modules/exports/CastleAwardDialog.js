Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleAwardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAwardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAwardDialog, __s1param0);
  CastleAwardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_vote]);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_vote.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_award_button"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("european_games_award_title"));
    this.itxt_copy1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("bam_award_copy1"));
    this.itxt_copy2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("bam_award_copy2"));
  };
  CastleAwardDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.setPicture();
    this.setButton();
  };
  CastleAwardDialog.prototype.setButton = function () {
    this.dialogDisp.btn_vote.visible = !this.env.loginIsKeyBased;
  };
  CastleAwardDialog.prototype.setPicture = function () {
    var __s11local0 = this.dialogProperties.messageVO.subtypeEvent;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_awardHolder);
    var __s11local1 = "";
    if (__s11local0 == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_BAEM_AWARD) {
      __s11local1 = "CastleWelcomeNews27";
    } else if (__s11local0 == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL) {
      __s11local1 = "CastleWelcomeNews30";
    } else if (__s11local0 == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_EUROPEAN_AWARD) {
      __s11local1 = "CastleWelcomeNewsEGA14";
    } else if (__s11local0 == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_GAMEX_AWARD) {
      __s11local1 = "AwardGameX";
    } else if (__s11local0 == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD) {
      __s11local1 = "CastleWelcomeNews44";
    }
    this.dialogDisp.mc_awardHolder.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s11local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11local1), null, 0, false, __dep_exact_81dacdf05bd32292_2.getDefinitionByName("LoadingAnimation")).asDisplayObject());
  };
  CastleAwardDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_vote:
        this.gotoURL();
    }
  };
  CastleAwardDialog.prototype.gotoURL = function () {
    try {
      var __s21local0;
      switch (this.dialogProperties.messageVO.subtypeEvent) {
        case __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_BAEM_AWARD:
        case __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
          __s21local0 = new __dep_exact_81dacdf05bd32292.URLRequest("http://www.bamaward.de");
          break;
        case __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
          __s21local0 = new __dep_exact_81dacdf05bd32292.URLRequest("http://european-games-award.com/voting");
          break;
        case __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_GAMEX_AWARD:
          __s21local0 = new __dep_exact_81dacdf05bd32292.URLRequest("http://gamex.com.tr/award/best-browser-game/");
          break;
        case __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
          __s21local0 = new __dep_exact_81dacdf05bd32292.URLRequest("http://www.mmooftheyear.com/vote#91X6228");
      }
      __dep_exact_81dacdf05bd32292_3.navigateToURL(__s21local0, "_blank");
    } catch (__s25local0) {
      __dep_exact_9e901e8e2483a22f_2.error("nor URL Request possible");
    }
  };
  Object.defineProperty(CastleAwardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAwardDialog.__initialize_static_members = function () {
    CastleAwardDialog.NAME = "CastleAward";
  };
  return CastleAwardDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAwardDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
