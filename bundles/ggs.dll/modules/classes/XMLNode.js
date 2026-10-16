Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6a2cb6e7a005c7ab = require("gge-module:exact_6a2cb6e7a005c7ab");
var __dep_exact_5a69994851456f13 = require("gge-module:exact_5a69994851456f13");
var __dep_export_createNodeProxy = require("gge-module:export_createNodeProxy");
var __s0local0 = function () {
  function XMLNode(__s3param0, __s3param1 = null) {
    this._data = __s3param0;
    this._parent = __s3param1;
  }
  XMLNode.prototype.elements = function (__s5param0) {
    var __s5local0 = this;
    if (__s5param0 === undefined) {
      __s5param0 = "*";
    }
    if (__s5param0 !== "*") {
      return this.child(__s5param0);
    }
    for (var __s5local1 in this._data) {
      var __s5local2 = this._data[__s5local1];
      if (Array.isArray(__s5local2)) {
        return __s5local2.map(function (__s12param0) {
          return __dep_export_createNodeProxy.createNodeProxy(__s12param0, __s5local0);
        });
      }
    }
    throw new Error("elements() can only be used when children is an array.");
  };
  XMLNode.prototype.child = function (__s14param0) {
    return __dep_export_createNodeProxy.createNodeProxy(this._data[__s14param0], this);
  };
  XMLNode.prototype.children = function () {
    var __s16local0 = this;
    var __s16local1 = [];
    for (var __s16local2 in this._data) {
      if (this._data.hasOwnProperty(__s16local2)) {
        if (this._data[__s16local2] instanceof Array) {
          __s16local1 = __s16local1.concat(this._data[__s16local2]);
        } else if (__s16local2.indexOf("@") !== 0) {
          __s16local1.push(this._data[__s16local2]);
        }
      }
    }
    return __s16local1.map(function (__s23param0) {
      return __dep_export_createNodeProxy.createNodeProxy(__s23param0, __s16local0);
    });
  };
  XMLNode.prototype.appendChild = function (__s25param0) {
    var __s25local0 = __dep_exact_5a69994851456f13.fromXML(__s25param0);
    for (var __s25local1 in __s25local0) {
      if (__s25local1.match(/[A-Za-z\-]+/)) {
        this._data ||= {};
        if (this._data[__s25local1]) {
          if (this._data[__s25local1] instanceof Array) {
            this._data[__s25local1].push(__s25local0[__s25local1]);
          } else {
            var __s25local2 = Object.assign({}, this._data[__s25local1]);
            this._data[__s25local1] = [];
            this._data[__s25local1].push(__s25local2);
            this._data[__s25local1].push(__s25local0[__s25local1]);
          }
        } else {
          this._data[__s25local1] = __s25local0[__s25local1];
        }
      }
    }
  };
  XMLNode.prototype.attribute = function (__s34param0) {
    var __s34local0 = XMLNode.stringCache.get(__s34param0);
    if (!__s34local0) {
      XMLNode.stringCache.set(__s34param0, __s34local0 = "@" + __s34param0);
    }
    return this._data[__s34local0] || "";
  };
  XMLNode.prototype.text = function () {
    throw new Error("XMLNode.text not implemented.");
  };
  XMLNode.prototype.attributes = function () {
    var __s39local0 = [];
    for (var __s39local1 in this._data) {
      if (__s39local1.indexOf("@") === 0) {
        __s39local0.push(this._data[__s39local1]);
      }
    }
    return __s39local0;
  };
  XMLNode.prototype.length = function () {
    if (Array.isArray(this._data)) {
      return this._data.length;
    } else {
      return this.elements().length;
    }
  };
  Object.defineProperty(XMLNode.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  XMLNode.prototype.data = function () {
    return this._data;
  };
  XMLNode.prototype.clearAllNodes = function () {
    this._data = this._data instanceof Array ? [] : {};
  };
  XMLNode.prototype.toJSON = function () {
    return JSON.stringify(this._data);
  };
  XMLNode.prototype.toString = function () {
    return __dep_exact_6a2cb6e7a005c7ab.toXML(this._data);
  };
  XMLNode.stringCache = new Map();
  return XMLNode;
}();
exports.XMLNode = __s0local0;
