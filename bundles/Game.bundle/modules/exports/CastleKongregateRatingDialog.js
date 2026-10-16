Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleKongregateRatingDialog() {
    var __s3local0 = this;
    __s3local0.starsVoted = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleKongregateRatingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKongregateRatingDialog, __s1param0);
  CastleKongregateRatingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rateEmpire_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rateEmpire_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rating, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.highlightButtons(0);
    this.dialogDisp.star_0.mouseChildren = false;
    this.dialogDisp.star_1.mouseChildren = false;
    this.dialogDisp.star_2.mouseChildren = false;
    this.dialogDisp.star_3.mouseChildren = false;
    this.dialogDisp.star_4.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
  };
  CastleKongregateRatingDialog.prototype.highlightButtons = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < __s7param0; __s7local0++) {
      this.dialogDisp["star_" + __s7local0].mc_highlight.visible = true;
    }
    for (var __s7local1 = __s7param0; __s7local1 < CastleKongregateRatingDialog.STARCOUNT; __s7local1++) {
      this.dialogDisp["star_" + __s7local1].mc_highlight.visible = false;
    }
  };
  CastleKongregateRatingDialog.prototype.selectButtons = function (__s13param0) {
    this.starsVoted = __s13param0;
    if (__s13param0 > 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    }
    for (var __s13local0 = __s13param0; __s13local0 < CastleKongregateRatingDialog.STARCOUNT; __s13local0++) {
      this.dialogDisp["star_" + __s13local0].gotoAndStop(CastleKongregateRatingDialog.FRAME_UNSELECT);
    }
    for (var __s13local1 = 0; __s13local1 < __s13param0; __s13local1++) {
      this.dialogDisp["star_" + __s13local1].gotoAndStop(CastleKongregateRatingDialog.FRAME_SELECT);
    }
  };
  CastleKongregateRatingDialog.prototype.onMouseOver = function (__s20param0) {
    switch (__s20param0.target) {
      case this.dialogDisp.star_0:
        this.highlightButtons(1);
        break;
      case this.dialogDisp.star_1:
        this.highlightButtons(2);
        break;
      case this.dialogDisp.star_2:
        this.highlightButtons(3);
        break;
      case this.dialogDisp.star_3:
        this.highlightButtons(4);
        break;
      case this.dialogDisp.star_4:
        this.highlightButtons(5);
        break;
      case this.dialogDisp.mc_hitArea:
        this.highlightButtons(0);
    }
  };
  CastleKongregateRatingDialog.prototype.onClick = function (__s23param0) {
    switch (__s23param0.target) {
      case this.dialogDisp.star_0:
        this.selectButtons(1);
        break;
      case this.dialogDisp.star_1:
        this.selectButtons(2);
        break;
      case this.dialogDisp.star_2:
        this.selectButtons(3);
        break;
      case this.dialogDisp.star_3:
        this.selectButtons(4);
        break;
      case this.dialogDisp.star_4:
        this.selectButtons(5);
        break;
      case this.dialogDisp.btn_ok:
        if (!this.dialogDisp.btn_ok.enabled) {
          break;
        }
        if (this.starsVoted == 5) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleKongregateNotificationDialog.CastleKongregateNotificationDialog);
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_rateEmpire_sucess_Failed")));
        }
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferQuestAccept(this.dialogProperties.offerVO.id, this.starsVoted);
        this.hide();
    }
  };
  Object.defineProperty(CastleKongregateRatingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKongregateRatingDialog.__initialize_static_members = function () {
    CastleKongregateRatingDialog.NAME = "CastleKongregateRating";
    CastleKongregateRatingDialog.STARCOUNT = 5;
    CastleKongregateRatingDialog.FRAME_UNSELECT = 1;
    CastleKongregateRatingDialog.FRAME_SELECT = 2;
  };
  return CastleKongregateRatingDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleKongregateRatingDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleKongregateNotificationDialog = require("gge-module:export_CastleKongregateNotificationDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
