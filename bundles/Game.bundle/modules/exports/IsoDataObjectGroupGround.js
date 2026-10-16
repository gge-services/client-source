Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AIsoDataObjectGroupSimpleList = require("gge-module:export_AIsoDataObjectGroupSimpleList");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoDataObjectGroupGround() {
    var __s3local0 = this;
    __s3local0._startPoint = new __s0local0();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupGround, __s1param0);
  IsoDataObjectGroupGround.prototype.addObject = function (__s5param0) {
    __s5param0.type = __dep_export_IsoHelper.IsoHelper.data.getBackgroundType(this.isoData);
    __s1param0.prototype.addObject.call(this, __s5param0);
    this.isoData.grid.updateGrounds();
  };
  IsoDataObjectGroupGround.prototype.parseGCA = function (__s7param0) {
    var __s7local0 = __s7param0.BG;
    if (__s7local0) {
      var __s7local1;
      this.resetList();
      if (__s7local0 != null) {
        for (var __s7local2 = 0, __s7local3 = __s7local0; __s7local2 < __s7local3.length; __s7local2++) {
          var __s7local4 = __s7local3[__s7local2];
          if (__s7local4 !== undefined) {
            (__s7local1 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s7local4, this.isoData)).type = __dep_export_IsoHelper.IsoHelper.data.getBackgroundType(this.isoData);
            this.list.push(__s7local1);
            if (__s7local1.wodId == __dep_export_ClientConstCastle.ClientConstCastle.START_GROUND_WOD_ID) {
              this._startPoint = new __s0local0(__s7local1.x, __s7local1.y);
            }
          }
        }
      }
      this.isoData.grid.updateGrounds();
    }
  };
  Object.defineProperty(IsoDataObjectGroupGround.prototype, "expansionAmount", {
    get: function () {
      return this.list.length - 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupGround.prototype, "startPoint", {
    get: function () {
      return this._startPoint;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupGround;
}(__dep_export_AIsoDataObjectGroupSimpleList.AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupGround = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
