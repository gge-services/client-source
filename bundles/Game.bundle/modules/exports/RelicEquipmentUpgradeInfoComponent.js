Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_EffectValueSimple = require("gge-module:export_EffectValueSimple");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __dep_export_RelicEquipmentInfoComponent = require("gge-module:export_RelicEquipmentInfoComponent");
var __dep_export_RelicEquipmentInfoElementEnum = require("gge-module:export_RelicEquipmentInfoElementEnum");
var __dep_export_RelicEquipmentInfoShutterConfig = require("gge-module:export_RelicEquipmentInfoShutterConfig");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Container;
var __s0local2 = function (__s1param0) {
  function RelicEquipmentUpgradeInfoComponent() {
    var __s3local0 = this;
    __s3local0._currentEnchantmentLevel = 0;
    __s3local0._upgradeEffects = [];
    __s3local0._shutterConfig = new __dep_export_RelicEquipmentInfoShutterConfig.RelicEquipmentInfoShutterConfig();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicEquipmentUpgradeInfoComponent, __s1param0);
  RelicEquipmentUpgradeInfoComponent.prototype.addElementEffect = function (__s5param0, __s5param1) {
    if (__s5param0.relicEffectVO.effectType == __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_NORMAL && this._currentEnchantmentLevel < __dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      var __s5local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.EFFECT_ITEM_UPGRADE);
      var __s5local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s5param0.getUndefinedDescriptionText()));
      __s5local1.height = __s5local1.textHeight;
      __s5local0.mc_bottom.y = __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 4 + __s5local1.textHeight;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.mc_bottom.txt_valueFrom, this.getValueTextVO(__s5param0));
      var __s5local2 = __s5param0.clone();
      __s5local2.effectValue.add(new __dep_export_EffectValueSimple.EffectValueSimple().parseFromValueArray([__dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEnchanter(this.currentEnchantmentLevel + 1).relicNormalEffectBoost]), null);
      var __s5local3 = this._shutterConfig.slotTypeMatchesCategory(__s5param1) && this.isShutterException();
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.mc_bottom.txt_valueToDefault, this.getValueTextVO(__s5local2, __s5local3));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.mc_bottom.txt_valueToSuccess, this.getValueTextVO(__s5local2, __s5local3));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.mc_bottom.txt_valueToFailed, this.getValueTextVO(__s5local2, __s5local3));
      __s5local0.mc_background.height = __s5local0.mc_bottom.y + __s5local0.mc_bottom.height + __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
      var __s5local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.relicXml.getStarRating(__s5param0.power));
      var __s5local5 = 0;
      var __s5local6 = 0;
      var __s5local7 = 0;
      if (__s5local4 >= 7) {
        __s5local5 = __s5local6 = __s5local7 = 4;
      } else if (__s5local4 >= 4) {
        __s5local5 = 3;
        __s5local6 = __s5local4 >= 5 ? 3 : 2;
        __s5local7 = __s5local4 >= 6 ? 3 : 2;
      } else {
        __s5local5 = 2;
        __s5local6 = __s5local4 >= 2 ? 2 : 1;
        __s5local7 = __s5local4 >= 3 ? 2 : 1;
      }
      __s5local0.mc_rating.mc_star0.gotoAndStop(__s5local5);
      __s5local0.mc_rating.mc_star1.gotoAndStop(__s5local6);
      __s5local0.mc_rating.mc_star2.gotoAndStop(__s5local7);
      __s5local0.mc_bottom.mc_arrow.mc_default.alpha = 1;
      __s5local0.mc_bottom.mc_arrow.mc_success.alpha = 0;
      __s5local0.mc_bottom.mc_arrow.mc_failed.alpha = 0;
      __s5local0.mc_bottom.txt_valueToDefault.alpha = 1;
      __s5local0.mc_bottom.txt_valueToSuccess.alpha = 0;
      __s5local0.mc_bottom.txt_valueToFailed.alpha = 0;
      this._upgradeEffects.push([__s5param1, this._currentElements[this._currentElements.length - 1]]);
    } else {
      __s1param0.prototype.addElementEffect.call(this, __s5param0, __s5param1);
    }
    return __s5local0;
  };
  RelicEquipmentUpgradeInfoComponent.prototype.createShutterDisp = function (__s12param0) {
    var __s12local0 = new __s0local1();
    __s12local0.mouseChildren = false;
    __s12local0.mouseEnabled = false;
    var __s12local1 = new __s0local0();
    __s12local1.graphics.beginFill(0, 0.3);
    __s12local1.graphics.drawRect(0, 0, __s12param0.width, __s12param0.height);
    __s12local1.graphics.endFill();
    __s12local0.addChild(__s12local1);
    __s12local0.x = 0;
    __s12local0.y = 0;
    return __s12local0;
  };
  RelicEquipmentUpgradeInfoComponent.prototype.clearElements = function () {
    __s1param0.prototype.clearElements.call(this);
    this.clearAnimations();
  };
  RelicEquipmentUpgradeInfoComponent.prototype.clearAnimations = function () {
    if (this._upgradeEffects != null) {
      for (var __s16local0 = 0, __s16local1 = this._upgradeEffects; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          var __s16local3 = __s16local2[1].clip.currentshownDisplayObject;
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.mc_arrow.mc_default);
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.mc_arrow.mc_success);
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.mc_arrow.mc_failed);
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.txt_valueToDefault);
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.txt_valueToSuccess);
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s16local3.mc_bottom.txt_valueToFailed);
        }
      }
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.playUpgradeAnimation = function (__s22param0) {
    this.clearAnimations();
    if (this._upgradeEffects != null) {
      for (var __s22local0 = 0, __s22local1 = this._upgradeEffects; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          var __s22local3 = __s22local2[1].clip.currentshownDisplayObject;
          if (!this._shutterConfig.slotTypeMatchesCategory(__s22local2[0]) || !this.isShutterException()) {
            if (__s22param0 == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT) {
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_default, true);
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_success, false);
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_failed, false);
              this.startFading(__s22local3.mc_bottom.txt_valueToDefault, true);
              this.startFading(__s22local3.mc_bottom.txt_valueToSuccess, false);
              this.startFading(__s22local3.mc_bottom.txt_valueToFailed, false);
            } else {
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_default, false);
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_success, __s22param0 == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS);
              this.startFading(__s22local3.mc_bottom.mc_arrow.mc_failed, __s22param0 == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
              this.startFading(__s22local3.mc_bottom.txt_valueToDefault, false);
              this.startFading(__s22local3.mc_bottom.txt_valueToSuccess, __s22param0 == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS);
              this.startFading(__s22local3.mc_bottom.txt_valueToFailed, __s22param0 == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
            }
          }
        }
      }
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.startFading = function (__s31param0, __s31param1) {
    if (__s31param1) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s31param0, RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION, {
        alpha: __s31param0.alpha
      }, {
        alpha: 1
      });
    } else if (__s31param0.alpha > 0) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s31param0, RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION, {
        alpha: __s31param0.alpha
      }, {
        alpha: 0
      });
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.getValueTextVO = function (__s35param0, __s35param1 = false) {
    if (__s35param1) {
      return new __dep_exact_92d05af59ee2ff30.TextVO("-");
    }
    var __s35local0 = "";
    __s35local0 = __s35param0.relicEffectVO.valueTextType == __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.VALUE_TYPE_INCREASE ? "value_percentage_add" : "value_percentage_subtract";
    if (__s35param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS || __s35param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS) {
      __s35local0 = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD;
    }
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s35local0, __s35param0.effectValue.textReplacements);
  };
  RelicEquipmentUpgradeInfoComponent.prototype.isShutterException = function () {
    return this._shutterConfig.category != __dep_export_RelicEquipmentInfoShutterConfig.RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT || !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "RelicGemVO");
  };
  RelicEquipmentUpgradeInfoComponent.prototype.onEffectCategoryAdded = function (__s41param0, __s41param1) {
    __s1param0.prototype.onEffectCategoryAdded.call(this, __s41param0, __s41param1);
    if (this._shutterConfig && this._shutterConfig.slotTypeMatchesCategory(__s41param1) && this._shutterConfig.effectsType == __s41param0 && this.isShutterException()) {
      this._currentCategoryDisp.addChild(this.createShutterDisp(this._currentCategoryDisp));
    }
  };
  Object.defineProperty(RelicEquipmentUpgradeInfoComponent.prototype, "shutterConfig", {
    get: function () {
      return this._shutterConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentUpgradeInfoComponent.prototype, "currentEnchantmentLevel", {
    get: function () {
      return this._currentEnchantmentLevel;
    },
    set: function (__s48param0) {
      this._currentEnchantmentLevel = __s48param0;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS = "success";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED = "failed";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT = "default";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION = 0.25;
  return RelicEquipmentUpgradeInfoComponent;
}(__dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent);
exports.RelicEquipmentUpgradeInfoComponent = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
