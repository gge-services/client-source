Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsMainDialogProperties(__s3param0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN), __s3param1 = null, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = this;
    __s3local0._sublayer = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._sublayer = __s3param0;
    __s3local0._itemSlot = __s3param1;
    __s3local0._buildingSelection = __s3param2;
    __s3local0._constructionItemRecipeVO = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsMainDialogProperties, __s1param0);
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "sublayer", {
    get: function () {
      return this._sublayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "buildingSelection", {
    get: function () {
      return this._buildingSelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "itemSlot", {
    get: function () {
      return this._itemSlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "constructionItemRecipeVO", {
    get: function () {
      return this._constructionItemRecipeVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsMainDialogProperties.prototype.clear = function () {
    this._buildingSelection = null;
    this._itemSlot = null;
    this._constructionItemRecipeVO = null;
  };
  return CastleConstructionItemsMainDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleConstructionItemsMainDialogProperties = __s0local0;
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
