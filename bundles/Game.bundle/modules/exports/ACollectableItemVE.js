Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_MCReplacer = require("gge-module:export_MCReplacer");
var __dep_export_CastleRewardInfoDialogProperties = require("gge-module:export_CastleRewardInfoDialogProperties");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function ACollectableItemVE() {
    var __s3local0 = this;
    __s3local0._itemType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    __s3local0._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s3local0._triggerOnAllIconDispLoadedManually = false;
    __s3local0._scaleManually = false;
    __s3local0.isTouch = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemVE, __s1param0);
  ACollectableItemVE.prototype.init = function (__s5param0, __s5param1) {
    this._vo = __s5param0;
    this._renderer = __s5param1;
    this._itemType = __s5param0.itemType;
    this.dispCreator.cacheDisp = false;
    this.initIconContainer();
    this.dispCreator.init(this.iconContainer);
  };
  ACollectableItemVE.prototype.initIconContainer = function () {
    this._iconContainer = new __s0local0();
    var __s7local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(this);
    this.iconContainer.name = __s7local0.slice(__s7local0.lastIndexOf(":") + 1);
    this.iconContainer.mouseChildren = false;
  };
  ACollectableItemVE.prototype.destroyIconContainer = function () {
    if (this.iconContainer) {
      this.iconContainer.removeChildren();
      if (this.iconContainer.parent) {
        this.iconContainer.parent.removeChild(this.iconContainer);
      }
      this._iconContainer = null;
    }
  };
  ACollectableItemVE.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.dispCreator.onLoadedSignal.removeAll();
  };
  ACollectableItemVE.prototype.updateIconDimension = function () {
    if (!this._scaleManually) {
      var __s15local0 = this.iconGetDimension();
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(this._dispCreator.dispContainer, __s15local0);
    }
    this._iconContainer.visible = true;
  };
  ACollectableItemVE.prototype.iconUpdate = function () {
    if (this.iconContainer) {
      this._iconContainer.x = this._iconContainer.y = 0;
      this._iconContainer.visible = false;
      this.iconDestroy();
      this.dispCreator.switchCreationState(true);
      this.iconCreate();
      if (!this.triggerOnAllIconDispLoadedManually) {
        this.dispCreator.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
      }
      this.dispCreator.switchCreationState(false);
    }
  };
  ACollectableItemVE.prototype.iconCreate = function () {};
  ACollectableItemVE.prototype.iconDestroy = function () {
    this.dispCreator.reset();
    this._iconContainer.x = this._iconContainer.y = 0;
  };
  ACollectableItemVE.prototype.iconGetDimension = function () {
    var __s26local0 = this.dispCreator.dispContainer;
    var __s26local1 = new __s0local1();
    if (__s26local0.width == 0 && __s26local0.height == 0 && __s26local0.children.length > 0 && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s26local0.children[0], "BaseContentReplacer")) {
      var __s26local2 = __s26local0.children[0];
      __s26local1.x = __s26local2.getOriginWidth();
      __s26local1.y = __s26local2.getOriginHeight();
      __s26local2.addEventListener(__dep_export_MCReplacer.MCReplacer.MC_REPLACER_DONE, this.bindFunction(this.onContentReplacerDone));
    } else {
      __s26local1.x = __s26local0.width;
      __s26local1.y = __s26local0.height;
    }
    var __s26local3 = 1;
    if (this.itemType != __dep_export_CollectableEnum.CollectableEnum.BOOSTER || this.options.icon.useSmallBoosterIcons) {
      var __s26local4 = this.options.icon.dimension.y / __s26local1.y;
      var __s26local5 = this.options.icon.dimension.x / __s26local1.x;
      if (__s26local4 < __s26local5) {
        __s26local3 = __s26local4;
      } else if (__s26local5 <= __s26local4) {
        __s26local3 = __s26local5;
      }
    } else {
      __s26local3 = this.options.icon.dimension.x / __s26local1.x;
    }
    var __s26local6 = this._renderer.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
    return __s26local3 *= __s26local6 ? __s26local6.transform.scale : 1;
  };
  ACollectableItemVE.prototype.onContentReplacerDone = function (__s34param0) {
    this.updateIconDimension();
    if (this.dispCreator.dispContainer.children.length > 0 && this.dispCreator.dispContainer.children[0]) {
      this.dispCreator.dispContainer.children[0].removeEventListener(__dep_export_MCReplacer.MCReplacer.MC_REPLACER_DONE, this.bindFunction(this.onContentReplacerDone));
    }
  };
  ACollectableItemVE.prototype.textfieldUpdate = function () {
    this.textfieldSetText(this.vo.getTextfieldText());
  };
  ACollectableItemVE.prototype.textfieldSetText = function (__s39param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s39param0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
  };
  ACollectableItemVE.prototype.textfieldSetTextAsNumber = function (__s41param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s41param0, this.options.textfield.useKiloAbbreviationForAmount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
  };
  ACollectableItemVE.prototype.textfieldBackgroundVisible = function () {
    return false;
  };
  ACollectableItemVE.prototype.tooltipUpdate = function () {
    var __s45local0 = this.renderer.clips.getTooltipTargetMc();
    if (__s45local0) {
      __s45local0.mouseChildren = false;
      __s45local0.toolTipText = this.tooltipCreate();
    }
  };
  ACollectableItemVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByTextId(this.vo.getTooltipTextId());
  };
  ACollectableItemVE.prototype.tooltipShowAdvanced = function () {
    if (this.isTouch) {
      this.isTouch = false;
      var __s50local0 = this.renderer.clips.getTooltipTargetMc();
      if (__s50local0 && __s50local0.toolTipText) {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show(__s50local0.toolTipText, __s50local0);
      }
    }
  };
  ACollectableItemVE.prototype.tooltipCreateByAmount = function (__s54param0) {
    var __s54local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s54param0);
    __s54local0 = this.renderer.options.tooltip.useAmount ? __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.vo.amount), __s54local0]) : __s54local0;
    return __s54local0 = this.vo.grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, ["reward_forAllianceFunds", __s54local0]) : __s54local0;
  };
  ACollectableItemVE.prototype.tooltipCreateByTextId = function (__s56param0) {
    if (!__s56param0 || __s56param0 == "") {
      return null;
    }
    var __s56local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__s56param0);
    return __s56local0 = this.vo.grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, ["reward_forAllianceFunds", __s56local0]) : __s56local0;
  };
  ACollectableItemVE.prototype.costTextfieldUpdate = function () {};
  ACollectableItemVE.prototype.costTextfieldSetAsAmountAndStorage = function () {
    var __s61local0;
    var __s61local1 = new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.vo.amount, this.options.costTextfield.useMillionAbbreviationForAmount ? {
      compactThreshold: 1000000
    } : null);
    __s61local0 = this.options.costTextfield.usePlusOnPositiveValues && this.vo.amount >= 0 ? __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s61local1]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)) : __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, __s61local1, new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    if (this.options.costTextfield.showAvailableStorage) {
      var __s61local2 = new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(this.vo);
      var __s61local3 = new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CostHelper.CostHelper.getAvailableGoods(__s61local2), this.options.costTextfield.useMillionAbbreviationForAmount ? {
        compactThreshold: 1000000
      } : null);
      __s61local0.text = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s61local1.numberValue, __s61local3.numberValue]);
    }
    if (!!this.options.costTextfield.enableMarkOnNotEnough && !this.options.costTextfield.usePlusOnPositiveValues && (this.options.costTextfield.useOtherResourceStorage ? __dep_export_CostHelper.CostHelper.getAvailableGoodsFromCollectableList(this.options.costTextfield.useOtherResourceStorage, new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(this.vo)) < this.vo.amount : !!__dep_export_CastleModel.CastleModel.areaData.activeArea && !!__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && __dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(this.vo)) < this.vo.amount)) {
      __s61local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(__s61local0, this.vo.isSubscriptionBuffed, 15, new __s0local1(-5, 0), this.vo.useSubscriptionStar, this.options.costTextfield.defaultColor);
    }
  };
  ACollectableItemVE.prototype.onAllDispClipsLoaded = function (__s66param0 = null) {
    this.dispCreator.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
    this.updateIconDimension();
    if (this.onIconDispLoaded) {
      this.onIconDispLoaded();
    }
    if (this.dispCreator.dispContainer.parent) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.dispCreator.dispContainer.parent);
    }
  };
  ACollectableItemVE.prototype.onInfoButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.showDialog(__dep_export_CastleRewardInfoDialog.CastleRewardInfoDialog, new __dep_export_CastleRewardInfoDialogProperties.CastleRewardInfoDialogProperties(this.vo));
  };
  Object.defineProperty(ACollectableItemVE.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "iconContainer", {
    get: function () {
      return this._iconContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "onIconDispLoaded", {
    get: function () {
      return this._onIconDispLoaded;
    },
    set: function (__s82param0) {
      this._onIconDispLoaded = __s82param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "triggerOnAllIconDispLoadedManually", {
    get: function () {
      return this._triggerOnAllIconDispLoadedManually;
    },
    set: function (__s86param0) {
      this._triggerOnAllIconDispLoadedManually = __s86param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "renderer", {
    get: function () {
      return this._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "options", {
    get: function () {
      if (this.renderer) {
        return this.renderer.options;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "scaleManually", {
    get: function () {
      return this._scaleManually;
    },
    set: function (__s96param0) {
      this._scaleManually = __s96param0;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemVE.prototype.storageBarScale = function () {
    return 0;
  };
  return ACollectableItemVE;
}(__dep_export_CastleComponent.CastleComponent);
exports.ACollectableItemVE = __s0local2;
var __dep_export_CastleRewardInfoDialog = require("gge-module:export_CastleRewardInfoDialog");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
