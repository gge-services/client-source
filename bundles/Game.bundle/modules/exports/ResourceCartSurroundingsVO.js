Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResourceCartSurroundingsVO() {
    var __s3local0 = this;
    __s3local0._resourceType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._name = "ResourceCart";
    __s3local0._height = 4;
    __s3local0._width = 4;
    __s3local0._minLevel = __dep_exact_26a421b704832cff.ResourceCartConst.MIN_LEVEL;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceCartSurroundingsVO, __s1param0);
  ResourceCartSurroundingsVO.prototype.updatePosition = function () {
    var __s5local0 = new __s0local0();
    switch (this.resourceType) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s5local0 = new __s0local0(-18, -18);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        var __s5local1 = this.isoData.objects.surroundings.getStoneField();
        if (__s5local1) {
          (__s5local0 = __s5local1.getLastPartStartOffset()).x += -6;
        }
        break;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        var __s5local2 = this.isoData.objects.surroundings.getFoodField();
        if (__s5local2) {
          (__s5local0 = __s5local2.getLastPartStartOffset()).y += -6;
        }
    }
    this._posOffset = __s5local0;
    __s1param0.prototype.updatePosition.call(this);
  };
  ResourceCartSurroundingsVO.prototype.isUserInLevelRange = function () {
    return __dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff_1.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  ResourceCartSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    if (this.resourceCartData.isCollectable || this.resourceCartData.secondsUntilCollect > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("eventBuilding_resourceCart_resources");
    } else {
      return "";
    }
  };
  ResourceCartSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.resourceCartData.isCollectable) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("ReadyForPickup");
    } else if (this.resourceCartData.secondsUntilCollect > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("CountdownReadyIn", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.resourceCartData.secondsUntilCollect)]);
    } else {
      return "";
    }
  };
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return this.resourceCartData.isCollectable;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "resourceCartData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.resourceCartsData.getResourceCartData(this._resourceType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    set: function (__s33param0) {
      this._resourceType = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceCartSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.ResourceCartSurroundingsVO = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
