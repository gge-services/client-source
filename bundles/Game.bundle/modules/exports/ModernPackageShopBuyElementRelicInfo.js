Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementRelicInfo() {
    var __s3local0 = this;
    __s3local0._infoComponent = new __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementRelicInfo, __s1param0);
  ModernPackageShopBuyElementRelicInfo.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_scroll).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_scroll]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
    this._infoComponent = new __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent();
    this._infoComponent.init(this.disp.mc_content, true);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernPackageShopBuyElementRelicInfo.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementRelicInfo.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this._infoComponent.updateWithNewVO(this.relicVO);
    this._infoComponent.disp.x = -this._infoComponent.disp.width * 0.5;
    var __s15local0 = Math.max(0, this.disp.mc_content.height - this.disp.mc_mask.height - 2);
    this._scrollComponent.init(0, __s15local0, 15, 15);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(__s15local0 > 0);
  };
  Object.defineProperty(ModernPackageShopBuyElementRelicInfo.prototype, "relicVO", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.parentDialog.dialogProperties.eventPackageVO.reward, "CollectableItemRelicVO")) {
        return this.parentDialog.dialogProperties.eventPackageVO.reward.vo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementRelicInfo.prototype.getDispHeight = function () {
    return 150;
  };
  ModernPackageShopBuyElementRelicInfo.prototype.onScroll = function () {
    this._infoComponent.disp.y = -this._scrollComponent.currentValue;
  };
  return ModernPackageShopBuyElementRelicInfo;
}(require("gge-module:export_AModernPackageShopBuyElement").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementRelicInfo = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_RelicEquipmentInfoComponent = require("gge-module:export_RelicEquipmentInfoComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
