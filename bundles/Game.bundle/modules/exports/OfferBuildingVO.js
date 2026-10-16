Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_IsoGeneratorEventBuildingPosition = require("gge-module:export_IsoGeneratorEventBuildingPosition");
var __dep_export_AEventBuildingVO = require("gge-module:export_AEventBuildingVO");
var __s0local0 = function (__s1param0) {
  function OfferBuildingVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._isoSortOrder = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._name = "Offer";
    __s3local0._group = __dep_export_ClientConstCastle.ClientConstCastle.GROUP_BUILDING;
    __s3local0._height = 8;
    __s3local0._width = 8;
    __s3local0._type = __s3param0;
    __s3local0._textId = __s3param1;
    __s3local0._offerVO = __s3param2;
    __s3local0._isoSortOrder = __dep_exact_f855840627e6e145.int(__dep_export_IsoGeneratorEventBuildingPosition.IsoGeneratorEventBuildingPosition.getOfferBuildingSortOrder(__s3param0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfferBuildingVO, __s1param0);
  Object.defineProperty(OfferBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return this._isoSortOrder;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEventBuildingVO.AEventBuildingVO.prototype, "isoSortOrder").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  OfferBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.offerBuildingNameId);
  };
  OfferBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("clickToOpen");
  };
  Object.defineProperty(OfferBuildingVO.prototype, "offerBuildingNameId", {
    get: function () {
      return this._textId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferBuildingVO.prototype, "offerVO", {
    get: function () {
      return this._offerVO;
    },
    enumerable: true,
    configurable: true
  });
  return OfferBuildingVO;
}(__dep_export_AEventBuildingVO.AEventBuildingVO);
exports.OfferBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
