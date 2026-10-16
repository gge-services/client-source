Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ConstructionItemSlotSmall(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param3.mc_item, 1.1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemSlotSmall, __s1param0);
  ConstructionItemSlotSmall.prototype.update = function () {
    if (!this._buildingVO && this.interactionData) {
      this._buildingVO = this.interactionData.selectedBuilding;
    }
    this.disp.mc_item.gotoAndStop(this.itemVO ? this.itemVO.rarity + 2 : 1);
    __s1param0.prototype.update.call(this);
  };
  Object.defineProperty(ConstructionItemSlotSmall.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    set: function (__s10param0) {
      this._buildingVO = __s10param0;
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlotSmall.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._buildingVO = null;
  };
  return ConstructionItemSlotSmall;
}(require("gge-module:export_ConstructionItemSlot").ConstructionItemSlot);
exports.ConstructionItemSlotSmall = __s0local0;
