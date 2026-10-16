Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function PanelButtonsComponent(__s3param0, __s3param1, __s3param2 = PanelButtonsComponent.BUILD_DIRECTION_LEFT) {
    var __s3local0 = this;
    __s3local0._buttons = [];
    __s3local0._isBuildingButtons = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._buttonClass = __s3param1;
    __s3local0._buildDirection = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PanelButtonsComponent, __s1param0);
  PanelButtonsComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.clearButtons();
  };
  PanelButtonsComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this._buttons != null) {
      for (var __s7local0 = 0, __s7local1 = this._buttons; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
        }
      }
    }
  };
  PanelButtonsComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this._buttons != null) {
      for (var __s13local0 = 0, __s13local1 = this._buttons; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
        }
      }
    }
  };
  PanelButtonsComponent.prototype.clearButtons = function () {
    if (this._buttons != null) {
      for (var __s19local0 = 0, __s19local1 = this._buttons; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.destroy();
        }
      }
    }
    this._buttons = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_buttons);
  };
  PanelButtonsComponent.prototype.switchCreationMode = function (__s25param0) {
    this._isBuildingButtons = __s25param0;
    if (this._isBuildingButtons) {
      this.clearButtons();
    }
    if (!this._isBuildingButtons) {
      this.alignLayout();
    }
  };
  PanelButtonsComponent.prototype.addMainButton = function (__s29param0) {
    __s29param0.init(this.buttonClass, false);
    __s29param0.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
    __s29param0.onShow();
    this._buttons.push(__s29param0);
    this.disp.mc_buttons.addChild(__s29param0.disp);
    return __s29param0;
  };
  PanelButtonsComponent.prototype.alignLayout = function () {
    var __s31local0 = 0;
    if (this._buttons != null) {
      for (var __s31local1 = 0, __s31local2 = this._buttons; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined && __s31local3.isVisible) {
          var __s31local4 = __s31local3.buttonMc.getBounds(null);
          __s31local3.disp.x = this.buildDirection == PanelButtonsComponent.BUILD_DIRECTION_LEFT ? -__s31local0 + __s31local4.x : __s31local0 + -__s31local4.x;
          __s31local3.disp.y = __s31local4.y;
          __s31local0 += __s31local4.width + PanelButtonsComponent.BUTTONS_PADDING_X;
        }
      }
    }
    this.disp.mc_background.scaleX = __s31local0;
    this.disp.mc_background.children[0].scaleX = 1;
    this.disp.mc_backgroundDeco.x = this.buildDirection == PanelButtonsComponent.BUILD_DIRECTION_LEFT ? -__s31local0 : __s31local0;
  };
  PanelButtonsComponent.prototype.updateButtons = function () {
    this._isBuildingButtons = true;
    if (this._buttons != null) {
      for (var __s37local0 = 0, __s37local1 = this._buttons; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          __s37local2.update();
        }
      }
    }
    this.alignLayout();
    this._isBuildingButtons = false;
  };
  PanelButtonsComponent.prototype.amountOfVisibleButtons = function () {
    var __s43local0 = 0;
    if (this._buttons != null) {
      for (var __s43local1 = 0, __s43local2 = this._buttons; __s43local1 < __s43local2.length; __s43local1++) {
        var __s43local3 = __s43local2[__s43local1];
        if (__s43local3 !== undefined && __s43local3.isVisible) {
          __s43local0++;
        }
      }
    }
    return __s43local0;
  };
  PanelButtonsComponent.prototype.getAnyButtonByClass = function (__s49param0) {
    var __s49local0 = __dep_export_ClientConstUtils.ClientConstUtils.getNameFromClass(__s49param0);
    if (this._buttons != null) {
      for (var __s49local1 = 0, __s49local2 = this._buttons; __s49local1 < __s49local2.length; __s49local1++) {
        var __s49local3 = __s49local2[__s49local1];
        if (__s49local3 !== undefined) {
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s49local3, __s49local0)) {
            return __s49local3;
          }
          if (__s49local3.subButtons && __s49local3.subButtons.length > 0) {
            for (var __s49local4 = 0, __s49local5 = __s49local3.subButtons; __s49local4 < __s49local5.length; __s49local4++) {
              var __s49local6 = __s49local5[__s49local4];
              if (__s49local6 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s49local6, __s49local0)) {
                return __s49local6;
              }
            }
          }
        }
      }
    }
    return null;
  };
  PanelButtonsComponent.prototype.onButtonVisibilityChanged = function () {
    if (!this._isBuildingButtons) {
      this.alignLayout();
    }
  };
  Object.defineProperty(PanelButtonsComponent.prototype, "buildDirection", {
    get: function () {
      return this._buildDirection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "isBuildingButtons", {
    get: function () {
      return this._isBuildingButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "buttonClass", {
    get: function () {
      return this._buttonClass;
    },
    enumerable: true,
    configurable: true
  });
  PanelButtonsComponent.BUILD_DIRECTION_LEFT = "left";
  PanelButtonsComponent.BUILD_DIRECTION_RIGHT = "right";
  PanelButtonsComponent.BUTTONS_PADDING_X = 3;
  return PanelButtonsComponent;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.PanelButtonsComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
