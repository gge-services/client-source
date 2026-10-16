Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleStatusBar = require("gge-module:export_CastleStatusBar");
var __dep_export_CastleStatusBarEvent = require("gge-module:export_CastleStatusBarEvent");
var __dep_export_StatusBarExpansionDirectionEnum = require("gge-module:export_StatusBarExpansionDirectionEnum");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleOfferHubStatusBar(__s3param0) {
    var __s3local0 = __s1param0.call(this, __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_UP) || this;
    __s3local0._hubDisp = new __s0local0();
    __s3local0._hubDisp.y = -__dep_export_CastleStatusPanel.CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
    __s3local0._hubSubPanel = new Library.CastleInterfaceElements.OfferHubSubPanel();
    __s3local0._hubSubPanel.y = CastleOfferHubStatusBar.BORDER_OFFSET;
    __s3local0._hubSubPanel.x = -CastleOfferHubStatusBar.ICON_WIDTH / 2;
    __s3local0._hubDisp.addChild(__s3local0._hubSubPanel);
    __s3local0._disp.addChild(__s3local0._hubDisp);
    __s3local0._hubDisp.visible = false;
    __s3local0._hubDisp.scaleX = __s3local0._hubDisp.scaleY = CastleOfferHubStatusBar.FADE_SCALE;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._hubSubPanel.header.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param0));
    __s3local0._disp.addEventListener(__s0local1.ROLL_OVER, __s3local0.bindFunction(__s3local0.onMouseOver));
    __s3local0._disp.addEventListener(__s0local1.ROLL_OUT, __s3local0.bindFunction(__s3local0.onMouseOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SettingsEvent.SettingsEvent.EVENT_BOOKMARK_CHANGED, __s3local0.bindFunction(__s3local0.onEventBookmarkChanged));
    __s3local0._disp.addEventListener(__s0local1.CLICK, __s3local0.bindFunction(__s3local0.toggleHub));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOfferHubStatusBar, __s1param0);
  CastleOfferHubStatusBar.prototype.dispose = function () {
    this._disp.removeEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.onMouseOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SettingsEvent.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    this._disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.toggleHub));
    __s1param0.prototype.dispose.call(this);
  };
  CastleOfferHubStatusBar.prototype.addIcon = function (__s7param0) {
    this._icons.push(__s7param0);
    var __s7local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "StatusIconOfferHub") ? this._disp : this._hubDisp;
    __s7param0.addToContainer(__s7local0);
    __s7param0.changedVisibilityCallback = this.bindFunction(this.onIconChangeVisibility);
    this._icons.sort(this.bindFunction(this.compareIcons));
  };
  CastleOfferHubStatusBar.prototype.removeIcon = function (__s9param0) {
    var __s9local0 = this._icons.indexOf(__s9param0);
    if (!(__s9local0 < 0)) {
      __s9param0.changedVisibilityCallback = null;
      this._icons.splice(__s9local0, 1);
      var __s9local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "StatusIconOfferHub") ? this._disp : this._hubDisp;
      __s9param0.removeFromContainer(__s9local1);
      this._icons.sort(this.bindFunction(this.compareIcons));
    }
  };
  CastleOfferHubStatusBar.prototype.repositioningIcons = function () {
    var __s12local0;
    var __s12local1 = 0;
    var __s12local2 = null;
    var __s12local3 = false;
    this._icons.sort(this.bindFunction(this.compareIcons));
    this._anchorItem = null;
    if (this._icons != null) {
      for (var __s12local4 = 0, __s12local5 = this._icons; __s12local4 < __s12local5.length; __s12local4++) {
        var __s12local6 = __s12local5[__s12local4];
        if (__s12local6 !== undefined) {
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s12local6, "StatusIconOfferHub")) {
            __s12local6.setPosition(0, 0);
            __s12local0 = __s12local6;
          } else if (__s12local6.visible) {
            __s12local2 ||= __s12local6;
            __s12local6.setPosition(__s12local1 % CastleOfferHubStatusBar.ICONS_PER_ROW * CastleOfferHubStatusBar.ICON_WIDTH, -Math.floor(__s12local1 / CastleOfferHubStatusBar.ICONS_PER_ROW) * CastleOfferHubStatusBar.ICON_HEIGHT_0 - CastleOfferHubStatusBar.ICON_HEIGHT_0 / 2);
            __s12local3 = __s12local3 || __s12local6.isNew;
            __s12local1++;
          }
        }
      }
    }
    if (__s12local0) {
      __s12local0.mirrorFirstHubIcon(__s12local2);
      __s12local0.iconCount = __s12local1;
      __s12local0.isAnyNewOffer = __s12local3;
      if (__s12local1 > 0) {
        this._anchorItem = __s12local0;
      }
    }
    var __s12local7 = Math.ceil(__s12local1 / CastleOfferHubStatusBar.ICONS_PER_ROW) * CastleOfferHubStatusBar.ICON_HEIGHT_0;
    this._hubSubPanel.header.y = -__s12local7 - CastleOfferHubStatusBar.BORDER_OFFSET;
    this._hubSubPanel.bg.height = __s12local7;
    this._hubSubPanel.bg.y = -__s12local7 - CastleOfferHubStatusBar.BORDER_OFFSET;
    this.dispatchEvent(new __dep_export_CastleStatusBarEvent.CastleStatusBarEvent(__dep_export_CastleStatusBarEvent.CastleStatusBarEvent.ICONS_REPOSITIONED));
  };
  CastleOfferHubStatusBar.prototype.onMouseOver = function (__s22param0) {
    this._hubDisp.visible = true;
    __dep_exact_608de47b6498f9b0.TweenLite.killTweensOf(this._hubDisp);
    __dep_exact_608de47b6498f9b0.TweenLite.to(this._hubDisp, CastleOfferHubStatusBar.FADE_DURATION, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1
    });
  };
  CastleOfferHubStatusBar.prototype.onMouseOut = function (__s24param0) {
    __dep_exact_608de47b6498f9b0.TweenLite.killTweensOf(this._hubDisp);
    __dep_exact_608de47b6498f9b0.TweenLite.to(this._hubDisp, CastleOfferHubStatusBar.FADE_DURATION, {
      alpha: 0,
      scaleX: CastleOfferHubStatusBar.FADE_SCALE,
      scaleY: CastleOfferHubStatusBar.FADE_SCALE,
      onComplete: this.bindFunction(this.hideHub)
    });
  };
  CastleOfferHubStatusBar.prototype.onEventBookmarkChanged = function (__s26param0) {
    this.repositioningIcons();
  };
  CastleOfferHubStatusBar.prototype.toggleHub = function (__s28param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s28param0)) {
      if (this._hubDisp.visible) {
        this.onMouseOut(__s28param0);
      } else {
        this.onMouseOver(__s28param0);
      }
    }
  };
  CastleOfferHubStatusBar.prototype.hideHub = function () {
    this._hubDisp.visible = false;
    if (this.statusIconOfferHub) {
      if (this._icons != null) {
        for (var __s33local0 = 0, __s33local1 = this._icons; __s33local0 < __s33local1.length; __s33local0++) {
          var __s33local2 = __s33local1[__s33local0];
          if (__s33local2 !== undefined && __s33local2.visible && __dep_exact_81dacdf05bd32292.instanceOfClass(__s33local2, "AOfferHubItemStatusIcon")) {
            __s33local2.setAsSeen();
          }
        }
      }
      this.statusIconOfferHub.isAnyNewOffer = false;
      this.statusIconOfferHub.updateCounter();
    }
  };
  Object.defineProperty(CastleOfferHubStatusBar.prototype, "statusIconOfferHub", {
    get: function () {
      return this._anchorItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleOfferHubStatusBar.ICON_WIDTH = 80;
  CastleOfferHubStatusBar.ICON_HEIGHT_0 = 96;
  CastleOfferHubStatusBar.ICONS_PER_ROW = 5;
  CastleOfferHubStatusBar.BORDER_OFFSET = 2;
  CastleOfferHubStatusBar.FADE_SCALE = 0.95;
  CastleOfferHubStatusBar.FADE_DURATION = 0.2;
  return CastleOfferHubStatusBar;
}(__dep_export_CastleStatusBar.CastleStatusBar);
exports.CastleOfferHubStatusBar = __s0local2;
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
