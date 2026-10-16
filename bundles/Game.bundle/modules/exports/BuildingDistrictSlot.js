Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function BuildingDistrictSlot(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0._index = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._building = __s3param1;
    __s3local0._districtBuildingVO = __s3param2;
    __s3local0._index = __s3param3;
    __s3local0._ciInteractionData = __s3param4;
    __s3param0.mc_tooltip.mouseEnabled = false;
    __s3param0.mc_tooltip.mouseChildren = false;
    __s3param0.mc_locked.mouseChildren = false;
    __s3param0.mc_locked.txt_unlockLevel.mouseEnabled = false;
    __s3local0._itxt_tooltip1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_tooltip.txt_line1, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0._itxt_tooltip2 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_tooltip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0._itxt_tooltip3 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_tooltip.txt_line3, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.updatePosition();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuildingDistrictSlot, __s1param0);
  BuildingDistrictSlot.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  BuildingDistrictSlot.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  BuildingDistrictSlot.prototype.updatePosition = function () {
    this.disp.x = 150 + this._index % __dep_export_BuildingDistrictDialog.BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictSlot.X_OFFSET;
    this.disp.y = 110 + Math.floor(this._index / __dep_export_BuildingDistrictDialog.BuildingDistrictDialog.ITEMS_PER_ROW) * BuildingDistrictSlot.Y_OFFSET;
  };
  BuildingDistrictSlot.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.showLock();
    this.showBuilding();
    this.setToolTip();
  };
  BuildingDistrictSlot.prototype.showBuilding = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.buildingHolder);
    if (this._building) {
      this.disp.buildingHolder.scaleX = this.disp.buildingHolder.scaleY = this._districtBuildingVO.buildingScaleFactor;
      this.disp.buildingHolder.addChild(this._building.elementContainer);
      this._building.updateDisp();
      this.disp.mc_placeholder.visible = false;
    }
  };
  BuildingDistrictSlot.prototype.showLock = function () {
    if (this._index > this._districtBuildingVO.districtSlots - 1) {
      this.disp.mc_locked.visible = true;
      var __s18local0 = this.getUnlockLevel();
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_locked.txt_unlockLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("building_level", [__s18local0]));
    } else {
      this.disp.mc_locked.visible = false;
    }
  };
  BuildingDistrictSlot.prototype.getUnlockLevel = function () {
    for (var __s22local0 = this._districtBuildingVO.getUpgradeVO(); __s22local0;) {
      if (__s22local0.districtSlots > this._index) {
        return __dep_exact_f855840627e6e145.int(__s22local0.level);
      }
      __s22local0 = __s22local0.getUpgradeVO();
    }
    return -1;
  };
  BuildingDistrictSlot.prototype.setToolTip = function () {
    this.disp.mc_locked.toolTipText = this.disp.mc_locked.visible ? "dialog_district_slot_locked_tt" : null;
    this.disp.mc_placeholder.toolTipText = this._building || this.disp.mc_locked.visible ? null : "dialog_district_slot_empty_tt";
  };
  BuildingDistrictSlot.prototype.onMouseOver = function (__s29param0) {
    if (this._building && !this._building.hasRingMenu) {
      this._itxt_tooltip1.textContentVO.stringValue = this._building.vo.getInfoTooltipLine1();
      this._itxt_tooltip2.textContentVO.stringValue = this._building.vo.getInfoTooltipLine2();
      this._itxt_tooltip3.textContentVO.stringValue = this._building.vo.getInfoTooltipLine3();
      this.disp.mc_tooltip.visible = true;
    }
  };
  BuildingDistrictSlot.prototype.onMouseOut = function (__s32param0) {
    this.disp.mc_tooltip.visible = false;
  };
  BuildingDistrictSlot.prototype.onMouseUp = function (__s34param0) {
    this.disp.mc_tooltip.visible = false;
    if (this._building && this._ciInteractionData.selectedBuilding != this._building.vo) {
      this._ciInteractionData.setSelectedBuilding(this._building.vo);
    }
  };
  Object.defineProperty(BuildingDistrictSlot.prototype, "building", {
    get: function () {
      return this._building;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuildingDistrictSlot.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  BuildingDistrictSlot.X_OFFSET = 224;
  BuildingDistrictSlot.Y_OFFSET = 214;
  return BuildingDistrictSlot;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.BuildingDistrictSlot = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_BuildingDistrictDialog = require("gge-module:export_BuildingDistrictDialog");
