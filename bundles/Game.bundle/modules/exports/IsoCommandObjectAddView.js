Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectAddView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._vo = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectAddView, __s1param0);
  IsoCommandObjectAddView.prototype.execute = function () {
    if (this.isoRenderer.isoData && this.isoRenderer.isReady) {
      var __s5local0 = __dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(this._vo);
      if (__s5local0) {
        var __s5local1 = false;
        for (var __s5local2 = 0, __s5local3 = Array.from(this.viewObjects.groups.values()); __s5local2 < __s5local3.length; __s5local2++) {
          var __s5local4 = __s5local3[__s5local2];
          if (__s5local4 !== undefined && __s5local4.isObjectForThisList(__s5local0)) {
            __s5local4.addObject(__s5local0);
            this.viewObjects.invalidateCompleteObjectsList();
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "BasicMoatVE")) {
              __s5local0 = this.viewObjects.defenceObjects.moat;
            }
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "CastlewallDefenceVE")) {
              __s5local0.destroy();
            } else {
              __s5local0.updateDisp();
            }
            __s5local1 = true;
            break;
          }
        }
        if (__s5local1) {
          var __s5local5 = __s5local0;
          if (!!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local5, "ABasicBuildingVE") && (__s5local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || __s5local5.buildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED) && !!__s5local5.interactiveVO.isRingmenuAvailable && !this.mouseHandler.isDragging && !this.mouseHandler.selectedTarget) {
            this.mouseHandler.changeSelectedTarget(__s5local5);
          }
        } else {
          __dep_exact_9e901e8e2483a22f.debug("Warning: Object with ID '" + this._vo.objectId + "' was not taken by any class.");
        }
      }
    }
  };
  return IsoCommandObjectAddView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectAddView = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
