Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemBuildingVO(__s3param0 = -1, __s3param1 = 1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this)._id = __s3param0;
    __s3local0.updateBuildingVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemBuildingVO, __s1param0);
  CollectableItemBuildingVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    if (Array.isArray(__s5param0)) {
      this.id = __dep_exact_f855840627e6e145.int(__s5param0[0]);
      this.amount = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    } else {
      this.id = __dep_exact_f855840627e6e145.int(__s5param0);
    }
  };
  CollectableItemBuildingVO.prototype.parseXmlObject = function (__s9param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s9param0);
  };
  CollectableItemBuildingVO.prototype.updateBuildingVO = function () {
    this._buildingVO = this.id == -1 ? null : __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this.id);
  };
  CollectableItemBuildingVO.prototype.clone = function () {
    var __s13local0 = __s1param0.prototype.clone.call(this);
    __s13local0.buildingVO = this.buildingVO;
    return __s13local0;
  };
  CollectableItemBuildingVO.prototype.getDescriptionTextId = function () {
    if (this.buildingVO) {
      return this.buildingVO.getShortInfoString();
    } else {
      return __s1param0.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemBuildingVO.prototype.getNameTextId = function () {
    if (this.buildingVO) {
      return this.buildingVO.getNameString();
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemBuildingVO.prototype.isCombineAbleWith = function (__s23param0) {
    return __s1param0.prototype.isCombineAbleWith.call(this, __s23param0) && __s23param0._buildingVO.wodId == this._buildingVO.wodId;
  };
  CollectableItemBuildingVO.prototype.equals = function (__s25param0) {
    if (__s1param0.prototype.equals.call(this, __s25param0)) {
      var __s25local0 = __s25param0;
      if (this._id == __s25local0.id) {
        if (this._buildingVO && __s25local0.buildingVO) {
          if (!isNaN(this._buildingVO.objectId) && this._buildingVO.objectId > 0 && !isNaN(__s25local0.buildingVO.objectId) && __s25local0.buildingVO.objectId > 0) {
            return this._buildingVO.objectId == __s25local0.buildingVO.objectId;
          }
          var __s25local1 = this._buildingVO;
          var __s25local2 = __s25local0.buildingVO;
          if (__s25local1 && __s25local2) {
            if (__s25local1.isUnique() || __s25local2.isUnique()) {
              return __s25local1.uniqueBuildingId == __s25local2.uniqueBuildingId;
            } else {
              return !__s25local1.isUnique() || !__s25local2.isUnique();
            }
          }
        } else if (!this._buildingVO && !__s25local0.buildingVO) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CollectableItemBuildingVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    set: function (__s37param0) {
      this._buildingVO = __s37param0;
      this._id = __dep_exact_f855840627e6e145.int(this._buildingVO ? this._buildingVO.wodId : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemBuildingVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s41param0) {
      this._id = __s41param0;
      this.updateBuildingVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBuildingVO.SERVER_KEY = "D";
  CollectableItemBuildingVO.XML_KEY = ["decoWodID", "buildingWodID"];
  return CollectableItemBuildingVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemBuildingVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
