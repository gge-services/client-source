Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DailyLoginBonusStateButton(__s3param0, __s3param1, __s3param2 = true) {
    this._defaultState = 0;
    this._currentState = 0;
    this._selected = false;
    this._enableButton = true;
    this._clickable = true;
    this._button = __s3param0;
    if (__s3param2) {
      this._basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this._button, true);
    }
    this._defaultState = __s3param1;
    this.changeToDefaultState();
    this._button[DailyLoginBonusStateButton.WRAPPER_PROPERTY] = this;
  }
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "button", {
    get: function () {
      return this._button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "defaultState", {
    get: function () {
      return this._defaultState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (__s12param0) {
      this._selected = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    set: function (__s16param0) {
      this._collectableItem = __s16param0;
      this.updateData();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "enableButton", {
    get: function () {
      return this._enableButton;
    },
    set: function (__s20param0) {
      this._enableButton = __s20param0;
      if (this._basicButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, this._enableButton);
        this._basicButton.enableButton = this._enableButton;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "clickable", {
    get: function () {
      return this._clickable;
    },
    set: function (__s25param0) {
      this._clickable = __s25param0;
      this.button.enabled = this._clickable;
    },
    enumerable: true,
    configurable: true
  });
  DailyLoginBonusStateButton.prototype.changeToDefaultState = function () {
    this.changeTo(this.defaultState);
    if (this._collectableRenderComponent) {
      this._collectableRenderComponent.destroy();
      this._collectableRenderComponent = null;
    }
  };
  DailyLoginBonusStateButton.prototype.changeTo = function (__s30param0) {
    if (this._currentState != __s30param0) {
      this._currentState = __s30param0;
      this.button.gotoAndStop(this._currentState);
    }
  };
  DailyLoginBonusStateButton.prototype.updateData = function () {
    if (this._collectableRenderComponent) {
      this._collectableRenderComponent.destroy();
    }
    this._collectableRenderComponent = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this._button), this._collectableItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(), null, this.bindFunction(this.afterRenderFunc));
  };
  DailyLoginBonusStateButton.prototype.afterRenderFunc = function (__s36param0) {
    if (this._button && this._button.cacheCanvas) {
      this._button.updateCache();
    }
  };
  DailyLoginBonusStateButton.__initialize_static_members = function () {
    DailyLoginBonusStateButton.WRAPPER_PROPERTY = "wrapper";
  };
  return DailyLoginBonusStateButton;
}();
exports.DailyLoginBonusStateButton = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local0.__initialize_static_members();
