Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemConstructionItemVO(__s3param0 = -1, __s3param1 = 1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemConstructionItemVO, __s1param0);
  CollectableItemConstructionItemVO.prototype.equals = function (__s5param0) {
    var __s5local0 = __s5param0;
    return __s1param0.prototype.equals.call(this, __s5param0) && !!__s5local0 && __s5local0.constructionItemVO.groupId == this.constructionItemVO.groupId && __s5local0.constructionItemVO.rarity == this.constructionItemVO.rarity && __s5local0.constructionItemVO.name == this.constructionItemVO.name;
  };
  CollectableItemConstructionItemVO.prototype.parseServerObject = function (__s7param0) {
    __s1param0.prototype.parseServerObject.call(this, __s7param0);
    this.id = __dep_exact_f855840627e6e145.int(__s7param0);
  };
  CollectableItemConstructionItemVO.prototype.parseXmlObject = function (__s9param0) {
    if (__s9param0.indexOf("+") > -1) {
      var __s9local0 = __s9param0.split("+");
      this.id = __dep_exact_f855840627e6e145.int(__s9local0[0]);
      this.amount = __dep_exact_f855840627e6e145.int(__s9local0[1]);
    } else {
      this.id = __dep_exact_f855840627e6e145.int(__s9param0);
    }
  };
  CollectableItemConstructionItemVO.prototype.updateItemVO = function () {
    this._constructionItemVO = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(this.id);
  };
  CollectableItemConstructionItemVO.prototype.clone = function () {
    var __s15local0 = __s1param0.prototype.clone.call(this);
    __s15local0.constructionItemVO = this.constructionItemVO;
    return __s15local0;
  };
  CollectableItemConstructionItemVO.prototype.getTooltipTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.nameTextId;
    } else {
      return __s1param0.prototype.getTooltipTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.getDescriptionTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.descriptionTextId;
    } else {
      return __s1param0.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.getNameTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.nameTextId;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.isCombineAbleWith = function (__s29param0) {
    return __s1param0.prototype.isCombineAbleWith.call(this, __s29param0) && this.id == __s29param0.id;
  };
  Object.defineProperty(CollectableItemConstructionItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s33param0) {
      this._id = __s33param0;
      this.updateItemVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemConstructionItemVO.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    set: function (__s37param0) {
      this._constructionItemVO = __s37param0;
      this._id = __dep_exact_f855840627e6e145.int(this.constructionItemVO ? this.constructionItemVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemConstructionItemVO.SERVER_KEY = "CI";
  CollectableItemConstructionItemVO.XML_KEY = "constructionItemIDs";
  return CollectableItemConstructionItemVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemConstructionItemVO = __s0local0;
