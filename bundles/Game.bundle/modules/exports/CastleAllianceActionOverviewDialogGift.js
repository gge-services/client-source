Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleAllianceGiftEvent = require("gge-module:export_CastleAllianceGiftEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceGiftScrollItemVO = require("gge-module:export_AllianceGiftScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceActionOverviewDialogGift(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceActionOverviewDialogGift, __s1param0);
  CastleAllianceActionOverviewDialogGift.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceGift_menu__copy"));
    this.initBasicButtons([this.subLayerDisp.mc_list.btn_up, this.subLayerDisp.mc_list.btn_down, this.subLayerDisp.mc_list.item0.btn_collect, this.subLayerDisp.mc_list.item1.btn_collect, this.subLayerDisp.mc_list.item2.btn_collect, this.subLayerDisp.mc_list.item3.btn_collect, this.subLayerDisp.mc_list.item4.btn_collect]);
    this.giftList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.subLayerDisp.mc_list, this.subLayerDisp.mc_list);
    this.giftList.scrollItemClass = __dep_export_AllianceGiftScrollItem.AllianceGiftScrollItem;
    this.createList();
    __dep_export_CastleModel.CastleModel.allianceGiftData.addEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogGift.prototype.onListUpdate = function (__s7param0) {
    this.createList();
  };
  CastleAllianceActionOverviewDialogGift.prototype.createList = function () {
    this.giftList.clear();
    var __s9local0 = __dep_exact_f855840627e6e145.int(this.giftList.currentStartIndex);
    var __s9local1 = __dep_export_CastleModel.CastleModel.allianceGiftData.gifts;
    if (__s9local1 != null) {
      for (var __s9local2 = 0, __s9local3 = __s9local1; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4 !== undefined) {
          var __s9local5 = new __dep_export_AllianceGiftScrollItemVO.AllianceGiftScrollItemVO(__s9local4);
          this.giftList.pushContent(__s9local5);
        }
      }
    }
    this.giftList.initList(__s9local0);
  };
  CastleAllianceActionOverviewDialogGift.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.allianceGiftData.removeEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
    if (this.giftList) {
      this.giftList.remove();
      this.giftList.clear();
      this.giftList = null;
    }
  };
  return CastleAllianceActionOverviewDialogGift;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceActionOverviewDialogGift = __s0local0;
var __dep_export_AllianceGiftScrollItem = require("gge-module:export_AllianceGiftScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
