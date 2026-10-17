// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 89
// Export: ContextMenu; preserved source: modules/webpack/classes/ContextMenu.js
// Original canonical SHA-256: 15a35b7f947f060486c7ce2aef8f3938136951251919a41416d6cc5730e62bd6
var __s0local1 = function (__s1param0) {
  function ContextMenu() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._customItems = [];
    __s3local0._items = [];
    __s3local0._numItems = 0;
    __s3local0._builtInItems = new __s0local2();
    __s3local0._clipboardItems = new __s0local3();
    __s3local0._link = new __dep_class_URLRequest.URLRequest("");
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(ContextMenu, __s1param0);
  ContextMenu.prototype.addItemAt = function (__s5param0, __s5param1) {
    return __s5param0;
  };
  ContextMenu.prototype.clone = function () {
    return new __s0local5();
  };
  ContextMenu.prototype.containsItem = function (__s9param0) {
    return false;
  };
  ContextMenu.prototype.display = function (__s11param0, __s11param1, __s11param2) {};
  ContextMenu.prototype.getItemAt = function (__s13param0) {
    return new __s0local4();
  };
  ContextMenu.prototype.getItemIndex = function (__s15param0) {
    return 0;
  };
  ContextMenu.prototype.hideBuiltInItems = function () {};
  ContextMenu.prototype.removeAllItems = function () {};
  ContextMenu.prototype.removeItemAt = function (__s21param0) {
    return new __s0local4();
  };
  Object.defineProperty(ContextMenu.prototype, "numItems", {
    get: function () {
      return this._numItems;
    },
    set: function (__s25param0) {
      this._numItems = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "link", {
    get: function () {
      return this._link;
    },
    set: function (__s29param0) {
      this._link = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "items", {
    get: function () {
      return this._items;
    },
    set: function (__s33param0) {
      this._items = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "isSupported", {
    get: function () {
      return this._isSupported;
    },
    set: function (__s37param0) {
      this._isSupported = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "customItems", {
    get: function () {
      return this._customItems;
    },
    set: function (__s41param0) {
      this._customItems = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "clipboardMenu", {
    get: function () {
      return this._clipboardMenu;
    },
    set: function (__s45param0) {
      this._clipboardMenu = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "clipboardItems", {
    get: function () {
      return this._clipboardItems;
    },
    set: function (__s49param0) {
      this._clipboardItems = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "builtInItems", {
    get: function () {
      return this._builtInItems;
    },
    set: function (__s53param0) {
      this._builtInItems = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenu;
}(createjs.EventDispatcher);
exports.ContextMenu = __s0local1;
