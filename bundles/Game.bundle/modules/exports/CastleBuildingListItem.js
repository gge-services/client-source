Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicBuildListItem = require("gge-module:export_BasicBuildListItem");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleBuildingListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itemSize = 64;
    __s3local0.itemSpace = 12;
    __s3local0.itemSlotSize = __s3local0.itemSize + __s3local0.itemSpace;
    __s3local0.targetMcSize = __s3local0.itemSize * 0.8;
    __s3local0.buildingListItemMC.addEventListener(__s0local0.MOUSE_OVER, __s3local0.bindFunction(__s3local0.onMouseOver));
    __s3local0.buildingListItemMC.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    __s3local0.itxt_info = __s3local0.textFieldManager.registerTextField(__s3local0.buildingListItemMC.content.txt_info, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuildingListItem, __s1param0);
  CastleBuildingListItem.prototype.setIcons = function () {
    this.buildingListItemMC.icon_Lock.visible = this.isLocked;
    this.buildingListItemMC.content.visible = !this.isLocked && !this.isFree;
    this.buildingListItemMC.icon_wait.visible = this.constructionSlotVO.isWaitingSlot() && !this.constructionSlotVO.isFree && !this.constructionSlotVO.isLocked;
    this.buildingListItemMC.mc_building.visible = !this.constructionSlotVO.isWaitingSlot();
    this._disp.actLikeButton = !this.buildingListItemMC.icon_Lock.visible;
  };
  Object.defineProperty(CastleBuildingListItem.prototype, "targetBuilding", {
    get: function () {
      return this._target;
    },
    set: function (__s9param0) {
      if (this._target && this._target.disp) {
        this._target.vo.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
      this._target = __s9param0;
      this.buildingListItemMC.mc_statusIcon.visible = false;
      if (this._target) {
        if (!this._target.buildingVO) {
          console.error("BuildingListItem, target VO is undefined: " + __dep_exact_81dacdf05bd32292.getQualifiedClassName(this._target));
          return;
        }
        this.onProgress();
        this.showTarget();
        this._target.vo.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
        this.buildingListItemMC.content.visible = true;
      } else {
        this.buildingListItemMC.icon_Lock.visible = false;
        this.buildingListItemMC.icon_wait.visible = false;
        this.buildingListItemMC.content.visible = false;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingListItem.prototype.onClick = function (__s15param0) {
    if (this.targetBuilding) {
      this._target = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(this.targetBuilding.vo.objectId);
      if (this.targetBuilding && this.targetBuilding.buildingVO) {
        this.targetBuilding.hasRingMenu = false;
        switch (this.targetBuilding.buildingVO.buildingState) {
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED:
            __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
            break;
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
            __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
            if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.targetBuilding, "BasicMoatVE") || __dep_exact_81dacdf05bd32292.instanceOfClass(this.targetBuilding, "PremiumMoatVE")) {
              __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(this.targetBuilding.moatVO.positions.gate.pos);
            } else {
              __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(this.targetBuilding.vo.pos);
            }
            this.targetBuilding.hasRingMenu = true;
        }
        __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
      } else if (!__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastleBuildMode && !this.buildingListItemMC.icon_Lock.visible) {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllIngameUIComponents();
        __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      }
    }
  };
  CastleBuildingListItem.prototype.onMouseOver = function (__s23param0) {
    if (!this._slotVO.isLocked && this._slotVO.isFree) {
      this.buildingListItemMC.toolTipText = "panel_action_build";
    } else if (this._slotVO.isWaitingSlot()) {
      this.initQueueTooltip();
    } else {
      this.initProductionSlotTooltip();
    }
  };
  CastleBuildingListItem.prototype.initProductionSlotTooltip = function () {
    var __s28local0;
    if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList) {
      __s28local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.nextAllowedBuildersLevelRequirement);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.isBuildersQuartersUnderConstruction) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotBuildConstruction ";
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.isBuildersQuartersBuilt) {
      if (this._slotVO.isLocked) {
        if (__dep_export_CastleModel.CastleModel.userData.userLevel < __s28local0) {
          this.buildingListItemMC.toolTipText = {
            t: "panel_buildinglist_SlotBuildUpgradeCap",
            p: [__s28local0]
          };
        } else {
          this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotUpgrade";
        }
      } else {
        this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
      }
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __s28local0) {
      this.buildingListItemMC.toolTipText = {
        t: "panel_buildinglist_SlotLevelCap",
        p: [__s28local0]
      };
    } else if (this._slotVO.isLocked) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotBuild";
    } else {
      this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
    }
  };
  CastleBuildingListItem.prototype.initQueueTooltip = function () {
    var __s40local0;
    if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList) {
      __s40local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.nextAllowedCraneLevelRequirement);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.isCraneUnderConstruction) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotConstruction";
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.isCraneBuilt) {
      if (this._slotVO.isLocked) {
        if (__dep_export_CastleModel.CastleModel.userData.userLevel < __s40local0) {
          this.buildingListItemMC.toolTipText = {
            t: "panel_buildinglist_SlotUpgradeCap",
            p: [__s40local0]
          };
        } else {
          this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotUpgrade";
        }
      } else {
        this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
      }
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __s40local0) {
      this.buildingListItemMC.toolTipText = {
        t: "panel_buildinglist_SlotLevelCap",
        p: [__s40local0]
      };
    } else if (!__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.allSlotsBought() && this._slotVO.isLocked) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotQueue";
    } else {
      this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
    }
  };
  CastleBuildingListItem.prototype.getBuildingTooltip = function () {
    if (!this._target || !this._target.buildingVO) {
      return null;
    }
    var __s52local0 = __dep_exact_f855840627e6e145.int(this._target.buildingVO.level);
    if (__s52local0 != 1 || this._target.buildingVO.hasUpgrade) {
      if (this._target.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || this._target.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED || this._target.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED) {
        __s52local0++;
      }
      return {
        t: "building_with_level",
        p: [this._target.buildingVO.getNameString(), __s52local0]
      };
    } else {
      return {
        t: this._target.buildingVO.getNameString()
      };
    }
  };
  CastleBuildingListItem.prototype.onProgress = function (__s58param0 = null) {
    if (this._target) {
      this.itxt_info.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this._target.buildingVO.getTimeLeftForBuilding());
    }
    this.buildingListItemMC.content.progressBar.scaleX = this._target.buildingVO.getPercentCompletedForBuilding();
    this.buildingListItemMC.content.progressBar.visible = this.showProgressbar;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel).updateCache();
  };
  CastleBuildingListItem.prototype.showTarget = function () {
    var __s61local0;
    switch (this._target.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        __s61local0 = this._target.buildingVO.getUpgradeVO() ? this._target.buildingVO.getUpgradeVO() : this._target.buildingVO;
        break;
      default:
        __s61local0 = this._target.buildingVO;
    }
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s61local0, this.buildingListItemMC.content.mc_container, this.targetMcSize, this.targetMcSize);
    switch (this._target.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        this.buildingListItemMC.mc_statusIcon.visible = false;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(1);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(2);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(3);
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(4);
    }
  };
  CastleBuildingListItem.prototype.remove = function () {
    this.buildingListItemMC.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.buildingListItemMC.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    if (this._target && this._target.disp) {
      this._target.vo.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
    }
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(CastleBuildingListItem.prototype, "constructionSlotVO", {
    get: function () {
      return this.slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuildingListItem.prototype, "buildingListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuildingListItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuildingListItem;
}(__dep_export_BasicBuildListItem.BasicBuildListItem);
exports.CastleBuildingListItem = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleBuildingListPanel = require("gge-module:export_CastleBuildingListPanel");
