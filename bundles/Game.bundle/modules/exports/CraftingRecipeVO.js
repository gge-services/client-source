Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CraftingQueueVO = require("gge-module:export_CraftingQueueVO");
var __s0local0 = function () {
  function CraftingRecipeVO(__s3param0 = null) {
    this._learned = false;
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  CraftingRecipeVO.prototype.fillFromParamXml = function (__s6param0) {
    this._id = parseInt(__s6param0.craftingRecipeId || "0");
    this._queueID = parseInt(__s6param0.queueTypeId || "0");
    this._recipeGroupID = parseInt(__s6param0.recipeGroupID || "0");
    this._researchGroupID = parseInt(__s6param0.researchGroupID || "0");
    this._level = parseInt(__s6param0.level || "0");
    this._type = __s6param0.type.toLowerCase();
    this._craftingDuration = parseInt(__s6param0.craftingDuration || "0");
    this._skipCostC2 = parseInt(__s6param0.skipCostC2 || "0");
    this._input = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createCostList(__s6param0);
    var __s6local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.rewardIDs || "", ",");
    this._output = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s6local0);
    var __s6local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.requiredCraftingBuildings || "", ",");
    this._requiredCraftingBuildings = __s6local1.map(function (__s8param0) {
      return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s8param0);
    });
  };
  Object.defineProperty(CraftingRecipeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "recipeGroupID", {
    get: function () {
      return this._recipeGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "researchGroupID", {
    get: function () {
      return this._researchGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "craftingDuration", {
    get: function () {
      return this._craftingDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "skipCostC2", {
    get: function () {
      return this._skipCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "input", {
    get: function () {
      return this._input;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "output", {
    get: function () {
      return this._output;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "learned", {
    get: function () {
      return this._learned;
    },
    set: function (__s32param0) {
      this._learned = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeVO.prototype.getNameString = function (__s34param0 = true) {
    var __s34local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.output.list[0].getNameTextId(), this.output.list[0].getNameTextParams());
    var __s34local1 = "crafting_recipe_" + this._type + "_placeholder_01";
    if (__s34param0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text(__s34local1, [__s34local0]), this.level]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s34local1, [__s34local0]);
    }
  };
  CraftingRecipeVO.prototype.getManualName = function () {
    var __s38local0 = "crafting_recipe_" + this._type + "_placeholder_01";
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s38local0, [this.level]);
  };
  CraftingRecipeVO.prototype.getSortOrderByType = function () {
    switch (this._type) {
      case CraftingRecipeVO.TYPE_SHORT:
        return 1;
      case CraftingRecipeVO.TYPE_LONG:
        return 2;
      case CraftingRecipeVO.TYPE_RUBY:
        return 3;
    }
  };
  CraftingRecipeVO.prototype.getRecipeIconFrame = function () {
    var __s43local0 = 0;
    switch (this.queueID) {
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_TOOLSMITH:
        __s43local0 = 3;
        break;
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD:
        __s43local0 = 6;
        break;
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH:
        __s43local0 = 8;
    }
    return this.getSortOrderByType() + __s43local0;
  };
  CraftingRecipeVO.prototype.getResearchRequired = function () {
    var __s46local0 = __dep_export_CastleModel.CastleModel.researchData.getGroupById(this._researchGroupID);
    if (__s46local0) {
      return __s46local0.activeResearch;
    } else {
      return null;
    }
  };
  Object.defineProperty(CraftingRecipeVO.prototype, "requiredCraftingBuildings", {
    get: function () {
      return this._requiredCraftingBuildings;
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeVO.TYPE_SHORT = "short";
  CraftingRecipeVO.TYPE_LONG = "long";
  CraftingRecipeVO.TYPE_RUBY = "ruby";
  return CraftingRecipeVO;
}();
exports.CraftingRecipeVO = __s0local0;
