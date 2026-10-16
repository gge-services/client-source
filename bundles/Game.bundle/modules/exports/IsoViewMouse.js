Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_C2SMoveToDistrictVO = require("gge-module:export_C2SMoveToDistrictVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BuildingDistrictDialogProperties = require("gge-module:export_BuildingDistrictDialogProperties");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __s0local0 = createjs.Point;
__dep_exact_c549e43d1112dfff.getLogger("IsoViewMouse");
var __s0local1 = function (__s1param0) {
  function IsoViewMouse() {
    var __s3local0 = this;
    __s3local0._focusMousePos = new __s0local0();
    __s3local0._currentMouseGridPos = new __s0local0();
    __s3local0._startDragGridPos = new __s0local0();
    __s3local0._currentDragGridPos = new __s0local0();
    __s3local0._startDragRot = 0;
    __s3local0._dragMouseOffset = new __s0local0();
    __s3local0._isDragAndDrop = false;
    __s3local0._draggedWordOneTile = false;
    __s3local0._isWorldDragging = false;
    __s3local0._lastWorldDragMousePos = new __s0local0();
    __s3local0._isDragTargetANewBuyObject = false;
    __s3local0._scratchMouseScreenPos = new __s0local0();
    __s3local0._scratchMouseGridPos = new __s0local0();
    __s3local0._scratchGridPosHelper = new __s0local0();
    __s3local0._scratchStagePos = new __s0local0();
    __s3local0._scratchDeltaScroll = new __s0local0();
    __s3local0._scratchDragMouseScreenPos = new __s0local0();
    __s3local0._scratchDragOffsetPos = new __s0local0();
    __s3local0._scratchDragMouseGridPos = new __s0local0();
    __s3local0._scratchDragScreenPos = new __s0local0();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewMouse, __s1param0);
  IsoViewMouse.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.reset();
  };
  IsoViewMouse.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._hoveredTarget = null;
    this._selectedTarget = null;
    this._focusedTarget = null;
    this._draggedTarget = null;
    this._newBuyObjectVE = null;
    this._draggedWordOneTile = false;
    this._isWorldDragging = false;
    this._isDragTargetANewBuyObject = false;
    this._dragOnDistrict = null;
  };
  IsoViewMouse.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    this.reset();
  };
  IsoViewMouse.prototype.startWorldDragging = function () {
    if (!this.isWorldDragging) {
      this._isWorldDragging = true;
      this._draggedWordOneTile = false;
      var __s11local0 = this.getMouseStagePos(this._scratchStagePos);
      this._lastWorldDragMousePos.x = __s11local0.x;
      this._lastWorldDragMousePos.y = __s11local0.y;
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  IsoViewMouse.prototype.stopWorldDragging = function () {
    if (this.isWorldDragging) {
      this._isWorldDragging = false;
      this._draggedWordOneTile = false;
      __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
    }
  };
  IsoViewMouse.prototype.onWorldDragMove = function () {
    this._draggedWordOneTile = true;
    __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
    var __s17local0 = this.getMouseStagePos(this._scratchStagePos);
    var __s17local1 = this.isoRenderer.camera.getCurrentZoomValue();
    this._scratchDeltaScroll.x = (__s17local0.x - this._lastWorldDragMousePos.x) / __s17local1;
    this._scratchDeltaScroll.y = (__s17local0.y - this._lastWorldDragMousePos.y) / __s17local1;
    this.isoRenderer.camera.scrollRel(this._scratchDeltaScroll);
    this._lastWorldDragMousePos.x = __s17local0.x;
    this._lastWorldDragMousePos.y = __s17local0.y;
  };
  IsoViewMouse.prototype.startDraggingTarget = function (__s19param0, __s19param1 = true, __s19param2 = false, __s19param3 = true) {
    if (this.draggedTarget != __s19param0 && this.isMyArea) {
      if (this.draggedTarget) {
        this.cancelDraggedTarget();
      }
      this._isDragAndDrop = true;
      this._dragOnDistrict = null;
      this._draggedTarget = __s19param0;
      if (this.draggedTarget && this.draggedTarget.vo.isMovable) {
        this.changeFocusedTarget(this.draggedTarget);
        this.deselectTarget();
        if (this.hoveredTarget != __s19param0) {
          this.unHoverTarget(true);
        }
        __dep_export_IsoHelper.IsoHelper.view.showBuildingInfoText(false);
        this.startDragGridPos.x = this.draggedTarget.vo.x;
        this.startDragGridPos.y = this.draggedTarget.vo.y;
        this._startDragRot = __dep_exact_f855840627e6e145.int(this.draggedTarget.vo.rotation);
        var __s19local0 = this.isoRenderer.camera.getScreenPosByGridPos(this.draggedTarget.vo.pos);
        if (__s19param1) {
          if (this.focusedTarget) {
            this.dragMouseOffset.x = __s19local0.x - this.focusMousePos.x;
            this.dragMouseOffset.y = __s19local0.y - this.focusMousePos.y;
          } else {
            var __s19local1 = this.getMouseScreenPos();
            this.dragMouseOffset.x = __s19local0.x - __s19local1.x;
            this.dragMouseOffset.y = __s19local0.y - __s19local1.y;
          }
        } else {
          this.dragMouseOffset.x = 0;
          this.dragMouseOffset.y = 0;
        }
        this._isDragTargetANewBuyObject = __s19param2;
        this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION).addChild(this.draggedTarget.elementContainer);
        this.draggedTarget.updateDisp();
        this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(true);
        if (this.isDragTargetANewBuyObject && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.draggedTarget, "ABasicBuildingVE")) {
          this.draggedTarget.setCollisionFloorVisibility(true);
        }
        this.draggedTarget.updateInteractionVisibility();
        __dep_export_IsoHelper.IsoHelper.view.showRotationPanel(__s19param3, this.draggedTarget);
        this.onDragTileMove();
      }
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(2);
    }
  };
  IsoViewMouse.prototype.dropDraggedTarget = function () {
    var __s30local0;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
    if (this.draggedTarget) {
      if (this.isoRenderer.isoData.grid.isDimensionFreeForBuild(this.currentDragGridPos, this.draggedTarget.vo.dimension, this.draggedTarget.vo.objectId)) {
        this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS).addChild(this.draggedTarget.elementContainer);
        if (this.draggedTarget.vo.isInBuildingDistrict) {
          this.isoRenderer.objects.isoLayerObjects.push(this.draggedTarget);
        }
        this.draggedTarget.updateDisp();
        this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
        __dep_export_IsoHelper.IsoHelper.view.showRotationPanel(false);
        __s30local0 = this.draggedTarget;
        this._draggedTarget = null;
        this._isDragAndDrop = false;
        this.informServerAboutNewDraggedPos(__s30local0);
        if (this.isDragTargetANewBuyObject) {
          __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, [__s30local0.vo.wodId]));
        } else {
          __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DRAG_DONE, [__s30local0]));
        }
        this.unHoverTarget();
        this.unFocusTarget();
        __s30local0.updateInteractionVisibility();
        if (this.isDragTargetANewBuyObject) {
          this.newBuyObjectVE.destroy();
          this._newBuyObjectVE = null;
        }
        this._isDragTargetANewBuyObject = false;
      } else {
        var __s30local1 = this.getDistrictAtPos(this.currentDragGridPos);
        if (!!__s30local1 && __s30local1.canAddBuilding(this.draggedTarget.vo)) {
          this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION).removeChild(this.draggedTarget.elementContainer);
          if (!this.isDragTargetANewBuyObject || !!this.draggedTarget.vo.isInBuildingDistrict) {
            this.isoRenderer.objects.isoLayerObjects.splice(this.isoRenderer.objects.isoLayerObjects.indexOf(this.draggedTarget), 1);
          }
          this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
          __dep_export_IsoHelper.IsoHelper.view.showRotationPanel(false);
          __s30local0 = this.draggedTarget;
          this._draggedTarget = null;
          this._isDragAndDrop = false;
          this.unHoverTarget();
          this.unFocusTarget();
          __s30local0.updateInteractionVisibility();
          if (this.isDragTargetANewBuyObject) {
            __dep_export_Iso.Iso.controller.server.buyObjectFromShop(__s30local0.vo.wodId, new __s0local0(-1, -1), __s30local0.vo.rotation, __s30local1.objectId);
          } else {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMoveToDistrictVO.C2SMoveToDistrictVO(__s30local0.vo.objectId, __s30local1.objectId));
          }
        } else if (this.isDragAndDrop) {
          this.cancelDraggedTarget();
        }
      }
    }
  };
  IsoViewMouse.prototype.cancelDraggedTarget = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
    if (this.draggedTarget) {
      if (!this.draggedTarget.elementContainer) {
        this._draggedTarget = null;
        this._isDragAndDrop = false;
        return;
      }
      if (this.draggedTarget.vo.isInBuildingDistrict) {
        this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION).removeChild(this.draggedTarget.elementContainer);
      } else {
        this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS).addChild(this.draggedTarget.elementContainer);
        this.draggedTarget.updateDisp();
        this.draggedTarget.vo.rotation = this._startDragRot;
        this.draggedTarget.updatePosition();
        this.draggedTarget.updateRotation();
        __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(this.draggedTarget));
      }
      if (this.isDragTargetANewBuyObject) {
        __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, [this.newBuyObjectVE.vo.wodId]));
      } else {
        __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DRAG_CANCELED, [this.newBuyObjectVE]));
      }
      var __s44local0 = this.draggedTarget;
      this._draggedTarget = null;
      this._isDragAndDrop = false;
      this.startDragGridPos.x = 0;
      this.startDragGridPos.y = 0;
      this._startDragRot = 0;
      this.unHoverTarget();
      this.unFocusTarget();
      if (!this.isDragTargetANewBuyObject) {
        __s44local0.updateInteractionVisibility();
      }
      if (this.isDragTargetANewBuyObject) {
        this.newBuyObjectVE.destroy();
        this._newBuyObjectVE = null;
      }
      this._isDragTargetANewBuyObject = false;
      this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
      __dep_export_IsoHelper.IsoHelper.view.showRotationPanel(false);
    }
  };
  IsoViewMouse.prototype.onDragTileMove = function () {
    if (this.draggedTarget) {
      var __s54local0 = this.getMouseScreenPos(this._scratchDragMouseScreenPos);
      this._scratchDragOffsetPos.x = __s54local0.x + this.dragMouseOffset.x;
      this._scratchDragOffsetPos.y = __s54local0.y + this.dragMouseOffset.y;
      var __s54local1 = this.isoRenderer.camera.getGridPosByScreenPos(this._scratchDragOffsetPos, this._scratchDragMouseGridPos);
      var __s54local2 = this.isoRenderer.isoData.grid.getValidDragPosForBuilding(__s54local1, this.draggedTarget.vo.dimension);
      var __s54local3 = this.isoRenderer.camera.getScreenPosByGridPos(__s54local2, this._scratchDragScreenPos);
      if (this.draggedTarget.elementContainer) {
        this.draggedTarget.elementContainer.x = __s54local3.x;
        this.draggedTarget.elementContainer.y = __s54local3.y;
      }
      this.currentDragGridPos.x = __s54local2.x;
      this.currentDragGridPos.y = __s54local2.y;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.draggedTarget, "ABasicBuildingVE")) {
        var __s54local4 = this.getDistrictAtPos(__s54local2);
        var __s54local5 = !!__s54local4 && __s54local4.canAddBuilding(this.draggedTarget.vo);
        var __s54local6 = this.isoRenderer.isoData.grid.isDimensionFreeForBuild(__s54local2, this.draggedTarget.vo.dimension, this.draggedTarget.vo.objectId);
        this.draggedTarget.updateDragCollisionFloorEffect(__s54local6 || __s54local5);
        if (__s54local4) {
          this._dragOnDistrict = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s54local4.objectId);
          if (this._dragOnDistrict && this._dragOnDistrict.vo.objectId != this.draggedTarget.vo.objectId) {
            this._dragOnDistrict.updateDistrictFloorEffect(true);
          }
        } else {
          if (this._dragOnDistrict && this._dragOnDistrict.vo.objectId != this.draggedTarget.vo.objectId) {
            this._dragOnDistrict.updateDistrictFloorEffect(false);
          }
          this._dragOnDistrict = null;
        }
      }
    }
  };
  IsoViewMouse.prototype.startDraggingOfNewBuyObject = function (__s63param0 = null) {
    if (!this.isDragging && this.isMyArea) {
      var __s63local0 = __dep_exact_81dacdf05bd32292_2.castAs(__dep_export_IsoHelper.IsoHelper.data.cloneIsoObject(__s63param0), "ABasicBuildingVO");
      if (__s63local0) {
        __s63local0.buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
        __s63local0.hitPoints = 100;
        this._newBuyObjectVE = __dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s63local0);
        this.newBuyObjectVE.statusIcons.setVisibility(false);
        this.newBuyObjectVE.init(__s63local0);
        this.newBuyObjectVE.updateDisp();
        this.isoRenderer.strategies.switchBy(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE, true);
        this.startDraggingTarget(this.newBuyObjectVE, false, true);
      }
    }
  };
  IsoViewMouse.prototype.informServerAboutNewDraggedPos = function (__s67param0) {
    if (this.isDragTargetANewBuyObject) {
      var __s67local0 = __s67param0.vo;
      if (__s67local0 && __s67local0.uniqueBuildingId >= 0) {
        __dep_export_Iso.Iso.controller.server.placeCustomInventoryObject(__s67local0.uniqueBuildingId, this.currentDragGridPos, __s67param0.vo.rotation);
      } else {
        __dep_export_Iso.Iso.controller.server.buyObjectFromShop(__s67param0.vo.wodId, this.currentDragGridPos, __s67param0.vo.rotation);
      }
    } else {
      this.isoRenderer.isoData.updater.onIsoObjectMoved(__s67param0.vo, this.currentDragGridPos, __s67param0.vo.rotation);
    }
  };
  IsoViewMouse.prototype.changeSelectedTarget = function (__s73param0) {
    if (this.selectedTarget != __s73param0 && !this.isDragging && this.isMyArea) {
      this.deselectTarget();
      if (!__s73param0.vo.isInBuildingDistrict || __dep_export_CastleComponent.CastleComponent.dialogHandler.isDialogRegistered(__dep_export_BuildingDistrictDialog.BuildingDistrictDialog) || __dep_export_CastleComponent.CastleComponent.layoutManager.isDialogVisible(__dep_export_BuildingDistrictDialog.BuildingDistrictDialog)) {
        if (__s73param0.interactiveVO.isRingmenuAvailable) {
          this._selectedTarget = __s73param0;
        }
        if (this.selectedTarget) {
          this.selectedTarget.hasRingMenu = true;
          this.selectedTarget.updateInteractionVisibility();
          __dep_export_IsoHelper.IsoHelper.view.showRingMenu(true, this.selectedTarget);
        }
      } else {
        var __s73local0 = __s73param0.vo;
        var __s73local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getDistrictObjectId(__s73local0.districtTypeID));
        var __s73local2 = __dep_exact_81dacdf05bd32292_2.castAs(__dep_export_Iso.Iso.data.objects.provider.getObjectById(__s73local1), "ADistrictBuildingVO");
        if (__s73local2) {
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_BuildingDistrictDialog.BuildingDistrictDialog, new __dep_export_BuildingDistrictDialogProperties.BuildingDistrictDialogProperties(__s73local2, __s73param0));
        }
      }
    }
  };
  IsoViewMouse.prototype.deselectTarget = function () {
    if (this.selectedTarget) {
      this.selectedTarget.hasRingMenu = false;
      var __s81local0 = this.selectedTarget;
      this._selectedTarget = null;
      __s81local0.updateInteractionVisibility();
      __dep_export_IsoHelper.IsoHelper.view.showRingMenu(false);
    }
  };
  IsoViewMouse.prototype.changeFocusedTarget = function (__s84param0) {
    if (this.focusedTarget != __s84param0 && this.isMyArea) {
      this.unFocusTarget();
      this._focusedTarget = __s84param0;
      if (this.focusedTarget) {
        this.focusedTarget.updateInteractionVisibility();
        __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
        this.getMouseScreenPos(this._focusMousePos);
      }
    }
  };
  IsoViewMouse.prototype.unFocusTarget = function () {
    if (this.focusedTarget && this.focusedTarget != this.draggedTarget) {
      this.focusedTarget.updateInteractionVisibility();
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && this.hoveredTarget) {
        __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_HAND);
      } else if (this.hoveredTarget && this.hoveredTarget.interactiveVO.isClickAvailable) {
        __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
      } else {
        __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      }
    }
    this._focusedTarget = null;
  };
  IsoViewMouse.prototype.changeHoveredTarget = function (__s94param0) {
    if (this.hoveredTarget != __s94param0 && !this.isDragging) {
      this.unHoverTarget();
      this._hoveredTarget = __s94param0;
      if (this.hoveredTarget) {
        if (this.hoveredTarget.interactiveVO.isRingmenuAvailable || this.hoveredTarget.interactiveVO.isClickAvailable) {
          if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && this.hoveredTarget.vo.isMovable && !this.hoveredTarget.vo.isInBuildingDistrict) {
            __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_HAND);
          } else if (this.isMyArea) {
            __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
          } else {
            __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
          }
        } else {
          __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
        }
        if (this.hoveredTarget.interactiveVO.isInfoTooltipAvailable && !this.hoveredTarget.interactiveVO.isInBuildingDistrict) {
          __dep_export_IsoHelper.IsoHelper.view.showBuildingInfoText(true, this.hoveredTarget);
        }
        this.hoveredTarget.updateInteractionVisibility();
        this.hoveredTarget.onHoverTarget();
      } else {
        __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      }
      this.updateFloorCursor();
    }
  };
  IsoViewMouse.prototype.unHoverTarget = function (__s105param0 = false) {
    if (this.hoveredTarget && (!this.isDragging || __s105param0)) {
      __dep_export_IsoHelper.IsoHelper.view.changeCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      __dep_export_IsoHelper.IsoHelper.view.showBuildingInfoText(false);
      this.hoveredTarget.onUnHoverTarget();
      var __s105local0 = this.hoveredTarget;
      this._hoveredTarget = null;
      __s105local0.updateInteractionVisibility();
      this.updateFloorCursor();
    }
  };
  IsoViewMouse.prototype.updateFloorCursor = function () {
    var __s108local0 = this.isoRenderer.objects.floorMarks.floorCursorVE;
    if (__s108local0) {
      __s108local0.elementContainer.visible = !this.draggedTarget && !this.focusedTarget && !this.hoveredTarget && this.isoRenderer.isoData.grid.isPointOnBuildingGround(this.currentMouseGridPos) && this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE);
      if (__s108local0.elementContainer.visible) {
        __s108local0.updatePosition();
      }
      var __s108local1 = this.isoRenderer.objects.floorMarks.debugPosVE;
      if (__s108local1) {
        __s108local1.elementContainer.visible = this.isoRenderer.settings.isDebugPosVisible;
        if (__s108local1.elementContainer.visible) {
          __s108local1.updatePosition();
        }
      }
    }
  };
  Object.defineProperty(IsoViewMouse.prototype, "isDragging", {
    get: function () {
      return this.draggedTarget != null;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewMouse.prototype.getMouseScreenPos = function (__s116param0 = null) {
    var __s116local0 = __s116param0 || new __s0local0();
    var __s116local1 = this.isoRenderer.layers.transformLayer;
    if (__s116local1.stage) {
      __s116local0.x = (__s116local1.stage.mouseX - __s116local1.x) / __s116local1.scaleX;
      __s116local0.y = (__s116local1.stage.mouseY - __s116local1.y) / __s116local1.scaleY;
    } else {
      __s116local0.x = 0;
      __s116local0.y = 0;
    }
    return __s116local0;
  };
  IsoViewMouse.prototype.getMouseGridPos = function (__s120param0 = null) {
    return this.isoRenderer.camera.getGridPosByScreenPos(this.getMouseScreenPos(this._scratchGridPosHelper), __s120param0);
  };
  IsoViewMouse.prototype.getMouseStagePos = function (__s122param0 = null) {
    var __s122local0 = __s122param0 || new __s0local0();
    var __s122local1 = __dep_export_IsoHelper.IsoHelper.view.stage;
    __s122local0.x = __s122local1.mouseX;
    __s122local0.y = __s122local1.mouseY;
    return __s122local0;
  };
  IsoViewMouse.prototype.getDistrictAtPos = function (__s124param0) {
    var __s124local0 = this.isoRenderer.isoData.grid.getTile(__s124param0.x, __s124param0.y);
    var __s124local1 = this.isoRenderer.isoData.objects.provider.getObjectById(__s124local0.objectId);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s124local1, "ADistrictBuildingVO")) {
      return __s124local1;
    } else {
      return null;
    }
  };
  IsoViewMouse.prototype.onMouseOverTarget = function (__s128param0) {
    this.changeHoveredTarget(__s128param0);
  };
  IsoViewMouse.prototype.onMouseOutTarget = function (__s130param0) {
    this.changeHoveredTarget(null);
  };
  IsoViewMouse.prototype.onMouseUpTarget = function (__s132param0) {
    var __s132local0 = this.isWorldDragging && this.draggedWordOneTile;
    this.stopWorldDragging();
    if (this.draggedTarget) {
      this.dropDraggedTarget();
    } else {
      if (this.focusedTarget) {
        this.unFocusTarget();
      }
      if (!__s132local0 && this.isMyArea) {
        if (__s132param0 && __s132param0.interactiveVO.isClickAvailable && (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s132param0.vo, "ABasicBuildingVO") && __s132param0.vo.buildingState.isFunctionally || !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s132param0.vo, "ABasicBuildingVO")) || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s132param0, "AIsoMovementVE")) {
          __s132param0.onMouseClick();
        } else if (__s132param0.interactiveVO.isRingmenuAvailable) {
          this.changeSelectedTarget(__s132param0);
        }
      }
    }
  };
  IsoViewMouse.prototype.onMouseDownTarget = function (__s140param0) {
    if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && __s140param0.vo.isMovable && !this.draggedTarget && !__s140param0.interactiveVO.isInBuildingDistrict) {
      this.changeFocusedTarget(__s140param0);
    } else if (!this.focusedTarget) {
      this.startWorldDragging();
    }
  };
  IsoViewMouse.prototype.onMouseDownOnGround = function () {
    if (!this.focusedTarget) {
      this.startWorldDragging();
    }
  };
  IsoViewMouse.prototype.onMouseUpOnGround = function () {
    if (this.isWorldDragging && this.draggedWordOneTile) {
      this.stopWorldDragging();
    } else {
      this.stopWorldDragging();
      this.dropDraggedTarget();
      this.deselectTarget();
    }
  };
  IsoViewMouse.prototype.onMouseOverPanel = function () {
    this.unHoverTarget();
    this.stopWorldDragging();
  };
  IsoViewMouse.prototype.onMouseOutPanel = function () {};
  IsoViewMouse.prototype.onDialogOpened = function () {
    this.cancelDraggedTarget();
    this.deselectTarget();
    this.unFocusTarget();
    this.unHoverTarget();
    this.stopWorldDragging();
  };
  IsoViewMouse.prototype.onRenderStrategyChanged = function () {
    var __s157local0;
    if (this.selectedTarget && !this.selectedTarget.interactiveVO.isRingmenuAvailable) {
      this.deselectTarget();
      this.updateFloorCursor();
    }
    if (this.hoveredTarget) {
      __s157local0 = this.hoveredTarget;
      this.unHoverTarget();
      this.changeHoveredTarget(__s157local0);
    }
    if (this.focusedTarget) {
      __s157local0 = this.focusedTarget;
      this.unFocusTarget();
      this.changeFocusedTarget(__s157local0);
    }
    if (this.selectedTarget) {
      __s157local0 = this.selectedTarget;
      this.deselectTarget();
      this.changeSelectedTarget(__s157local0);
    }
  };
  IsoViewMouse.prototype.onMouseMove = function () {
    var __s163local0 = this.getMouseScreenPos(this._scratchMouseScreenPos);
    var __s163local1 = this.getMouseGridPos(this._scratchMouseGridPos);
    if (__s163local1.x != this.currentMouseGridPos.x || __s163local1.y != this.currentMouseGridPos.y) {
      this.currentMouseGridPos.x = __s163local1.x;
      this.currentMouseGridPos.y = __s163local1.y;
      if (this.isWorldDragging) {
        this.onWorldDragMove();
      } else {
        this.onDragTileMove();
      }
      this.updateFloorCursor();
    }
    if (this.focusedTarget && !this.draggedTarget && this.focusedTarget.vo.isMovable && __s0local0.distance(this.focusMousePos, __s163local0) >= __dep_export_IsoConst.IsoConst.BUILDING_FOCUS_DISTANCE_TO_DRAGGING) {
      this.startDraggingTarget(this.focusedTarget, true, false, false);
    }
  };
  Object.defineProperty(IsoViewMouse.prototype, "hoveredTarget", {
    get: function () {
      return this._hoveredTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "selectedTarget", {
    get: function () {
      return this._selectedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "draggedTarget", {
    get: function () {
      return this._draggedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "focusedTarget", {
    get: function () {
      return this._focusedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "focusMousePos", {
    get: function () {
      return this._focusMousePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "currentDragGridPos", {
    get: function () {
      return this._currentDragGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "startDragGridPos", {
    get: function () {
      return this._startDragGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "dragMouseOffset", {
    get: function () {
      return this._dragMouseOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "currentMouseGridPos", {
    get: function () {
      return this._currentMouseGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isWorldDragging", {
    get: function () {
      return this._isWorldDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "draggedWordOneTile", {
    get: function () {
      return this._draggedWordOneTile;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "newBuyObjectVE", {
    get: function () {
      return this._newBuyObjectVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isDragTargetANewBuyObject", {
    get: function () {
      return this._isDragTargetANewBuyObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isMyArea", {
    get: function () {
      return __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isDragAndDrop", {
    get: function () {
      return this._isDragAndDrop;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "startDragRot", {
    get: function () {
      return this._startDragRot;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewMouse;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewMouse = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_BuildingDistrictDialog = require("gge-module:export_BuildingDistrictDialog");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
