Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_IsoMovementWaypointClassesVO = require("gge-module:export_IsoMovementWaypointClassesVO");
var __dep_export_AInteractiveIsoObjectVO = require("gge-module:export_AInteractiveIsoObjectVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AIsoMovementVO() {
    var __s3local0 = this;
    __s3local0._currentActionIndex = 0;
    __s3local0._isMale = true;
    __s3local0._precisePos = new __s0local0();
    __s3local0._usesWorkIndex = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._group = "Movement";
    __s3local0._type = "";
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir;
    __s3local0._isMale = __s3local0.objectType != __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_CITIZEN || __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, 1) == 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoMovementVO, __s1param0);
  AIsoMovementVO.prototype.destroy = function () {
    if (__dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO == this) {
      __dep_export_CastleModel.CastleModel.resourcePoolData.registerNewMovementAsOwner(null);
    }
    __s1param0.prototype.destroy.call(this);
  };
  AIsoMovementVO.prototype.startWithNewActionList = function (__s8param0, __s8param1 = -1) {
    this._actionList = __s8param0;
    this._usesWorkIndex = __s8param1;
    this._currentActionIndex = 0;
    if (__s8param0 != null) {
      for (var __s8local0 = 0, __s8local1 = __s8param0; __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__s8local2 !== undefined) {
          __s8local2.init(this);
        }
      }
    }
    this.startCurrentAction();
  };
  AIsoMovementVO.prototype.startCurrentAction = function () {
    if (this.actionList.length <= 0 || this.currentActionIndex >= this.actionList.length) {
      this.isoData.updater.removeObjectByVO(this);
    } else {
      this.currentAction.start();
    }
  };
  AIsoMovementVO.prototype.update = function (__s18param0) {
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && !__dep_export_Iso.Iso.renderer.mouse.isWorldDragging) {
      if (this.actionList.length <= 0 || this.currentActionIndex < 0 || this.currentActionIndex >= this.actionList.length) {
        this.isoData.updater.removeObjectByVO(this);
      } else {
        this.currentAction.update(__s18param0);
      }
    }
  };
  AIsoMovementVO.prototype.changePos = function (__s23param0, __s23param1, __s23param2 = true) {
    this._x = (this._precisePos.x = __s23param0) | 0;
    this._y = (this._precisePos.y = __s23param1) | 0;
    if (__s23param2) {
      this.updateBounds();
    }
  };
  AIsoMovementVO.prototype.onCurrentActionDone = function () {
    if (this.isoData) {
      if (this._currentActionIndex + 1 >= this.actionList.length) {
        if (this.usesWorkIndex >= 0) {
          this.isoData.objects.movements.workPlaces.markWorkPlace(this.objectType, this.usesWorkIndex, false);
        }
        this.isoData.updater.removeObjectByVO(this);
      } else {
        this._currentActionIndex++;
        this.startCurrentAction();
      }
    }
  };
  Object.defineProperty(AIsoMovementVO.prototype, "currentAction", {
    get: function () {
      return this.actionList[this.currentActionIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "currentActionType", {
    get: function () {
      return this.currentAction.actionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVO.AIsoObjectVO.prototype, "isMovable").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVO.prototype.getAreaKingdomName = function () {
    if (this.isoData.areaData.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_CAMP || this.isoData.areaData.areaInfo.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP) {
      return __dep_export_IsoHelper.IsoHelper.data.getAreaKingdomName(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CASTLE);
    } else {
      return __s1param0.prototype.getAreaKingdomName.call(this);
    }
  };
  AIsoMovementVO.prototype.getWaypoints = function () {
    return new __dep_export_IsoMovementWaypointClassesVO.IsoMovementWaypointClassesVO([]);
  };
  Object.defineProperty(AIsoMovementVO.prototype, "isClickAvailable", {
    get: function () {
      return this.hasResourceItem;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "hasResourceItem", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.resourcePoolData.ownerMovementVO == this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isHoverGlowAvailable").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s62param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, __s62param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isMale", {
    get: function () {
      return this._isMale;
    },
    set: function (__s66param0) {
      this._isMale = __s66param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "actionList", {
    get: function () {
      return this._actionList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "currentActionIndex", {
    get: function () {
      return this._currentActionIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "precisePos", {
    get: function () {
      return this._precisePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "usesWorkIndex", {
    get: function () {
      return this._usesWorkIndex;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoMovementVO;
}(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO);
exports.AIsoMovementVO = __s0local1;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
var __dep_export_Iso = require("gge-module:export_Iso");
