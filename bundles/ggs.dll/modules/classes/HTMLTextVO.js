Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Localize = require("gge-module:class_Localize");
var __dep_class_AbstractTextContentVO = require("gge-module:class_AbstractTextContentVO");
var __dep_exact_15601d6150828cd6 = require("gge-module:exact_15601d6150828cd6");
var __s0local0 = function (__s1param0) {
  function HTMLTextVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.appendText = false;
    __s3local0.maxChilds = 1;
    __s3local0.onLocalizedTextVOChanged = function () {
      __s3local0.propertyChangedSignal.dispatch();
    };
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(HTMLTextVO, __s1param0);
  Object.defineProperty(HTMLTextVO.prototype, "localizedTextVOList", {
    get: function () {
      return this._localizedTextVOList;
    },
    enumerable: true,
    configurable: true
  });
  HTMLTextVO.prototype.addLocalizedTextVO = function (__s9param0, __s9param1 = false) {
    this._localizedTextVOList ||= [];
    this._localizedTextVOList.push(__s9param0);
    while (this._localizedTextVOList.length > this.maxChilds) {
      this._localizedTextVOList = this._localizedTextVOList.slice(1, this._localizedTextVOList.length);
    }
    if (__s9param1) {
      this.appendText = true;
      this.propertyChangedSignal.dispatch();
    }
  };
  HTMLTextVO.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    if (this._localizedTextVOList != null) {
      this._localizedTextVOList.forEach(function (__s17param0) {
        return __s17param0.propertyChangedSignal.removeAll();
      });
      this._localizedTextVOList = null;
    }
  };
  HTMLTextVO.prototype.compose = function () {
    return __dep_class_Localize.Localize.htmlText(this);
  };
  Object.defineProperty(HTMLTextVO.prototype, "localizedTextVO", {
    get: function () {
      this._localizedTextVOList[0].propertyChangedSignal.add(this.onLocalizedTextVOChanged);
      return this._localizedTextVOList[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HTMLTextVO.prototype, "htmlText", {
    get: function () {
      this._htmlText ||= __dep_exact_15601d6150828cd6.XML("<content></content>");
      return this._htmlText;
    },
    set: function (__s25param0) {
      this._htmlText = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  return HTMLTextVO;
}(__dep_class_AbstractTextContentVO.AbstractTextContentVO);
exports.HTMLTextVO = __s0local0;
