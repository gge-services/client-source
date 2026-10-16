Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_AModernInfoCatalogDialogSublayer = require("gge-module:export_AModernInfoCatalogDialogSublayer");
var __dep_export_InfoCatalogTopicVO = require("gge-module:export_InfoCatalogTopicVO");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogInfo(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogInfo, __s1param0);
  SamuraiDaimyoEventDialogInfo.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("eventGuide"))).autoFitToBounds = true;
    this.topics.init(this.getTopics(), SamuraiDaimyoEventDialogInfo.TOPIC_ASSET_CLIP_NAME, __dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.NAME, SamuraiDaimyoEventDialogInfo.TOPIC_MASK_HEIGHT);
    this.addPage(SamuraiDaimyoEventDialogInfo.PAGE_TEXT, __dep_export_InfoCatalogPageScrollText.InfoCatalogPageScrollText, this.subLayerDisp.mc_pages.mc_pageText);
  };
  SamuraiDaimyoEventDialogInfo.prototype.updateInfoPage = function (__s7param0, __s7param1) {
    __s7param0.fillContent("dialog_samuraiInvasionDaimyo_guide_" + __s7param1.topicType.name + "_desc");
  };
  SamuraiDaimyoEventDialogInfo.prototype.getTopics = function () {
    var __s9local0 = [];
    for (var __s9local1 = 0, __s9local2 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_SamuraiDaimyoInfoTopicEnum.SamuraiDaimyoInfoTopicEnum); __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      __s9local0.push(new __dep_export_InfoCatalogTopicVO.InfoCatalogTopicVO(__s9local3, "dialog_samuraiInvasionDaimyo_guide_" + __s9local3.name + "_header"));
    }
    return __s9local0;
  };
  SamuraiDaimyoEventDialogInfo.TOPIC_ASSET_CLIP_NAME = "SamuraiDaimyoEvent_InfoTopicsItem";
  SamuraiDaimyoEventDialogInfo.TOPIC_MASK_HEIGHT = 350;
  SamuraiDaimyoEventDialogInfo.PAGE_TEXT = "pageText";
  return SamuraiDaimyoEventDialogInfo;
}(__dep_export_AModernInfoCatalogDialogSublayer.AModernInfoCatalogDialogSublayer);
exports.SamuraiDaimyoEventDialogInfo = __s0local0;
var __dep_export_InfoCatalogPageScrollText = require("gge-module:export_InfoCatalogPageScrollText");
var __dep_export_SamuraiDaimyoEventDialog = require("gge-module:export_SamuraiDaimyoEventDialog");
var __dep_export_SamuraiDaimyoInfoTopicEnum = require("gge-module:export_SamuraiDaimyoInfoTopicEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
