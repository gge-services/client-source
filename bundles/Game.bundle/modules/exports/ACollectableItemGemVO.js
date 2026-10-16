Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ACollectableItemGemVO(__s3param0, __s3param1 = 1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this)._id = __s3param0;
    __s3local0.updateGemVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemGemVO, __s1param0);
  ACollectableItemGemVO.prototype.updateGemVO = function () {
    this._gemVO = __dep_export_CastleModel.CastleModel.gemData.getGemVO(this.id);
  };
  ACollectableItemGemVO.prototype.getTooltipTextId = function () {
    return "gem_name";
  };
  ACollectableItemGemVO.prototype.getDescriptionTextId = function () {
    if (this.gemVO) {
      if (this.gemVO.isUnique) {
        return this.gemVO.extraText;
      } else {
        return this.gemVO.bonusDescriptionText;
      }
    } else {
      return "gem_short_info";
    }
  };
  ACollectableItemGemVO.prototype.getNameTextParams = function () {
    if (this.gemVO) {
      return [this.gemVO.level];
    } else {
      return __s1param0.prototype.getNameTextParams.call(this);
    }
  };
  ACollectableItemGemVO.prototype.getNameTextId = function () {
    if (this.gemVO) {
      return this.gemVO.nameString;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  ACollectableItemGemVO.prototype.equals = function (__s23param0) {
    return __s1param0.prototype.equals.call(this, __s23param0) && this.id == __s23param0.id;
  };
  ACollectableItemGemVO.prototype.clone = function () {
    var __s25local0 = __s1param0.prototype.clone.call(this);
    __s25local0.gemVO = this.gemVO;
    return __s25local0;
  };
  ACollectableItemGemVO.prototype.isCombineAbleWith = function (__s27param0) {
    return false;
  };
  Object.defineProperty(ACollectableItemGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s31param0) {
      this._id = __s31param0;
      this.updateGemVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemGemVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    set: function (__s35param0) {
      this._gemVO = __s35param0;
      this._id = this.gemVO ? this.gemVO.id : -1;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemGemVO.prototype.getSearchString = function () {
    var __s37local0 = "";
    __s37local0 += this.gemVO.nameString;
    __s37local0 += this.gemVO.typeDescriptionText;
    __s37local0 += this.gemVO.bonusDescriptionText;
    if (this.gemVO.setVO) {
      __s37local0 += this.gemVO.setVO.name;
    }
    return __s37local0;
  };
  return ACollectableItemGemVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.ACollectableItemGemVO = __s0local0;
