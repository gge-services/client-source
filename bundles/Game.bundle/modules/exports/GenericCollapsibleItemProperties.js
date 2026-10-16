Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function GenericCollapsibleItemProperties(__s3param0, __s3param1 = true, __s3param2 = -1, __s3param3 = -1, __s3param4 = true) {
    this._isVertical = false;
    this._expandDuration = 0;
    this._collapseDuration = 0;
    this._isExpanded = false;
    this._margin = __s3param0;
    this._isVertical = __s3param1;
    this._isExpanded = __s3param4;
    this._expandDuration = __s3param2 > -1 ? __s3param2 : GenericCollapsibleItemProperties.DEFAULT_DURATION;
    this._collapseDuration = __s3param3 > -1 ? __s3param3 : GenericCollapsibleItemProperties.DEFAULT_DURATION;
  }
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "margin", {
    get: function () {
      return this._margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "isVertical", {
    get: function () {
      return this._isVertical;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "expandDuration", {
    get: function () {
      return this._expandDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "collapseDuration", {
    get: function () {
      return this._collapseDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "isExpanded", {
    get: function () {
      return this._isExpanded;
    },
    enumerable: true,
    configurable: true
  });
  GenericCollapsibleItemProperties.__initialize_static_members = function () {
    GenericCollapsibleItemProperties.DEFAULT_DURATION = 0.5;
  };
  return GenericCollapsibleItemProperties;
}();
exports.GenericCollapsibleItemProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollapsibleItemProperties");
__s0local0.__initialize_static_members();
