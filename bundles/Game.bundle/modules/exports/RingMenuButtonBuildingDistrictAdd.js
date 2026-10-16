Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SMoveToDistrictVO = require("gge-module:export_C2SMoveToDistrictVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ARingMenuButton = require("gge-module:export_ARingMenuButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RingMenuButtonBuildingDistrictAdd() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonBuildingDistrictAdd, __s1param0);
  RingMenuButtonBuildingDistrictAdd.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_buildingDistrictAdd;
    this._disp.visible = this.isVisible;
    if (this._disp.visible) {
      var __s5local0 = this.isEnabled;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, __s5local0);
      this._disp.toolTipText = __s5local0 ? null : "alert_districtFull";
    }
    this._disp.gotoAndStop(__dep_exact_f855840627e6e145.int(__s5param2.buildingVO.districtTypeID));
    if (this.targetBuilding.buildingVO.storeable) {
      this._disp.x = RingMenuButtonBuildingDistrictAdd.POS_STORABLE.x;
      this._disp.y = RingMenuButtonBuildingDistrictAdd.POS_STORABLE.y;
    } else {
      this._disp.x = RingMenuButtonBuildingDistrictAdd.POS_DEFAULT.x;
      this._disp.y = RingMenuButtonBuildingDistrictAdd.POS_DEFAULT.y;
    }
  };
  Object.defineProperty(RingMenuButtonBuildingDistrictAdd.prototype, "isEnabled", {
    get: function () {
      var __s10local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo;
      var __s10local1 = __dep_exact_f855840627e6e145.int(this.targetBuilding.buildingVO.districtTypeID);
      return !!__s10local0 && !__s10local0.isDistrictFull(__s10local1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuButtonBuildingDistrictAdd.prototype, "isVisible", {
    get: function () {
      var __s12local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo;
      var __s12local1 = __dep_exact_f855840627e6e145.int(this.targetBuilding.buildingVO.districtTypeID);
      var __s12local2 = __dep_export_Iso.Iso.data.objects.provider.getObjectById(__s12local0.getDistrictObjectId(__s12local1));
      return __s12local1 > 0 && !this.targetBuilding.buildingVO.isDistrict && !this.targetBuilding.buildingVO.isInBuildingDistrict && !!__s12local0 && __s12local0.hasDistrictOfType(__s12local1) && !this.isBuildingInProgress() && !__s12local2.isDisassembling();
    },
    enumerable: true,
    configurable: true
  });
  RingMenuButtonBuildingDistrictAdd.prototype.onClick = function (__s14param0, __s14param1) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp)) {
      var __s14local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getDistrictObjectId(this.targetBuilding.buildingVO.districtTypeID));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMoveToDistrictVO.C2SMoveToDistrictVO(this.targetBuilding.vo.objectId, __s14local0));
      this.targetBuilding.elementContainer.parent.removeChild(this.targetBuilding.elementContainer);
      this.parent.hide();
    }
  };
  RingMenuButtonBuildingDistrictAdd.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_addToDistrict");
  };
  RingMenuButtonBuildingDistrictAdd.__initialize_static_members = function () {
    this.POS_DEFAULT = new __s0local0(58, -72);
    this.POS_STORABLE = new __s0local0(93, 27);
  };
  return RingMenuButtonBuildingDistrictAdd;
}(__dep_export_ARingMenuButton.ARingMenuButton);
exports.RingMenuButtonBuildingDistrictAdd = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRingMenuButton");
__s0local1.__initialize_static_members();
