Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_461cbd60a0a86f1b = require("gge-module:exact_461cbd60a0a86f1b");
var __s0local0 = function () {
  function InlineDurationFormat() {}
  InlineDurationFormat.prototype.parse = function (__s5param0) {
    if (__s5param0 && __s5param0.length !== 0) {
      var __s5local0 = __s5param0.match(InlineDurationFormat.REGEXP_FORMAT);
      if (__s5local0 == null) {
        throw new Error("format:" + __s5param0);
      }
      this._fill = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_FILL] || __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_ZERO] || "";
      this._align = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_ALIGN];
      this._sign = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_SIGN];
      this._precision = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_PRECISION];
      this._width = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_WIDTH];
      this._type = __s5local0[InlineDurationFormat.REGEXP_FORMAT_GROUP_TYPE] || (this._precision ? InlineDurationFormat.TYPE_FLOAT[0] : InlineDurationFormat.TYPE_DECIMAL[0]);
    } else {
      this._fill = undefined;
      this._align = undefined;
      this._sign = undefined;
      this._precision = undefined;
      this._width = undefined;
      this._type = InlineDurationFormat.TYPE_DECIMAL[0];
    }
    return this;
  };
  InlineDurationFormat.prototype.apply = function (__s10param0, __s10param1, __s10param2) {
    var __s10local0 = __s10param1[__s10param2];
    var __s10local1 = String(__s10local0);
    var __s10local2 = __dep_exact_461cbd60a0a86f1b.TimeType.values;
    if (InlineDurationFormat.TYPE_FLOAT.indexOf(this._type) !== -1) {
      if (this._precision && __s10param2 !== 0) {
        var __s10local3 = __s10local2[__s10param2].milliseconds / __s10local2[__s10param2 - 1].milliseconds;
        __s10local1 = (__s10local0 + __s10param1[__s10param2 - 1] / __s10local3).toFixed(parseFloat(this._precision));
      }
      var __s10local4 = __s10local1.match(InlineDurationFormat.REGEXP_NUMBER);
      var __s10local5 = __s10local4[InlineDurationFormat.REGEXP_NUMBER_GROUP_INTEGER];
      var __s10local6 = __s10local4[InlineDurationFormat.REGEXP_NUMBER_GROUP_FRACTION];
      __s10local1 = __s10local5 + (__s10local6.length ? __s10param0("generic_comma") + __s10local6 : "");
    }
    if (this._width) {
      for (var __s10local7 = Number(this._width) - __s10local1.length; __s10local7-- > 0;) {
        __s10local1 = this._fill + __s10local1;
      }
    }
    return __s10local1;
  };
  Object.defineProperty(InlineDurationFormat.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (__s19param0) {
      this._width = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "fill", {
    get: function () {
      return this._fill;
    },
    set: function (__s23param0) {
      this._fill = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "precision", {
    get: function () {
      return this._precision;
    },
    set: function (__s27param0) {
      this._precision = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  InlineDurationFormat.REGEXP_FORMAT = /(?:(.)?(<|>|=|^){1})?(\+|-)?(0)?(\d+)?(?:\.(\d+))?(b|c|d|e|E|f|F|g|G|n|o|x|X|%)?/;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_FILL = 1;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_ALIGN = 2;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_SIGN = 3;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_ZERO = 4;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_WIDTH = 5;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_PRECISION = 6;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_TYPE = 7;
  InlineDurationFormat.REGEXP_NUMBER = /(\d+)(?:\.(\d+))?/;
  InlineDurationFormat.REGEXP_NUMBER_GROUP_INTEGER = 1;
  InlineDurationFormat.REGEXP_NUMBER_GROUP_FRACTION = 2;
  InlineDurationFormat.TYPE_DECIMAL = ["d"];
  InlineDurationFormat.TYPE_FLOAT = ["f", "F"];
  return InlineDurationFormat;
}();
exports.InlineDurationFormat = __s0local0;
