Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ACastleTournamentRankListItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._rank = -1;
    __s3local0._points = -1;
    __s3local0._searchFieldValue = "";
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleTournamentRankListItem, __s1param0);
  ACastleTournamentRankListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.update();
  };
  ACastleTournamentRankListItem.prototype.update = function () {
    this.updateBgColor();
    this.updateText();
  };
  ACastleTournamentRankListItem.prototype.updateBgColor = function () {};
  ACastleTournamentRankListItem.prototype.updateText = function () {};
  ACastleTournamentRankListItem.prototype.parseItemData = function (__s13param0) {
    this._rank = __dep_exact_f855840627e6e145.int(__s13param0[0]);
    this._points = __dep_exact_f855840627e6e145.int(__s13param0[1]);
  };
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ACastleTournamentRankListItem.prototype.setVisibility = function (__s17param0) {
    __s1param0.prototype.setVisibility.call(this, __s17param0);
    this.removeEventListener();
    if (this.isVisible) {
      this.addEventListener();
    }
    this.disp.visible = this.isVisible;
  };
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    set: function (__s22param0) {
      this._rank = __s22param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (__s26param0) {
      this._points = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleTournamentRankListItem.prototype, "searchFieldValue", {
    get: function () {
      return this._searchFieldValue;
    },
    set: function (__s30param0) {
      this._searchFieldValue = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleTournamentRankListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ACastleTournamentRankListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
