Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyQueueInfoSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._buildListComponent = new __dep_export_UnitProductionListComponent.UnitProductionListComponent(__s3local0.subLayerDisp.productionElements, __dep_export_BasicBuildListComponent.BasicBuildListComponent.ALIGN_HORIZONTAL);
    __s3local0._buildListComponent.slotsDraggable = false;
    __s3local0._buildListComponent.showProgressbar = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyQueueInfoSublayer, __s1param0);
  AutoRecruitmentCopyQueueInfoSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this._buildListComponent.fillItems(__dep_export_CastleModel.CastleModel.militaryData.getPackageListById(this.sublayerProperties.listId));
    this._buildListComponent.selectedSlot = -1;
    this._buildListComponent.productionItem.disp.mouseEnabled = false;
    var __s5local0 = this._buildListComponent.items;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local3.disp.icon_Lock.visible = false;
          __s5local3.disp.rentedFrame.visible = false;
          __s5local3.disp.vipFrame.visible = false;
          __s5local3.disp.icon_wait.visible = false;
          __s5local3.disp.mouseEnabled = false;
        }
      }
    }
  };
  AutoRecruitmentCopyQueueInfoSublayer.prototype.onPackageListUpdated = function (__s11param0) {
    this._buildListComponent.fillItems(__dep_export_CastleModel.CastleModel.militaryData.getPackageListById(this.sublayerProperties.listId));
  };
  AutoRecruitmentCopyQueueInfoSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    if (this._buildListComponent.selectedSlot > 0) {
      this._buildListComponent.selectedSlot = 0;
    }
  };
  Object.defineProperty(AutoRecruitmentCopyQueueInfoSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyQueueInfoSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.AutoRecruitmentCopyQueueInfoSublayer = __s0local0;
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
var __dep_export_UnitProductionListComponent = require("gge-module:export_UnitProductionListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
