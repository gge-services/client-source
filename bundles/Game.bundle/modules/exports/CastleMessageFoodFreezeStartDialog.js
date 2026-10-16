Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_MessageDowntimeStatusVO = require("gge-module:export_MessageDowntimeStatusVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleMessageFoodFreezeStartDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMessageFoodFreezeStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageFoodFreezeStartDialog, __s1param0);
  CastleMessageFoodFreezeStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleMessageFoodFreezeStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    switch (this.dialogProperties.messageScope) {
      case __dep_export_MessageDowntimeStatusVO.MessageDowntimeStatusVO.SCOPE_FOOD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_productionDownTime_freeze_food_header"));
        this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_productionDownTime_freeze_food_desc"));
        this.dialogDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleMessageFoodFreezeStartDialog.FOOD_TEASER, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleMessageFoodFreezeStartDialog.FOOD_TEASER), null, 0, false));
        break;
      case __dep_export_MessageDowntimeStatusVO.MessageDowntimeStatusVO.SCOPE_FOOD_MEAD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_productionDownTime_freeze_foodmead_header"));
        this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_productionDownTime_freeze_foodmead_desc"));
        this.dialogDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleMessageFoodFreezeStartDialog.FOOD_MEAD_TEASER, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleMessageFoodFreezeStartDialog.FOOD_MEAD_TEASER), null, 0, false));
    }
  };
  CastleMessageFoodFreezeStartDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleMessageFoodFreezeStartDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageFoodFreezeStartDialog.NAME = "FoodFreezeEndExt";
  CastleMessageFoodFreezeStartDialog.FOOD_TEASER = "FoodFreezeTeaser_Food";
  CastleMessageFoodFreezeStartDialog.FOOD_MEAD_TEASER = "FoodFreezeTeaser_FoodMead";
  return CastleMessageFoodFreezeStartDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMessageFoodFreezeStartDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
