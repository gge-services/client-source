Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleSprite = require("gge-module:export_CastleSprite");
var __dep_export_AlignmentHelper = require("gge-module:export_AlignmentHelper");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function AResourcePanelToolTip(__s3param0) {
    var __s3local0 = this;
    __s3local0._type = 0;
    __s3local0._itemContainer = new __s0local0();
    __s3local0._items = [];
    __s3local0._horizontalPadding = 10;
    __s3local0._verticalPadding = 10;
    __s3local0._showAnimationDuration = 0.2;
    __s3local0._tweenDistanceY = 20;
    __s3local0._validArea = new __s0local1();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._type = __s3param0;
    __s3local0.createBackground();
    if (__s3local0._bg) {
      __s3local0._bg.width = __s3local0._bg.height = 0;
      __s3local0.addChild(__s3local0._bg);
    }
    if (__s3local0._bgPointer) {
      __s3local0.addChild(__s3local0._bgPointer);
    }
    __s3local0.addChild(__s3local0._itemContainer);
    __s3local0.createItems();
    __s3local0.addItems();
    __s3local0.mouseEnabled = __s3local0.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourcePanelToolTip, __s1param0);
  AResourcePanelToolTip.prototype.createItems = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AResourcePanelToolTip.prototype.setCapacity = function () {};
  AResourcePanelToolTip.prototype.updateContent = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AResourcePanelToolTip.prototype.createBackground = function () {
    this._bg = new Library.CastleInterfaceElements.ResourcePanel_standard_bg();
    this._bgPointer = new Library.CastleInterfaceElements.ResourcePanel_background_pointer();
    this._bgPointer.scaleX = this._bgPointer.scaleY = 2;
  };
  AResourcePanelToolTip.prototype.alignItems = function () {
    __dep_export_AlignmentHelper.AlignmentHelper.alignSingleLine(this._items, __dep_export_AlignmentHelper.AlignmentHelper.ALIGN_VERTICAL_FROM_TOP, 2);
  };
  AResourcePanelToolTip.prototype.hide = function () {
    if (this.parent != null) {
      this.parent.removeChild(this);
    }
  };
  AResourcePanelToolTip.prototype.show = function (__s20param0) {
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.toolTipContainer.addChild(this);
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this, this._showAnimationDuration, {
      y: __s20param0.y - this._tweenDistanceY,
      alpha: 0
    }, {
      y: __s20param0.y,
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  AResourcePanelToolTip.prototype.update = function () {
    this._itemContainer.x = this._horizontalPadding;
    this._itemContainer.y = this._verticalPadding;
    this.setCapacity();
    this.updateContent();
    this.addItems();
    this.scaleItems();
    this.alignItems();
    this.updateBackground();
    this.repositionItems();
  };
  AResourcePanelToolTip.prototype.addItems = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._itemContainer);
    for (var __s24local0 = 0; __s24local0 < this._items.length; __s24local0++) {
      this._itemContainer.addChild(this._items[__s24local0]);
    }
  };
  AResourcePanelToolTip.prototype.updateBackground = function () {
    if (this._bg) {
      this._bg.width = this._itemContainer.width + this._horizontalPadding * 2;
      this._bg.height = this._itemContainer.height + this._verticalPadding * 2;
      this._bgPointer.x = this._bg.width / 2;
      this._bgPointer.y = 0;
    }
  };
  AResourcePanelToolTip.prototype.scaleItems = function () {
    var __s31local0;
    var __s31local1 = this;
    var __s31local2 = 0;
    var __s31local3 = [];
    var __s31local4 = 0;
    for (__s31local4 = 0; __s31local4 < this._items.length; __s31local4++) {
      if ((__s31local0 = __dep_exact_81dacdf05bd32292_1.castAs(this._items[__s31local4], "ResourcePanelToolTipComponent")) != null) {
        for (var __s31local5 = 0; __s31local5 < __s31local0.textFields.length; __s31local5++) {
          if (__s31local0.textFields[__s31local5] != null && __s31local0.textFields[__s31local5].textContentVO != null) {
            __s31local0.textFields[__s31local5].autoSize = __dep_exact_81dacdf05bd32292.TextFormatAlign.LEFT;
            if (__dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
              __s31local0.textFields[__s31local5].autoSize = __dep_exact_81dacdf05bd32292.TextFormatAlign.RIGHT;
            }
          }
          __s31local0.updateTextFieldPositions();
        }
        __s31local2 = Math.min(Math.max(__s31local2, __s31local0.width), 150);
      } else {
        __s31local3.push(this._items[__s31local4]);
      }
    }
    for (__s31local4 = 0; __s31local4 < __s31local3.length; __s31local4++) {
      __s31local3[__s31local4].width = __s31local2;
    }
    this._validArea.x = this._items[0].x;
    this._validArea.width = __s31local2;
    this._items.forEach(function (__s43param0) {
      var __s43local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s43param0, "ResourcePanelToolTipComponent");
      if (__s43local0) {
        __s43local0.updateTextFieldDimensions(__s31local1._validArea);
      }
    });
  };
  AResourcePanelToolTip.prototype.repositionItems = function () {
    for (var __s46local0 = 0; __s46local0 < this._items.length; __s46local0++) {
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this._items[__s46local0], "ResourcePanelToolTipComponent")) {
        this._items[__s46local0].updateTextFieldPositions(this._validArea);
      }
    }
  };
  Object.defineProperty(AResourcePanelToolTip.prototype, "bgPointer", {
    get: function () {
      return this._bgPointer;
    },
    enumerable: true,
    configurable: true
  });
  return AResourcePanelToolTip;
}(__dep_export_CastleSprite.CastleSprite);
exports.AResourcePanelToolTip = __s0local2;
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local2, "Container");
