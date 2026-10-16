Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_RelicEquipmentInfoShutterConfig = require("gge-module:export_RelicEquipmentInfoShutterConfig");
var __s0local0 = function (__s1param0) {
  function RelicUpgradeDialogEffects(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogEffects, __s1param0);
  RelicUpgradeDialogEffects.prototype.init = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicEnchanter_stats_nothingSelected")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._infoComponent = new __dep_export_RelicEquipmentUpgradeInfoComponent.RelicEquipmentUpgradeInfoComponent();
    this._infoComponent.init(this.disp.mc_items.mc_transform);
    this._infoComponent.disp.scaleX = this._infoComponent.disp.scaleY = RelicUpgradeDialogEffects.INFO_SCALE;
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  RelicUpgradeDialogEffects.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.updateWithNewVO(null, __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT);
  };
  RelicUpgradeDialogEffects.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  RelicUpgradeDialogEffects.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  RelicUpgradeDialogEffects.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  RelicUpgradeDialogEffects.prototype.updateWithNewVO = function (__s15param0, __s15param1) {
    var __s15local0 = !!__s15param0 && __s15param0.getEnchantmentLevel() == __dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel;
    var __s15local1 = this._currentVO == __s15param0 && !__s15local0;
    this._currentVO = __s15param0;
    var __s15local2 = this.currentVO != null;
    if (__s15local2) {
      this._infoComponent.shutterConfig.category = __s15param1 == __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT ? __dep_export_RelicEquipmentInfoShutterConfig.RelicEquipmentInfoShutterConfig.CATEGORY_GEM : __dep_export_RelicEquipmentInfoShutterConfig.RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT;
      this._infoComponent.shutterConfig.effectsType = __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_NORMAL;
      this._infoComponent.currentEnchantmentLevel = __s15param0.getEnchantmentLevel();
      this._infoComponent.updateWithNewVO(this.currentVO.vo);
    }
    this.disp.mc_items.visible = __s15local2;
    this.disp.txt_info.visible = !__s15local2;
    if (!__s15local1) {
      var __s15local3 = this._infoComponent.getCategoryYPosition(__dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS + "normal") * RelicUpgradeDialogEffects.INFO_SCALE;
      var __s15local4 = Math.max(0, this.disp.mc_items.mc_transform.height - this.disp.mc_mask.height);
      this._scrollComponent.init(0, __s15local4, RelicUpgradeDialogEffects.SCROLL_DELTA, RelicUpgradeDialogEffects.SCROLL_DELTA);
      this._scrollComponent.setVisibility(__s15local4 > 0 && __s15local2);
      this._scrollComponent.scrollToValue(__s15local3);
    }
  };
  RelicUpgradeDialogEffects.prototype.onScroll = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(RelicUpgradeDialogEffects.prototype, "currentVO", {
    get: function () {
      return this._currentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogEffects.prototype, "infoComponent", {
    get: function () {
      return this._infoComponent;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogEffects.SCROLL_DELTA = 30;
  RelicUpgradeDialogEffects.INFO_SCALE = 1.3937;
  return RelicUpgradeDialogEffects;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogEffects = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RelicEquipmentInfoComponent = require("gge-module:export_RelicEquipmentInfoComponent");
var __dep_export_RelicEquipmentUpgradeInfoComponent = require("gge-module:export_RelicEquipmentUpgradeInfoComponent");
var __dep_export_RelicUpgradeDialogStatus = require("gge-module:export_RelicUpgradeDialogStatus");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
