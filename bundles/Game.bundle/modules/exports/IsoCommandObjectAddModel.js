Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectAddModel(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._addToGridData = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._vo = __s3param1;
    __s3local0._addToGridData = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectAddModel, __s1param0);
  IsoCommandObjectAddModel.prototype.execute = function () {
    var __s5local0 = false;
    var __s5local1 = this.isoData.objects.getGroupByType(this._vo.objectType.groupType);
    if (__s5local1) {
      __s5local1.addObject(this._vo);
      this.checkInstantBuildTip();
      this.isoData.objects.completeTempObjectList.push(this._vo);
      this.addToGrid(__s5local1.groupType);
      __s5local0 = true;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, [this._vo]));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, [this._vo]));
    }
    if (!__s5local0) {
      __dep_exact_9e901e8e2483a22f_1.debug("Warning: Object with ID '" + this._vo.objectId + "' was not taken by any class.");
    }
  };
  IsoCommandObjectAddModel.prototype.addToGrid = function (__s9param0) {
    if (this._addToGridData) {
      switch (__s9param0) {
        case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.GROUNDS:
          this.isoData.grid.updateCompleteMap();
          break;
        case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE:
          this.isoData.grid.updateDefence();
          break;
        case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS:
          this.isoData.grid.addBuilding(this._vo);
          break;
        case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS:
        case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FIXED_POSITIONS:
          this.isoData.grid.updateOuterMap();
      }
    }
  };
  IsoCommandObjectAddModel.prototype.checkInstantBuildTip = function () {
    if (!IsoCommandObjectAddModel._instantBuildTipShown && __dep_export_CastleModel.CastleModel.userData.userLevel == 5 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._vo, "ABasicBuildingVO") && this._vo.getBuildDuration() >= IsoCommandObjectAddModel.INSTANT_BUILD_TIP_VALID_DURATION) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.TIP_INSTANTBUILD]);
      IsoCommandObjectAddModel._instantBuildTipShown = true;
    }
  };
  IsoCommandObjectAddModel.__initialize_static_members = function () {
    IsoCommandObjectAddModel.INSTANT_BUILD_TIP_VALID_DURATION = 600;
  };
  IsoCommandObjectAddModel._instantBuildTipShown = false;
  return IsoCommandObjectAddModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectAddModel = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
