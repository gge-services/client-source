Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleMultiBuildingInfoPanelItemVO = require("gge-module:export_CastleMultiBuildingInfoPanelItemVO");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleBuildingInfoDialog() {
    var __s3local0 = this;
    __s3local0._currentBuildingLevels = [];
    __s3local0._currentBuildingIndex = 0;
    __s3local0._scrollY = 0;
    __s3local0._scrollHeight = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleBuildingInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuildingInfoDialog, __s1param0);
  CastleBuildingInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_exact_84d43d9c404bd4d8.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_buildingLevels.btn_left, this.dialogDisp.mc_buildingLevels.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.mc_target.toolTipText = "target";
    this.dialogDisp.mc_source.toolTipText = "source";
    this.dialogDisp.mc_unique.toolTipText = "uniqueDeco";
    this.dialogDisp.mc_effectBuilding.toolTipText = "dialog_effectBuildings_effectDecoIcon_tooltip";
    this.dialogDisp.mc_fusionLevel.toolTipText = "fusionLevel";
    this.dialogDisp.mc_relic.toolTipText = "filter_decoType_onlyRelics";
    this.dialogDisp.mc_fusionLevel.mouseChildren = false;
    for (var __s5local0 = 0; __s5local0 < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS; ++__s5local0) {
      this.getDefaultEffectMc(__s5local0).mouseChildren = false;
    }
    for (__s5local0 = 0; __s5local0 < CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS; ++__s5local0) {
      this.getAdditionalEffectMc(__s5local0).mouseChildren = false;
    }
    this.itxtInfo = this.textFieldManager.registerTextField(this.dialogDisp.mc_content.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxtCondition = this.textFieldManager.registerTextField(this.dialogDisp.mc_content.txt_effectCondition, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    var __s5local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]);
    var __s5local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_content.mask.height, true);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s5local1, __s5local2, true);
    this._scrollY = this.dialogDisp.mc_content.y;
  };
  CastleBuildingInfoDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.initBuildingLevels();
    this.updateAllInfos();
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.dialogDisp.mc_content.mask.height), 30, 30);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleBuildingInfoDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    if (this._scrollComponent) {
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  CastleBuildingInfoDialog.prototype.initBuildingLevels = function () {
    this._currentBuildingLevels = [];
    if (this.dialogProperties.buildingVO.getUpgradeVO() || this.dialogProperties.buildingVO.getDowngradeVO()) {
      for (var __s16local0 = this.dialogProperties.buildingVO; __s16local0;) {
        this._currentBuildingLevels.push(__s16local0);
        __s16local0 = __s16local0.getUpgradeVO();
      }
      for (var __s16local1 = this.dialogProperties.buildingVO.getDowngradeVO(); __s16local1;) {
        this._currentBuildingLevels.unshift(__s16local1);
        __s16local1 = __s16local1.getDowngradeVO();
      }
      this._currentBuildingIndex = __dep_exact_f855840627e6e145.int(Math.max(0, this._currentBuildingLevels.indexOf(this.dialogProperties.buildingVO)));
    } else {
      this._currentBuildingIndex = 0;
    }
  };
  CastleBuildingInfoDialog.prototype.updateAllInfos = function () {
    this.updateTextInfos();
    this.updateIcon();
    this.updateFusionInfos();
    this.updateEffectItems(this.getDefaultEffectItemVOs(), this.dialogDisp.mc_content.mc_effects, CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS);
    this.updateEffectItems(this.getAdditionalEffectItemVOs(), this.dialogDisp.mc_content.mc_buildingEffects, CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS);
    this.updateEffectCondition();
    this.updateBuildingLevelInfo();
    this.layoutContent();
    this.dialogDisp.mc_effectBuilding.visible = this.getAdditionalEffectItemVOs().length > 0;
    this.dialogDisp.mc_relic.visible = this.getCurrentRelevantBuildingVO().isRelicBuilding;
  };
  CastleBuildingInfoDialog.prototype.updateTextInfos = function () {
    var __s26local0 = this.getCurrentRelevantBuildingVO();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s26local0.getNameString()))).autoFitToBounds = true;
    this.itxtInfo.textContentVO.textId = __s26local0.getShortInfoString();
  };
  CastleBuildingInfoDialog.prototype.updateIcon = function () {
    var __s28local0 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
    __s28local0.buildingVO = this.getCurrentRelevantBuildingVO();
    this._buildingClip = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_icon), __s28local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(150, 180)));
    var __s28local1 = this._buildingClip.itemVE.dispCreator.dispContainer.children[0] ? this._buildingClip.itemVE.dispCreator.dispContainer.children[0] : null;
    if (__s28local1 && __s28local0.buildingVO.hasFlag) {
      if (__s28local1.isLoaded) {
        this.addExtraClips();
      } else {
        __s28local1.doWhenLoaded(this.bindFunction(this.addExtraClips));
      }
    }
  };
  CastleBuildingInfoDialog.prototype.addExtraClips = function () {
    if (this._buildingClip.itemVE) {
      this.addFlagToPlaceholder(this._buildingClip.itemVE.dispCreator.dispContainer);
    }
  };
  CastleBuildingInfoDialog.prototype.addFlagToPlaceholder = function (__s36param0) {
    if (__s36param0.children) {
      var __s36local0 = undefined;
      for (var __s36local1 = 0; __s36local1 < __s36param0.children.length; __s36local1++) {
        if ((__s36local0 = __s36param0.children[__s36local1]).flagHolder) {
          var __s36local2;
          for (var __s36local3 = 0; __s36local3 < __s36local0.children.length; __s36local3++) {
            if (__s36local0.children[__s36local3] && __s36local0.children[__s36local3].name == "flagHolder") {
              var __s36local4 = this.createAdditionalClip(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG);
              __s36local0.children[__s36local3].addChild(__s36local4.asDisplayObject());
              __s36local2 = true;
            }
          }
          if (__s36local2 && __s36local0.parent && __s36local0.parent.cacheCanvas) {
            __s36local0.parent.updateCache();
          }
        } else {
          this.addFlagToPlaceholder(__s36local0);
        }
      }
    }
  };
  CastleBuildingInfoDialog.prototype.createAdditionalClip = function (__s47param0) {
    var __s47local0 = __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s47param0.assetAndClipName);
    var __s47local1 = __dep_exact_9e901e8e2483a22f.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s47param0.assetAndClipName, __s47local0, this.getFlagClipColor(), null, null, false);
    return new __dep_exact_9e901e8e2483a22f.GoodgameBitmapClipExternal(__s47local1, 12, __dep_export_IsoHelper.IsoHelper.view.areAnimationsActive);
  };
  CastleBuildingInfoDialog.prototype.getFlagClipColor = function () {
    var __s49local0 = [];
    var __s49local1 = __dep_export_CastleModel.CastleModel.userData.playerCrest;
    if (__s49local1) {
      __s49local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", __s49local1.colorsFour));
      return __s49local0;
    } else {
      return __s49local0;
    }
  };
  CastleBuildingInfoDialog.prototype.updateFusionInfos = function () {
    var __s53local0 = this.getCurrentRelevantBuildingVO();
    if (this.hasFusionInfo()) {
      var __s53local1 = __s53local0.fusionInfoVO;
      this.dialogDisp.mc_target.visible = __s53local1.isFusionTarget;
      this.dialogDisp.mc_source.visible = __s53local1.isFusionSource;
      this.dialogDisp.mc_unique.visible = __s53local0.isUnique();
      this.dialogDisp.mc_fusionLevel.visible = __s53local1.isFusionSource || __s53local1.isFusionTarget;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionLevel.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s53local1.getCurrentLevel()));
    } else {
      this.dialogDisp.mc_target.visible = false;
      this.dialogDisp.mc_source.visible = false;
      this.dialogDisp.mc_unique.visible = false;
      this.dialogDisp.mc_fusionLevel.visible = false;
    }
  };
  CastleBuildingInfoDialog.prototype.updateEffectItems = function (__s57param0, __s57param1, __s57param2) {
    __s57param1.visible = __s57param0.length > 0;
    if (__s57param1.visible) {
      for (var __s57local0 = 0; __s57local0 < __s57param2; ++__s57local0) {
        var __s57local1 = this.getEffectMc(__s57local0, __s57param1);
        var __s57local2 = __s57local0 < __s57param0.length ? __s57param0[__s57local0] : null;
        if (__s57local2) {
          __s57local1.visible = true;
          this.textFieldManager.registerTextField(__s57local1.txt_value, __s57local2.textVO).autoFitToBounds = true;
          __s57local1.toolTipText = __s57local2.tooltipText;
          __dep_exact_9e901e8e2483a22f.MovieClipHelper.replaceMovieClip(__s57local1.mc_icon, __s57local2.iconClass);
          __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s57local1.mc_icon, 25, 25);
        } else {
          __s57local1.visible = false;
        }
      }
    }
  };
  CastleBuildingInfoDialog.prototype.updateBuildingLevelInfo = function () {
    var __s64local0 = this.getCurrentRelevantBuildingVO();
    var __s64local1 = !this.hasFusionInfo() && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s64local0, "ADecoBuildingVO");
    this.dialogDisp.mc_buildingLevels.visible = __s64local1;
    if (__s64local1) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingLevels.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s64local0.level));
      this.dialogDisp.mc_buildingLevels.btn_left.visible = this._currentBuildingIndex > 0;
      this.dialogDisp.mc_buildingLevels.btn_right.visible = this._currentBuildingIndex < this._currentBuildingLevels.length - 1;
    }
  };
  CastleBuildingInfoDialog.prototype.updateEffectCondition = function () {
    this.itxtCondition.textContentVO.textId = "";
    this.dialogDisp.mc_content.txt_effectCondition.visible = this.itxtCondition.textContentVO.textId != "";
  };
  CastleBuildingInfoDialog.prototype.scrollBuildingLevel = function (__s69param0) {
    var __s69local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(this._currentBuildingIndex + __s69param0, 0, this._currentBuildingLevels.length - 1));
    if (__s69local0 != this._currentBuildingIndex) {
      this._currentBuildingIndex = __s69local0;
      this.updateAllInfos();
    }
  };
  CastleBuildingInfoDialog.prototype.layoutContent = function () {
    var __s72local0 = this.dialogDisp.mc_content;
    __s72local0.mc_buildingEffects.y = 0;
    this.itxtCondition.y = 0;
    var __s72local1 = this.itxtInfo.textHeight;
    if (__s72local0.mc_buildingEffects.visible) {
      __s72local1 += 10;
      __s72local0.mc_buildingEffects.y = __s72local1;
      __s72local1 += __s72local0.mc_buildingEffects.height;
    }
    if (this.itxtCondition.visible) {
      __s72local1 += 6;
      this.itxtCondition.y = __s72local1;
      __s72local1 += this.itxtCondition.textHeight;
    }
    __s72local1 += 10;
    __s72local0.mc_effects.y = __s72local1;
    var __s72local2 = 3 + Math.ceil(this.getDefaultEffectItemVOs().length / 3) * 30;
    this._scrollHeight = __s72local1 + __s72local2 + 2;
  };
  CastleBuildingInfoDialog.prototype.getEffectMc = function (__s76param0, __s76param1) {
    return __s76param1.getChildByName("mc_value" + __s76param0);
  };
  CastleBuildingInfoDialog.prototype.getAdditionalEffectMc = function (__s78param0) {
    return this.getEffectMc(__s78param0, this.dialogDisp.mc_content.mc_buildingEffects);
  };
  CastleBuildingInfoDialog.prototype.getDefaultEffectMc = function (__s80param0) {
    return this.getEffectMc(__s80param0, this.dialogDisp.mc_content.mc_effects);
  };
  CastleBuildingInfoDialog.prototype.getCurrentRelevantBuildingVO = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.dialogProperties.buildingVO, "ADecoBuildingVO") || this._currentBuildingLevels.length <= 0) {
      return this.dialogProperties.buildingVO;
    } else {
      return this._currentBuildingLevels[this._currentBuildingIndex];
    }
  };
  CastleBuildingInfoDialog.prototype.getDefaultEffectItemVOs = function () {
    var __s86local0 = this.getCurrentRelevantBuildingVO();
    var __s86local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s86local0, "AEffectBuildingVO") ? __s86local0.infoDialogVO : null;
    var __s86local2 = [];
    if (__s86local1) {
      for (var __s86local3 = 0, __s86local4 = __s86local1.items; __s86local3 < __s86local4.length; __s86local3++) {
        var __s86local5 = __s86local4[__s86local3];
        if (__s86local5 !== undefined && __s86local5.isVisibleInInfoDialog) {
          __s86local2.push(__s86local5);
        }
      }
    }
    if (__s86local2.length < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS && __s86local0.xp > 0) {
      (__s86local5 = new __dep_export_CastleMultiBuildingInfoPanelItemVO.CastleMultiBuildingInfoPanelItemVO()).textVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s86local0.xp]);
      __s86local5.tooltipText = __dep_export_CastleModel.CastleModel.userData.isLegend ? "dialog_buildingInfo_xp_legend" : "dialog_buildingInfo_xp";
      __s86local5.iconClass = __dep_export_CastleModel.CastleModel.userData.isLegend ? Library.CastleInterfaceElements.Icon_XP_Legend : Library.CastleInterfaceElements.Icon_XP;
      __s86local5.isVisibleInInfoDialog = true;
      __s86local2.push(__s86local5);
    }
    if (__s86local2.length < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS && __s86local0.mightValue > 0) {
      (__s86local5 = new __dep_export_CastleMultiBuildingInfoPanelItemVO.CastleMultiBuildingInfoPanelItemVO()).textVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s86local0.mightValue);
      __s86local5.tooltipText = "dialog_buildingInfo_might";
      __s86local5.iconClass = Library.CastleInterfaceElements.Icon_Might_starOnly;
      __s86local5.isVisibleInInfoDialog = true;
      __s86local2.push(__s86local5);
    }
    return __s86local2;
  };
  CastleBuildingInfoDialog.prototype.getAdditionalEffectItemVOs = function () {
    var __s94local0 = this.getCurrentRelevantBuildingVO();
    var __s94local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s94local0, "AEffectBuildingVO") ? __s94local0.infoDialogVO : null;
    var __s94local2 = [];
    if (__s94local1) {
      for (var __s94local3 = 0, __s94local4 = __s94local1.items; __s94local3 < __s94local4.length; __s94local3++) {
        var __s94local5 = __s94local4[__s94local3];
        if (__s94local5 !== undefined && __s94local5.isAdditionalEffect) {
          __s94local2.push(__s94local5);
        }
      }
    }
    return __s94local2;
  };
  CastleBuildingInfoDialog.prototype.hasFusionInfo = function () {
    var __s100local0 = this.getCurrentRelevantBuildingVO();
    return __dep_exact_81dacdf05bd32292.instanceOfClass(__s100local0, "ADecoBuildingVO") && __s100local0.isFusionRelevant();
  };
  CastleBuildingInfoDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  CastleBuildingInfoDialog.prototype.onClick = function (__s104param0) {
    if (__dep_exact_84d43d9c404bd4d8.ButtonHelper.isButtonEnabled(__s104param0.target)) {
      __s1param0.prototype.onClick.call(this, __s104param0);
      switch (__s104param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_buildingLevels.btn_left:
          this.scrollBuildingLevel(-1);
          break;
        case this.dialogDisp.mc_buildingLevels.btn_right:
          this.scrollBuildingLevel(1);
      }
    }
  };
  Object.defineProperty(CastleBuildingInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingInfoDialog.NAME = "CastleBuildingInfoEx_Nov23";
  CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS = 9;
  CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS = 3;
  return CastleBuildingInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBuildingInfoDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
