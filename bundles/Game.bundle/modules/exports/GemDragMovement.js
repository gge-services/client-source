Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AEquipableDragMovement = require("gge-module:export_AEquipableDragMovement");
var __s0local0 = function (__s1param0) {
  function GemDragMovement(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._sourceSlotMC = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GemDragMovement, __s1param0);
  GemDragMovement.prototype.createEquipableMC = function (__s5param0) {
    this._draggedEquipableMC = __dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.draggedGemVO);
    this.createFavoriteIcon();
  };
  Object.defineProperty(GemDragMovement.prototype, "draggedGemVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  GemDragMovement.prototype.startDrag = function () {
    if (this._sourceSlotMC) {
      this._sourceSlotMC.gemVO = null;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._sourceSlotMC.mc_itemHolder);
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.draggedGemVO, "RelicGemVO")) {
      this.gemData.startRelicDrag(this.draggedGemVO, this._sourceLocation);
    } else {
      this.gemData.startDrag(this.draggedGemVO, this._sourceLocation);
    }
    __dep_export_AEquipableDragMovement.AEquipableDragMovement.layoutManager.nativeCursor.startDrag(this._draggedEquipableMC);
  };
  GemDragMovement.prototype.stopDrag = function (__s14param0, __s14param1 = null) {
    __dep_export_AEquipableDragMovement.AEquipableDragMovement.layoutManager.nativeCursor.stopDrag(this._draggedEquipableMC);
    if (__s14param1) {
      __s14param1.mc_itemHolder.addChild(this._draggedEquipableMC);
      this._draggedEquipableMC.children.forEach(function (__s17param0) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s17param0, "CastleGoodgameExternalClip")) {
          var __s17local0 = __s17param0;
          if (!__s17local0.cacheCanvas && __s17local0.clipColor && __s17local0.clipColor.length && __s17local0.currentshownDisplayObject) {
            __s17local0.clipColor.forEach(function (__s21param0) {
              __s21param0.colorClip(__s17local0.currentshownDisplayObject);
            });
          }
        }
      });
      __s14param1.gemVO = this.draggedGemVO;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.draggedGemVO, "RelicGemVO")) {
      this.gemData.stopRelicDrag(this.draggedGemVO, this._sourceLocation, __s14param0);
    } else {
      this.gemData.stopDrag(this.draggedGemVO, this._sourceLocation, __s14param0);
    }
  };
  Object.defineProperty(GemDragMovement.prototype, "gemData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.gemData;
    },
    enumerable: true,
    configurable: true
  });
  GemDragMovement.prototype.resizeGem = function (__s27param0 = null) {
    __s27param0.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(__dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_WIDTH, __dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_HEIGHT);
  };
  return GemDragMovement;
}(__dep_export_AEquipableDragMovement.AEquipableDragMovement);
exports.GemDragMovement = __s0local0;
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
