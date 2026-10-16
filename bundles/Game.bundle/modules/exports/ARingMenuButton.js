Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ARingMenuButton() {
    this.touchClickCount = 0;
  }
  Object.defineProperty(ARingMenuButton, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.isBuildingInProgress = function () {
    if (!this.targetBuilding) {
      return false;
    }
    switch (this.targetBuilding.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        return false;
      default:
        return true;
    }
  };
  ARingMenuButton.prototype.init = function (__s11param0, __s11param1, __s11param2) {
    this._parent = __s11param0;
    this._disp = null;
    this._targetBuilding = __s11param2;
  };
  Object.defineProperty(ARingMenuButton.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ARingMenuButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.destroy = function () {
    if (this._disp) {
      this._disp.visible = false;
    }
    this.removeEventListeners();
  };
  ARingMenuButton.prototype.onClick = function (__s20param0, __s20param1) {};
  ARingMenuButton.prototype.timerUpdate = function (__s22param0) {};
  ARingMenuButton.prototype.getInfoText = function () {
    return null;
  };
  ARingMenuButton.prototype.getAction = function () {
    return 0;
  };
  Object.defineProperty(ARingMenuButton.prototype, "targetBuilding", {
    get: function () {
      return this._targetBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ARingMenuButton.prototype.addEventListeners = function () {};
  ARingMenuButton.prototype.removeEventListeners = function () {};
  ARingMenuButton.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  return ARingMenuButton;
}();
exports.ARingMenuButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
