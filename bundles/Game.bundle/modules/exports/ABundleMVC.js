Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ABundleMVC(__s3param0 = null, __s3param1 = null, __s3param2 = null) {
    this._destroyed = false;
    this._views = [];
    this._controllers = [];
    if (__s3param0 && (this._model = new __s3param0(), !this._model)) {
      throw new Error("The class used for the model doesn't implement IModel interface");
    }
    if (__s3param1 && (this._views[0] = new __s3param1(), !this._views[0])) {
      throw new Error("The class used for the view doesn't implement IView interface");
    }
    if (__s3param2 && (this._controllers[0] = new __s3param2(), !this._controllers[0])) {
      throw new Error("The class used for the controller doesn't implement IController interface");
    }
    if (this._model) {
      if (this._views.length) {
        this._views[0].setModel(this._model);
      }
      if (this._controllers.length) {
        this._controllers[0].setModel(this._model);
      }
    }
    if (this._views.length && this._controllers.length) {
      this._views[0].setController(this._controllers[0]);
      this._controllers[0].setView(this._views[0]);
    }
  }
  ABundleMVC.prototype.getModel = function () {
    return this._model;
  };
  Object.defineProperty(ABundleMVC.prototype, "views", {
    get: function () {
      return this._views;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABundleMVC.prototype, "controllers", {
    get: function () {
      return this._controllers;
    },
    enumerable: true,
    configurable: true
  });
  ABundleMVC.prototype.setModel = function (__s18param0) {
    if (__s18param0) {
      this._model = __s18param0;
      var __s18local0 = 0;
      for (__s18local0 = 0; __s18local0 < this._controllers.length; __s18local0++) {
        this._controllers[__s18local0].setModel(__s18param0);
      }
      for (__s18local0 = 0; __s18local0 < this._views.length; __s18local0++) {
        this._views[__s18local0].setModel(__s18param0);
      }
    }
  };
  ABundleMVC.prototype.setView = function (__s25param0, __s25param1 = 0, __s25param2 = true) {
    if ((__s25param1 = __dep_export_CastleMathHelper.CastleMathHelper.limit(__s25param1, 0, this._views.length)) < this._views.length && this._views[__s25param1]) {
      this._views[__s25param1].destroy();
    }
    this._views[__s25param1] = __s25param0;
    if (this._model) {
      __s25param0.setModel(this._model);
    }
    if (__s25param2 && this._controllers[0]) {
      __s25param0.setController(this._controllers[0]);
      this._controllers[0].setView(__s25param0);
    }
    return __s25param1;
  };
  ABundleMVC.prototype.setController = function (__s30param0, __s30param1 = 0, __s30param2 = true) {
    __s30param1 = __dep_export_CastleMathHelper.CastleMathHelper.limit(__s30param1, 0, this._controllers.length);
    if (this._controllers.length && this._controllers[__s30param1]) {
      this._controllers[__s30param1].destroy();
    }
    this._controllers[__s30param1] = __s30param0;
    if (this._model) {
      __s30param0.setModel(this._model);
    }
    if (__s30param2 && this._views[0]) {
      __s30param0.setView(this._views[0]);
    }
    return __s30param1;
  };
  ABundleMVC.prototype.addView = function (__s35param0) {
    if (__s35param0) {
      this._views.push(__s35param0);
      if (this._model) {
        __s35param0.setModel(this._model);
      }
    }
  };
  ABundleMVC.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  ABundleMVC.prototype._destroy = function () {
    this._model.destroy();
    var __s42local0 = 0;
    for (__s42local0 = 0; __s42local0 < this._controllers.length; __s42local0++) {
      this._controllers[__s42local0].destroy();
    }
    this._controllers = null;
    __s42local0 = 0;
    for (; __s42local0 < this._views.length; __s42local0++) {
      this._views[__s42local0].destroy();
    }
    this._views = null;
  };
  return ABundleMVC;
}();
exports.ABundleMVC = __s0local0;
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
