Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = createjs.EventDispatcher;
var __dep_class_URLRequest = require("gge-module:class_URLRequest");
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
var __s0local2 = function (__s55param0) {
  function ContextMenuBuiltInItems() {
    return __s55param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(ContextMenuBuiltInItems, __s55param0);
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "forwardAndBack", {
    get: function () {
      return this._forwardAndBack;
    },
    set: function (__s61param0) {
      this._forwardAndBack = __s61param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "loop", {
    get: function () {
      return this._loop;
    },
    set: function (__s65param0) {
      this._loop = __s65param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "play", {
    get: function () {
      return this._play;
    },
    set: function (__s69param0) {
      this._play = __s69param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "print", {
    get: function () {
      return this._print;
    },
    set: function (__s73param0) {
      this._print = __s73param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "zoom", {
    get: function () {
      return this._zoom;
    },
    set: function (__s77param0) {
      this._zoom = __s77param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "save", {
    get: function () {
      return this._save;
    },
    set: function (__s81param0) {
      this._save = __s81param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "rewind", {
    get: function () {
      return this._rewind;
    },
    set: function (__s85param0) {
      this._rewind = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "quality", {
    get: function () {
      return this._quality;
    },
    set: function (__s89param0) {
      this._quality = __s89param0;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenuBuiltInItems;
}(Object);
exports.ContextMenuBuiltInItems = __s0local2;
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
var __s0local4 = function (__s115param0) {
  function NativeMenuItem() {
    return __s115param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(NativeMenuItem, __s115param0);
  return NativeMenuItem;
}(__s0local0);
exports.NativeMenuItem = __s0local4;
var __s0local5 = function (__s119param0) {
  function NativeMenu() {
    return __s119param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(NativeMenu, __s119param0);
  return NativeMenu;
}(__s0local0);
exports.NativeMenu = __s0local5;
