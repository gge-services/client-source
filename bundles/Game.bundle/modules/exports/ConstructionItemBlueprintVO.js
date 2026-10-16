Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ConstructionItemBlueprintVO(__s3param0) {
    this._id = 0;
    this._name = "";
    this._id = __s3param0;
    this._recipes = [];
  }
  ConstructionItemBlueprintVO.prototype.checkConstructionItem = function () {
    if (!this._constructionItem) {
      for (var __s5local0 = 0; __s5local0 < this._recipes.length; __s5local0++) {
        var __s5local1 = this._recipes[__s5local0];
        if (__s5local1.constructionItem) {
          this._constructionItem = __s5local1.constructionItem;
          return;
        }
      }
      __dep_exact_9e901e8e2483a22f_1.debug("No construction item found for recipe " + this._id);
    }
  };
  ConstructionItemBlueprintVO.prototype.addRecipe = function (__s11param0) {
    this._recipes.push(__s11param0);
    this._recipes.sort(function (__s13param0, __s13param1) {
      return __s13param0.id - __s13param1.id;
    });
    var __s11local0 = 1;
    if (this._recipes != null) {
      for (var __s11local1 = 0, __s11local2 = this._recipes; __s11local1 < __s11local2.length; __s11local1++) {
        var __s11local3 = __s11local2[__s11local1];
        if (__s11local3 !== undefined) {
          __s11local3.level = __s11local0++;
        }
      }
    }
  };
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "recipes", {
    get: function () {
      return this._recipes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "assetName", {
    get: function () {
      this.checkConstructionItem();
      var __s23local0 = "Primary";
      if (this._constructionItem) {
        if (this._constructionItem.slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE) {
          __s23local0 = "Secondary";
        } else if (this._constructionItem.slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE) {
          __s23local0 = "Appearance";
        }
      }
      return "Blueprint_" + __s23local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "nameId", {
    get: function () {
      this.checkConstructionItem();
      var __s28local0 = "";
      if (this._constructionItem && this._constructionItem.name) {
        __s28local0 = this._constructionItem.name;
        if (this._constructionItem.isSecondaryItem) {
          __s28local0 += "_secondary";
        }
        if (this._constructionItem.isPremium) {
          __s28local0 += "_premium";
        }
      }
      return "ci_blueprint_" + __s28local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "assetURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ConstructionItemBlueprints");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "constructionItem", {
    get: function () {
      this.checkConstructionItem();
      return this._constructionItem;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemBlueprintVO;
}();
exports.ConstructionItemBlueprintVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
