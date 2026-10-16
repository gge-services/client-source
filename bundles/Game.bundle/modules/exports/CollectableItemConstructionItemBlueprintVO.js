Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemConstructionItemBlueprintVO(__s3param0 = -1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemConstructionItemBlueprintVO, __s1param0);
  CollectableItemConstructionItemBlueprintVO.prototype.updateBlueprintVO = function () {
    this._blueprintVO = __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.blueprints.get(this._id);
  };
  CollectableItemConstructionItemBlueprintVO.prototype.getNameTextId = function () {
    if (this.blueprintVO) {
      return this.blueprintVO.nameId;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemConstructionItemBlueprintVO.prototype.clone = function () {
    var __s11local0 = __s1param0.prototype.clone.call(this);
    __s11local0.blueprintVO = this.blueprintVO;
    return __s11local0;
  };
  CollectableItemConstructionItemBlueprintVO.prototype.isCombineAbleWith = function (__s13param0) {
    return false;
  };
  Object.defineProperty(CollectableItemConstructionItemBlueprintVO.prototype, "blueprintVO", {
    get: function () {
      return this._blueprintVO;
    },
    set: function (__s17param0) {
      this._blueprintVO = __s17param0;
      this._id = __dep_exact_f855840627e6e145.int(this.blueprintVO ? this.blueprintVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemConstructionItemBlueprintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s21param0) {
      this._id = __s21param0;
      this.updateBlueprintVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemConstructionItemBlueprintVO.__initialize_static_members = function () {
    CollectableItemConstructionItemBlueprintVO.SERVER_KEY = "CIBP";
  };
  return CollectableItemConstructionItemBlueprintVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemConstructionItemBlueprintVO = __s0local0;
__s0local0.__initialize_static_members();
