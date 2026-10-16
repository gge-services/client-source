Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ConstructionItemRecipeVO(__s3param0) {
    this._id = 0;
    this._blueprintId = 0;
    this._constructionItemId = 0;
    this._neededConstructionItemId = 0;
    this._unlockedByDefault = false;
    this._durationInSeconds = 0;
    this._level = 0;
    this.parseFromXml(__s3param0);
  }
  ConstructionItemRecipeVO.prototype.parseFromXml = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.RECIPE_ID, __s5param0, "0"));
    this._blueprintId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.BLUEPRINT_ID, __s5param0, "0"));
    this._constructionItemId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.CONSTRUCTION_ITEM_ID, __s5param0, "0"));
    this._neededConstructionItemId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.NEEDED_CONSTRUCTION_ITEM, __s5param0, "-1"));
    this._unlockedByDefault = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.UNLOCKED_BY_DEFAULT, __s5param0, "0")) == 1;
    this._durationInSeconds = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.CRAFTING_DURATION, __s5param0, "0"));
    this._materialsNeeded = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
  };
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "blueprintId", {
    get: function () {
      return this._blueprintId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItemId", {
    get: function () {
      return this._constructionItemId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "materialsNeeded", {
    get: function () {
      return this._materialsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "unlockedByDefault", {
    get: function () {
      return this._unlockedByDefault;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (__s21param0) {
      this._level = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItemNeeded", {
    get: function () {
      if (!this._constructionItemNeeded && this._neededConstructionItemId > -1 && (this._constructionItemNeeded = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(this._neededConstructionItemId), !this._constructionItemNeeded)) {
        throw new Error("Recipe " + this._id + " has invalid neededConstructionItem " + this._neededConstructionItemId);
      }
      return this._constructionItemNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItem", {
    get: function () {
      this._constructionItem = this._constructionItem || __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(this._constructionItemId);
      return this._constructionItem;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemRecipeVO.__initialize_static_members = function () {
    ConstructionItemRecipeVO.RECIPE_ID = "constructionItemRecipeID";
    ConstructionItemRecipeVO.BLUEPRINT_ID = "blueprintID";
    ConstructionItemRecipeVO.CONSTRUCTION_ITEM_ID = "constructionItemID";
    ConstructionItemRecipeVO.UNLOCKED_BY_DEFAULT = "defaultUnlocked";
    ConstructionItemRecipeVO.CRAFTING_DURATION = "craftingDuration";
    ConstructionItemRecipeVO.NEEDED_CONSTRUCTION_ITEM = "neededConstructionItemID";
  };
  return ConstructionItemRecipeVO;
}();
exports.ConstructionItemRecipeVO = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__s0local0.__initialize_static_members();
