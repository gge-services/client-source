Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_OfficersSchoolDataEvent = require("gge-module:export_OfficersSchoolDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolDialogUnlock(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_OfficersSchoolUnlockedItems.OfficersSchoolUnlockedItems, "OfficersSchoolUnlockedItem", __dep_export_OfficersSchoolDialog.OfficersSchoolDialog.NAME);
    __s3local1.itemPaddingY = 4;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_mask).addItemContainerMc(__s3local0.subLayerDisp.mc_list).addSliderMc(__s3local0.subLayerDisp.mc_slider), __s3local1);
    __s3local0._scrollList.scrollComponent.scrollVO.addMouseWheelElements([__s3local0.disp]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolDialogUnlock, __s1param0);
  OfficersSchoolDialogUnlock.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_CastleModel.CastleModel.officerSchoolData.addEventListener(__dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_unitUnlock_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_trainingProgram_unitUnlock_desc"));
    this._scrollList.onShow();
    this.updateData();
  };
  OfficersSchoolDialogUnlock.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollList.onHide();
    __dep_export_CastleModel.CastleModel.officerSchoolData.removeEventListener(__dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
  };
  OfficersSchoolDialogUnlock.prototype.updateData = function (__s9param0 = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(" "));
    this.updateItems();
  };
  OfficersSchoolDialogUnlock.prototype.updateItems = function () {
    var __s11local0 = [];
    for (var __s11local1 = __dep_export_CastleModel.CastleModel.officerSchoolData.uniqueOfficersSchoolUnitWodIDs, __s11local2 = 0; __s11local2 < __s11local1.length; __s11local2 += 4) {
      var __s11local3 = {
        wodIDs: []
      };
      for (var __s11local4 = 0; __s11local4 < 4; __s11local4++) {
        if (__s11local2 + __s11local4 < __s11local1.length) {
          __s11local3.wodIDs.push(__s11local1[__s11local2 + __s11local4]);
        }
      }
      __s11local0.push(__s11local3);
    }
    this._scrollList.updateWithNewData(__s11local0);
  };
  return OfficersSchoolDialogUnlock;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.OfficersSchoolDialogUnlock = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_OfficersSchoolDialog = require("gge-module:export_OfficersSchoolDialog");
var __dep_export_OfficersSchoolUnlockedItems = require("gge-module:export_OfficersSchoolUnlockedItems");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
