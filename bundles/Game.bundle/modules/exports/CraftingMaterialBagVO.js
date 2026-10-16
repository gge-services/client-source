Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CraftingMaterialBagContentVO = require("gge-module:export_CraftingMaterialBagContentVO");
var __s0local0 = function () {
  function CraftingMaterialBagVO(__s3param0 = null) {
    this._bagID = 0;
    this._rareness = 0;
    this._size = 0;
    this._focusedMaterialID = 0;
    if (__s3param0) {
      this.fillFromParamXML(__s3param0);
    }
  }
  CraftingMaterialBagVO.prototype.fillFromParamXML = function (__s6param0) {
    this._bagID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("bagID", __s6param0, "0"));
    this._rareness = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rareness", __s6param0, "0"));
    this._size = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("size", __s6param0, "0"));
    this._focusedMaterialID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("focusedMaterialID", __s6param0, "0"));
    this._content = [];
    for (var __s6local0 = 0, __s6local1 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrenciesByIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)); __s6local0 < __s6local1.length; __s6local0++) {
      var __s6local2 = __s6local1[__s6local0];
      var __s6local3 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(__dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_ADD + __s6local2.name, __s6param0, "0"));
      var __s6local4 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("variable" + __s6local2.name, __s6param0, "0")) + __s6local3;
      if (__s6local3 || __s6local4) {
        this._content.push(new __dep_export_CraftingMaterialBagContentVO.CraftingMaterialBagContentVO(__s6local3, __s6local4, __s6local2));
        if (__s6local2.id == this._focusedMaterialID) {
          this._focusedMaterialContent = this._content[this._content.length - 1];
        }
      }
    }
    this._content.sort(this.bindFunction(this.sortContentByRareness));
    this.validate();
    this._color = [];
    this._color.push(CraftingMaterialBagVO.RARENESS_COLORS[this.rareness - 1]);
  };
  CraftingMaterialBagVO.prototype.validate = function () {
    if (this.focused && !this.focusedMaterialContent) {
      console.warn("bagID " + this.bagID + " has focusedMaterialID " + this._focusedMaterialID + " but does not contain materials of this type");
      this._focusedMaterialContent = new __dep_export_CraftingMaterialBagContentVO.CraftingMaterialBagContentVO(0, 0, __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(this._focusedMaterialID));
    }
    if (this.rareness > CraftingMaterialBagVO.RARENESS_COLORS.length) {
      console.warn("bagID " + this.bagID + " has invalid rareness " + this.rareness + ". Using max rareness " + CraftingMaterialBagVO.RARENESS_COLORS.length + " instead.");
      this._rareness = __dep_exact_f855840627e6e145.int(CraftingMaterialBagVO.RARENESS_COLORS.length);
    }
    if (this.focusedMaterialContent && this.focusedMaterialContent.craftingMaterial.rareness != this.rareness) {
      console.warn("bagID " + this.bagID + " has rareness " + this.rareness + " that doesn't match rareness " + this.focusedMaterialContent.craftingMaterial.rareness + " of its focused material. Using the material rareness instead.");
      this._rareness = __dep_exact_f855840627e6e145.int(this.focusedMaterialContent.craftingMaterial.rareness);
    }
  };
  CraftingMaterialBagVO.prototype.sortContentByRareness = function (__s17param0, __s17param1) {
    return __dep_exact_f855840627e6e145.int(__s17param1.craftingMaterial.rareness - __s17param0.craftingMaterial.rareness);
  };
  Object.defineProperty(CraftingMaterialBagVO.prototype, "bagID", {
    get: function () {
      return this._bagID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "size", {
    get: function () {
      return this._size;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "focused", {
    get: function () {
      return this._focusedMaterialID > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "focusedMaterialContent", {
    get: function () {
      return this._focusedMaterialContent;
    },
    enumerable: true,
    configurable: true
  });
  CraftingMaterialBagVO.prototype.getContent = function (__s29param0 = true) {
    if (__s29param0) {
      return this._content.filter(this.bindFunction(this.getFillt));
    } else {
      return this._content;
    }
  };
  CraftingMaterialBagVO.prototype.getFillt = function (__s33param0) {
    var __s33local0 = [];
    for (var __s33local1 = 1; __s33local1 < arguments.length; __s33local1++) {
      __s33local0[__s33local1 - 1] = arguments[__s33local1];
    }
    return this._focusedMaterialContent != __s33param0;
  };
  Object.defineProperty(CraftingMaterialBagVO.prototype, "assetName", {
    get: function () {
      return "MaterialBag_" + this.size + (this.focused ? "_Focused" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "nameTextID", {
    get: function () {
      if (this.focused) {
        return "ciMaterialSack_" + CraftingMaterialBagVO.SIZE_NAMES[this.size - 1] + "_Focused";
      } else {
        return "ciMaterialSack_" + CraftingMaterialBagVO.SIZE_NAMES[this.size - 1] + "_" + CraftingMaterialBagVO.RARENESS_NAMES[this.rareness - 1];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "minMaterials", {
    get: function () {
      var __s45local0 = 0;
      if (this._content != null) {
        for (var __s45local1 = 0, __s45local2 = this._content; __s45local1 < __s45local2.length; __s45local1++) {
          var __s45local3 = __s45local2[__s45local1];
          if (__s45local3 !== undefined) {
            __s45local0 += __s45local3.minValue;
          }
        }
      }
      return __s45local0;
    },
    enumerable: true,
    configurable: true
  });
  CraftingMaterialBagVO.__initialize_static_members = function () {
    CraftingMaterialBagVO.RARENESS_COLORS = [8816262, 6983196, 9058259, 15687936];
    CraftingMaterialBagVO.SIZE_NAMES = ["small", "medium", "large", "huge"];
    CraftingMaterialBagVO.RARENESS_NAMES = ["common", "rare", "epic", "legendary"];
  };
  return CraftingMaterialBagVO;
}();
exports.CraftingMaterialBagVO = __s0local0;
__s0local0.__initialize_static_members();
