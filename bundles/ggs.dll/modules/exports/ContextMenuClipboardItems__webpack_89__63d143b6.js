// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 89
// Export: ContextMenuClipboardItems; preserved source: modules/webpack/classes/ContextMenu.js
// Original canonical SHA-256: 15a35b7f947f060486c7ce2aef8f3938136951251919a41416d6cc5730e62bd6
var __s0local3 = function (__s91param0) {
  function ContextMenuClipboardItems() {
    return __s91param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(ContextMenuClipboardItems, __s91param0);
  Object.defineProperty(ContextMenuClipboardItems.prototype, "selectAll", {
    get: function () {
      return this._selectAll;
    },
    set: function (__s97param0) {
      this._selectAll = __s97param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "paste", {
    get: function () {
      return this._paste;
    },
    set: function (__s101param0) {
      this._paste = __s101param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "cut", {
    get: function () {
      return this._cut;
    },
    set: function (__s105param0) {
      this._cut = __s105param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    set: function (__s109param0) {
      this._copy = __s109param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "clear", {
    get: function () {
      return this._clear;
    },
    set: function (__s113param0) {
      this._clear = __s113param0;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenuClipboardItems;
}(Object);
exports.ContextMenuClipboardItems = __s0local3;
