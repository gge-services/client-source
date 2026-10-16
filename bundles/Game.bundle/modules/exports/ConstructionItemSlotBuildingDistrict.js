Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ConstructionItemSlotBuildingDistrict(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param3.mc_item, 1.02);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemSlotBuildingDistrict, __s1param0);
  ConstructionItemSlotBuildingDistrict.prototype.update = function () {
    if (this.buildingVO) {
      __s1param0.prototype.update.call(this);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_item.mc_icon);
      if (this.itemVO) {
        this.disp.mc_item.mc_icon.visible = false;
        __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.renderWithoutBuildingIcon(this.itemVO, this.bindFunction(this.updateSlotItemDimension), this.disp.mc_item.mc_icon);
      }
      this.disp.visible = true;
    } else {
      this.disp.visible = false;
    }
  };
  ConstructionItemSlotBuildingDistrict.prototype.updateSlotItemDimension = function (__s10param0) {
    this.disp.mc_item.mc_icon.visible = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(this.disp.mc_item.mc_icon, 52, 52);
  };
  ConstructionItemSlotBuildingDistrict.prototype.onClick = function (__s12param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.disp.mc_item:
          this.clickCallback(this);
      }
    }
  };
  return ConstructionItemSlotBuildingDistrict;
}(require("gge-module:export_ConstructionItemSlot").ConstructionItemSlot);
exports.ConstructionItemSlotBuildingDistrict = __s0local0;
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
