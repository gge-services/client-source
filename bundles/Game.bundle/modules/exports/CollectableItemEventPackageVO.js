Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemEventPackageVO(__s3param0 = -1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEventPackageVO, __s1param0);
  CollectableItemEventPackageVO.prototype.updatePackageVO = function () {
    this._eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.id);
  };
  CollectableItemEventPackageVO.prototype.clone = function () {
    var __s7local0 = __s1param0.prototype.clone.call(this);
    __s7local0.eventPackageVO = this.eventPackageVO;
    return __s7local0;
  };
  CollectableItemEventPackageVO.prototype.getTooltipTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameTextID;
    } else {
      return __s1param0.prototype.getTooltipTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getDescriptionTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.descriptionTextID;
    } else {
      return __s1param0.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getDescriptionTextParams = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.descriptionParams;
    } else {
      return __s1param0.prototype.getDescriptionTextParams.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getNameTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameTextID;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getNameTextParams = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameParams;
    } else {
      return __s1param0.prototype.getNameTextParams.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.isCombineAbleWith = function (__s29param0) {
    return false;
  };
  Object.defineProperty(CollectableItemEventPackageVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s33param0) {
      this._id = __s33param0;
      this.updatePackageVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEventPackageVO.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    set: function (__s37param0) {
      this._eventPackageVO = __s37param0;
      this._id = __dep_exact_f855840627e6e145.int(this.eventPackageVO ? this.eventPackageVO.packageID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEventPackageVO.__initialize_static_members = function () {
    CollectableItemEventPackageVO.SERVER_KEY = "";
  };
  return CollectableItemEventPackageVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemEventPackageVO = __s0local0;
__s0local0.__initialize_static_members();
