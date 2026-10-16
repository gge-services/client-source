Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AModernHighscoreComponentItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._rank = 0;
    __s3local0._parentComponent = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernHighscoreComponentItem, __s1param0);
  AModernHighscoreComponentItem.prototype.init = function () {};
  AModernHighscoreComponentItem.prototype.updateWithNewData = function (__s7param0, __s7param1) {
    this._rank = __s7param0;
    this._data = __s7param1;
    this.update();
  };
  AModernHighscoreComponentItem.prototype.update = function () {
    this.fillContentWithAny();
    if (this.data) {
      this.setVisibility(true);
      this.fillContentWithData();
    } else if (this.rank > 0 && this.rank <= this.maxRank) {
      this.setVisibility(true);
      this.fillContentWithEmpty();
    } else {
      this.setVisibility(false);
    }
  };
  AModernHighscoreComponentItem.prototype.fillContentWithAny = function () {};
  AModernHighscoreComponentItem.prototype.fillContentWithData = function () {};
  AModernHighscoreComponentItem.prototype.fillContentWithEmpty = function () {};
  AModernHighscoreComponentItem.prototype.setItemIndicatorSearchedName = function () {};
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "maxRank", {
    get: function () {
      return this.parentComponent.maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "parentComponent", {
    get: function () {
      return this._parentComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernHighscoreComponentItem.prototype, "name", {
    get: function () {
      if (this.data && this.data[2] && this.data[2].N) {
        return this.data[2].N;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return AModernHighscoreComponentItem;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.AModernHighscoreComponentItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
