Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function MaterialBagOpenedDialog() {
    var __s3local0 = this;
    __s3local0.iconAnimationStarted = false;
    __s3local0.iconAnimationFinished = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, MaterialBagOpenedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MaterialBagOpenedDialog, __s1param0);
  MaterialBagOpenedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_arrows).addMouseWheelElements([this.dialogDisp]), new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical());
    this.textFieldManager.registerTextField(this.dialogDisp.btn_crafting.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_header")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  MaterialBagOpenedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.mc_iconAnimation.y = MaterialBagOpenedDialog.ICON_ANIMATION_START_Y;
    var __s7local0 = Math.ceil(this.dialogProperties.rewards.length / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var __s7local1 = __dep_exact_f855840627e6e145.int(Math.max(__s7local0 - MaterialBagOpenedDialog.ROWS_VISIBLE_AT_ONCE, 0));
    this.scrollComponent.init(0, __s7local1);
    this.scrollComponent.scrollToValue(__s7local1);
    this.scrollComponent.setVisibility(false);
    this.iconAnimationStarted = false;
    this.iconAnimationFinished = false;
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.btn_crafting.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_crafting]);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_iconAnimation);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bagAnimation);
    this.bagClip = null;
    this.skipAnimation();
  };
  MaterialBagOpenedDialog.prototype.onEnterFrame = function (__s9param0) {
    if (this.bagClip.currentFrame >= MaterialBagOpenedDialog.ICONANIMATION_START_FRAME && !this.iconAnimationStarted) {
      this.bagClip.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      this.startIconAnimation();
    }
  };
  MaterialBagOpenedDialog.prototype.startIconAnimation = function () {
    this.iconAnimationStarted = true;
    for (var __s12local0 = 0; __s12local0 < this.dialogProperties.rewards.length; __s12local0++) {
      var __s12local1 = Math.max(__s12local0 - MaterialBagOpenedDialog.ICONS_PER_ROW * 2, -1) % MaterialBagOpenedDialog.ICONS_PER_ROW == 0;
      this.tweenInMaterialIcon(__s12local0, this.getIconPosition(__s12local0), MaterialBagOpenedDialog.getIconDelay(__s12local0), __s12local1);
    }
  };
  MaterialBagOpenedDialog.prototype.skipAnimation = function () {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.stopAllMovies(this.dialogDisp, null, true);
    if (this.bagClip) {
      this.bagClip.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
    if (!this.iconAnimationStarted) {
      this.startIconAnimation();
    }
    for (var __s16local0 = 0, __s16local1 = this.dialogDisp.mc_iconAnimation.children.concat([this.dialogDisp.mc_iconAnimation]); __s16local0 < __s16local1.length; __s16local0++) {
      var __s16local2 = __s16local1[__s16local0];
      if (__s16local2 !== "undefined") {
        for (var __s16local3 = __dep_exact_608de47b6498f9b0_2.TweenMax.getTweensOf(__s16local2), __s16local4 = 0; __s16local4 < __s16local3.length; __s16local4++) {
          var __s16local5 = __s16local3[__s16local4];
          if (__s16local5) {
            __s16local5.repeat(0).progress(1).kill();
          }
        }
      }
    }
    this.iconAnimationFinished = true;
    this.scrollValueChange();
  };
  MaterialBagOpenedDialog.getIconDelay = function (__s26param0) {
    var __s26local0 = __dep_exact_f855840627e6e145.int(__s26param0 / MaterialBagOpenedDialog.ICONS_PER_ROW);
    return Math.max(__s26local0 - 1, 0) * MaterialBagOpenedDialog.SCROLL_UP_DELAY + __s26param0 * MaterialBagOpenedDialog.DEFAULT_DELAY;
  };
  MaterialBagOpenedDialog.prototype.getIconPosition = function (__s28param0) {
    var __s28local0 = __dep_exact_f855840627e6e145.int(__s28param0 / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var __s28local1 = __dep_exact_f855840627e6e145.int(Math.min(this.dialogProperties.rewards.length - __s28local0 * MaterialBagOpenedDialog.ICONS_PER_ROW, MaterialBagOpenedDialog.ICONS_PER_ROW));
    var __s28local2 = (MaterialBagOpenedDialog.ICONS_PER_ROW - __s28local1) * MaterialBagOpenedDialog.OFFSET_X_PER_ICON;
    var __s28local3 = __dep_exact_f855840627e6e145.int(this.dialogProperties.rewards.length <= 3 ? MaterialBagOpenedDialog.OFFSET_Y_PER_ROW / 2 : 0);
    return new __s0local1(MaterialBagOpenedDialog.ICON_POSITIONS[__s28param0 % MaterialBagOpenedDialog.ICONS_PER_ROW] + __s28local2, __s28local0 * MaterialBagOpenedDialog.OFFSET_Y_PER_ROW + __s28local3);
  };
  MaterialBagOpenedDialog.prototype.tweenInMaterialIcon = function (__s30param0, __s30param1, __s30param2, __s30param3) {
    var __s30local0 = this.dialogProperties.rewards.getItemByIndex(__s30param0);
    var __s30local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CraftingMaterialAnimation_" + __dep_export_ClientConstUtils.ClientConstUtils.lowercaseFirstLetter(__s30local0.xmlCurrencyVO.name)))();
    __s30local1.mouseChildren = false;
    this.dialogDisp.mc_iconAnimation.addChild(__s30local1);
    this.textFieldManager.registerTextField(__s30local1.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s30local0.amount), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    var __s30local2 = __dep_exact_f855840627e6e145.int(__s30param0 / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var __s30local3 = __dep_exact_f855840627e6e145.int(MaterialBagOpenedDialog.OFFSET_Y_PER_ROW * Math.max(__s30local2 - 1, 0));
    if (__s30param3) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.dialogDisp.mc_iconAnimation, MaterialBagOpenedDialog.SCROLL_UP_DELAY, {
        y: MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - __s30local3,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut,
        delay: __s30param2 - MaterialBagOpenedDialog.SCROLL_UP_DELAY,
        onUpdate: this.bindFunction(this.updateIconVisibility),
        onUpdateParams: [__s30param0]
      });
    }
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s30local1, 0.2, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut,
      delay: __s30param2
    });
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s30local1, MaterialBagOpenedDialog.DURATION_FLY_IN, {
      x: 0,
      y: __s30local3
    }, {
      x: __s30param1.x,
      y: __s30param1.y,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeOut,
      delay: __s30param2
    });
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s30local1, MaterialBagOpenedDialog.DURATION_FLY_IN, {
      scaleX: 6.27,
      scaleY: 6.27
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeIn,
      delay: __s30param2
    });
    __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s30local1, MaterialBagOpenedDialog.DURATION_BOUNCE, {
      scaleX: 1.5,
      scaleY: 1.5,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut,
      delay: __s30param2 + MaterialBagOpenedDialog.DURATION_FLY_IN
    });
    __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s30local1, MaterialBagOpenedDialog.DURATION_BOUNCE, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeIn,
      delay: __s30param2 + MaterialBagOpenedDialog.DURATION_FLY_IN + MaterialBagOpenedDialog.DURATION_BOUNCE,
      onComplete: this.bindFunction(this.onIconFinished),
      onCompleteParams: [__s30param0, __s30local1, __s30local0.getNameTextId()]
    });
  };
  MaterialBagOpenedDialog.prototype.updateIconVisibility = function (__s33param0 = -1) {
    var __s33local0 = MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - this.dialogDisp.mc_iconAnimation.y;
    for (var __s33local1 = __dep_exact_f855840627e6e145.int(__s33param0 == -1 ? this.dialogDisp.mc_iconAnimation.numChildren : __s33param0), __s33local2 = 0; __s33local2 < __s33local1; __s33local2++) {
      var __s33local3 = this.dialogDisp.mc_iconAnimation.getChildAt(__s33local2);
      var __s33local4 = 1 - Math.min(Math.max(0 - (__s33local3.y - __s33local0), __s33local3.y - __s33local0 - MaterialBagOpenedDialog.OFFSET_Y_PER_ROW), MaterialBagOpenedDialog.ICON_FADE_DISTANCE) / MaterialBagOpenedDialog.ICON_FADE_DISTANCE;
      __s33local3.visible = __s33local4 > 0;
      __s33local3.alpha = __s33local4;
    }
  };
  MaterialBagOpenedDialog.prototype.onIconFinished = function (__s37param0, __s37param1, __s37param2) {
    __s37param1.toolTipText = __s37param2;
    if (__s37param0 == this.dialogProperties.rewards.length - 1) {
      this.scrollComponent.show();
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.scrollValueChange));
      this.dialogDisp.btn_ok.visible = true;
      this.dialogDisp.btn_crafting.visible = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorBuilding;
      __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(this.dialogDisp.mc_arrows, 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(this.dialogDisp.btn_ok, 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      if (this.dialogDisp.btn_crafting.visible) {
        __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(this.dialogDisp.btn_crafting, 0.6, {
          autoAlpha: 0
        }, {
          autoAlpha: 1
        });
      }
      this.iconAnimationFinished = true;
    }
  };
  MaterialBagOpenedDialog.prototype.scrollValueChange = function () {
    __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this.dialogDisp.mc_iconAnimation);
    __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.dialogDisp.mc_iconAnimation, MaterialBagOpenedDialog.SCROLL_UP_DELAY, {
      y: MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - this.scrollComponent.currentValue * MaterialBagOpenedDialog.OFFSET_Y_PER_ROW,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut,
      onUpdate: this.bindFunction(this.updateIconVisibility)
    });
  };
  MaterialBagOpenedDialog.prototype.hideLoaded = function (__s43param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s43param0);
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.scrollValueChange));
    if (this.bagClip) {
      this.bagClip.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
  };
  MaterialBagOpenedDialog.prototype.onClick = function (__s46param0) {
    __s1param0.prototype.onClick.call(this, __s46param0);
    if (this.iconAnimationFinished) {
      if (!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s46param0.target)) {
        return;
      }
      switch (__s46param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_crafting:
          this.hide();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING));
      }
    } else {
      this.skipAnimation();
    }
  };
  Object.defineProperty(MaterialBagOpenedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagOpenedDialog.NAME = "MaterialBagOpened";
  MaterialBagOpenedDialog.ICON_POSITIONS = [-100, 0, 100];
  MaterialBagOpenedDialog.ICONS_PER_ROW = 3;
  MaterialBagOpenedDialog.OFFSET_X_PER_ICON = 50;
  MaterialBagOpenedDialog.OFFSET_Y_PER_ROW = 90;
  MaterialBagOpenedDialog.DEFAULT_DELAY = 0.5;
  MaterialBagOpenedDialog.SCROLL_UP_DELAY = 0.3;
  MaterialBagOpenedDialog.DURATION_FLY_IN = 0.3;
  MaterialBagOpenedDialog.DURATION_BOUNCE = 0.1;
  MaterialBagOpenedDialog.ICON_ANIMATION_START_Y = 60;
  MaterialBagOpenedDialog.ICON_FADE_DISTANCE = MaterialBagOpenedDialog.OFFSET_Y_PER_ROW;
  MaterialBagOpenedDialog.ROWS_VISIBLE_AT_ONCE = 2;
  MaterialBagOpenedDialog.ICONANIMATION_START_FRAME = 62;
  return MaterialBagOpenedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.MaterialBagOpenedDialog = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
