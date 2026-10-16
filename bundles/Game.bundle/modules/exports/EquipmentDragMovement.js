Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_AEquipableDragMovement = require("gge-module:export_AEquipableDragMovement");
var __s0local0 = function (__s1param0) {
  function EquipmentDragMovement(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._sourceSlotMC = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentDragMovement, __s1param0);
  EquipmentDragMovement.prototype.createEquipableMC = function (__s5param0) {
    this._draggedEquipableMC = __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this._draggedEquipableVO, null, __dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_WIDTH, __dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_HEIGHT);
    this.createFavoriteIcon();
  };
  Object.defineProperty(EquipmentDragMovement.prototype, "draggedEquipmentVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDragMovement.prototype.startDrag = function () {
    if (this._sourceSlotMC) {
      if (this._sourceSlotMC.slotVO) {
        this._sourceSlotMC.slotVO.equipmentVO = null;
      }
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._sourceSlotMC.mc_itemHolder);
    }
    this.equipmentData.startDrag(this.draggedEquipmentVO, this._sourceLocation);
    __dep_export_AEquipableDragMovement.AEquipableDragMovement.layoutManager.nativeCursor.startDrag(this._draggedEquipableMC);
  };
  EquipmentDragMovement.prototype.stopDrag = function (__s13param0, __s13param1 = null) {
    __dep_export_AEquipableDragMovement.AEquipableDragMovement.layoutManager.nativeCursor.stopDrag(this._draggedEquipableMC);
    if (__s13param1) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this._draggedEquipableVO, __s13param1.mc_itemHolder, __dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_WIDTH + 3, __dep_export_AEquipableDragMovement.AEquipableDragMovement.MAX_HEIGHT + 3, null, true, true, false, true, true);
    }
    this.equipmentData.stopDrag(this.draggedEquipmentVO, this._sourceLocation, __s13param0);
  };
  Object.defineProperty(EquipmentDragMovement.prototype, "equipmentData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.equipData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDragMovement.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentDragMovement;
}(__dep_export_AEquipableDragMovement.AEquipableDragMovement);
exports.EquipmentDragMovement = __s0local0;
