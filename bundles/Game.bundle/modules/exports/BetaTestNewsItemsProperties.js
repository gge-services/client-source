Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __s0local0 = function () {
  function BetaTestNewsItemsProperties(__s3param0) {
    this._id = 0;
    this._id = __s3param0;
  }
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "margin", {
    get: function () {
      return BetaTestNewsItemsProperties._margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "isVertical", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "expandDuration", {
    get: function () {
      return BetaTestNewsItemsProperties.EXPAND_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "collapseDuration", {
    get: function () {
      return BetaTestNewsItemsProperties.EXPAND_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  BetaTestNewsItemsProperties.__initialize_static_members = function () {
    BetaTestNewsItemsProperties._margin = new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0);
    BetaTestNewsItemsProperties.EXPAND_DURATION = 0.5;
  };
  return BetaTestNewsItemsProperties;
}();
exports.BetaTestNewsItemsProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollapsibleItemProperties");
__s0local0.__initialize_static_members();
