Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ConstructionItemBlueprintData(__s3param0) {
    this._newBlueprints = [];
    this.parseFromXml(__s3param0);
  }
  ConstructionItemBlueprintData.prototype.parseFromXml = function (__s5param0) {
    this._recipes = new Map();
    this._blueprints = new Map();
    this._newBlueprints = [];
    for (var __s5local0 = 0, __s5local1 = __s5param0.constructionItemRecipes; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 != null) {
        try {
          var __s5local3 = new __dep_export_ConstructionItemRecipeVO.ConstructionItemRecipeVO(__s5local2);
          this._recipes.set(__s5local3.id, __s5local3);
          this.addOrUpdateBlueprint(__s5local3);
          0;
        } catch (__s11local0) {
          __dep_exact_9e901e8e2483a22f.debug(__s11local0.stack);
        }
      }
    }
  };
  ConstructionItemBlueprintData.prototype.addOrUpdateBlueprint = function (__s13param0) {
    if (!this._blueprints.has(__s13param0.blueprintId)) {
      this._blueprints.set(__s13param0.blueprintId, new __dep_export_ConstructionItemBlueprintVO.ConstructionItemBlueprintVO(__s13param0.blueprintId));
    }
    this._blueprints.get(__s13param0.blueprintId).addRecipe(__s13param0);
  };
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "blueprints", {
    get: function () {
      return this._blueprints;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemBlueprintData.prototype.findRecipeFor = function (__s18param0, __s18param1 = false) {
    if (this._blueprints != null) {
      for (var __s18local0 = 0, __s18local1 = Array.from(this._blueprints.values()); __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2 !== undefined && __s18local2.recipes[0].constructionItem.name == __s18param0.name) {
          for (var __s18local3 = 0, __s18local4 = __s18local2.recipes; __s18local3 < __s18local4.length; __s18local3++) {
            var __s18local5 = __s18local4[__s18local3];
            if (__s18local5 !== undefined && __s18local5.constructionItemId == __s18param0.id && (!__s18param1 || __s18local5.constructionItemNeeded)) {
              return __s18local5;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "recipes", {
    get: function () {
      return this._recipes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "newBlueprints", {
    get: function () {
      return this._newBlueprints;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemBlueprintData.prototype.addNewBlueprints = function (__s31param0) {
    this._newBlueprints = this._newBlueprints.concat(__s31param0);
  };
  return ConstructionItemBlueprintData;
}();
exports.ConstructionItemBlueprintData = __s0local0;
var __dep_export_ConstructionItemRecipeVO = require("gge-module:export_ConstructionItemRecipeVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ConstructionItemBlueprintVO = require("gge-module:export_ConstructionItemBlueprintVO");
