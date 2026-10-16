Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEilandTextComposer = require("gge-module:export_CastleEilandTextComposer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleEilandRankingDialogRules(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentPage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).pages = __s3local0.initPages();
    __s3local0.initBasicButtons([__s3local0.sublayerDisp.btn_arrowLeft, __s3local0.sublayerDisp.btn_arrowRight]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialogRules, __s1param0);
  CastleEilandRankingDialogRules.prototype.initPages = function () {
    var __s5local0 = [];
    for (var __s5local1 = CastleEilandRankingDialogRules.MIN_PAGE + 1; __s5local1 <= CastleEilandRankingDialogRules.MAX_PAGE + 1; __s5local1++) {
      var __s5local2 = this.sublayerDisp["page" + __s5local1];
      __s5local2.visible = false;
      __s5local0.push(__s5local2);
    }
    return __s5local0;
  };
  CastleEilandRankingDialogRules.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.itxt_pageIndicator = this.textFieldManager.registerTextField(this.sublayerDisp.txt_page, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [CastleEilandRankingDialogRules.MIN_PAGE + 1, CastleEilandRankingDialogRules.MAX_PAGE + 1]));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, this.scroll(CastleEilandRankingDialogRules.MIN_PAGE));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, true);
  };
  CastleEilandRankingDialogRules.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.sublayerDisp.btn_arrowRight:
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, this.scroll(this._currentPage + CastleEilandRankingDialogRules.SCROLL_RIGHT));
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, CastleEilandRankingDialogRules.MIN_PAGE != CastleEilandRankingDialogRules.MAX_PAGE);
          break;
        case this.sublayerDisp.btn_arrowLeft:
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowLeft, this.scroll(this._currentPage + CastleEilandRankingDialogRules.SCROLL_LEFT));
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_arrowRight, CastleEilandRankingDialogRules.MIN_PAGE != CastleEilandRankingDialogRules.MAX_PAGE);
      }
    }
  };
  CastleEilandRankingDialogRules.prototype.scroll = function (__s15param0) {
    this.currentPage = __s15param0;
    return this.currentPage != CastleEilandRankingDialogRules.MIN_PAGE && this.currentPage != CastleEilandRankingDialogRules.MAX_PAGE;
  };
  Object.defineProperty(CastleEilandRankingDialogRules.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRankingDialogRules.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (__s21param0) {
      this.pages[this._currentPage].visible = false;
      this._currentPage = __s21param0;
      this.pages[this._currentPage].visible = true;
      this.itxt_pageIndicator.textContentVO.textReplacements = [this._currentPage + 1, CastleEilandRankingDialogRules.MAX_PAGE + 1];
      switch (__s21param0) {
        case 0:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page1_header"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page1_textbox1"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page1_textbox2"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page1_textbox3"));
          break;
        case 1:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page2_header"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page2_textbox1"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page2_textbox2"));
          break;
        case 2:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page3_header"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page3_textbox"));
          break;
        case 3:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page4_textbox"));
          break;
        case 4:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page5_textbox"));
          break;
        case 5:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page6_textbox1"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page6_textbox2"));
          break;
        case 6:
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page7_textbox2"));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_manual_page7_textbox3"));
          var __s21local0 = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(52);
          var __s21local1 = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(57);
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_title_positive, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s21local0.textID));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_title_negative, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s21local1.textID));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_bonus_1, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleEilandTextComposer.CastleEilandTextComposer.generateBonusText(__s21local0)));
          this.textFieldManager.registerTextField(this.pages[__s21param0].txt_bonus_2, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleEilandTextComposer.CastleEilandTextComposer.generateBonusText(__s21local1)));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialogRules.__initialize_static_members = function () {
    CastleEilandRankingDialogRules.MIN_PAGE = 0;
    CastleEilandRankingDialogRules.MAX_PAGE = 6;
    CastleEilandRankingDialogRules.SCROLL_RIGHT = 1;
  };
  CastleEilandRankingDialogRules.SCROLL_LEFT = -1;
  return CastleEilandRankingDialogRules;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleEilandRankingDialogRules = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
