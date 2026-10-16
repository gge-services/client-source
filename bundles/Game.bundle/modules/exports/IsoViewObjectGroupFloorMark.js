Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupFloorMark() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupFloorMark, __s1param0);
  IsoViewObjectGroupFloorMark.prototype.destroy = function () {
    this._floorCursorVE = null;
    this._tutorialMarkerVE = null;
    this._debugPosVE = null;
    __s1param0.prototype.destroy.call(this);
  };
  IsoViewObjectGroupFloorMark.prototype.initObjects = function () {
    this.resetList();
    this.addObjectToLayerAndList(this._floorCursorVE = this.createElement(__dep_export_IsoFloorCursorVE.IsoFloorCursorVE), this.list);
    this.addObjectToLayerAndList(this._tutorialMarkerVE = this.createElement(__dep_export_IsoTutorialMarkerVE.IsoTutorialMarkerVE), this.list);
    this.addObjectToLayerAndList(this._debugPosVE = this.createElement(__dep_export_IsoDebugPosVE.IsoDebugPosVE), this.list);
  };
  IsoViewObjectGroupFloorMark.prototype.createElement = function (__s9param0) {
    var __s9local0 = new __s9param0();
    __s9local0.init(null);
    __s9local0.updateDisp();
    __s9local0.elementContainer.visible = false;
    __s9local0.elementContainer.mouseEnabled = false;
    return __s9local0;
  };
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "floorCursorVE", {
    get: function () {
      return this._floorCursorVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "tutorialMarkerVE", {
    get: function () {
      return this._tutorialMarkerVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "debugPosVE", {
    get: function () {
      return this._debugPosVE;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupFloorMark;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupFloorMark = __s0local0;
var __dep_export_IsoDebugPosVE = require("gge-module:export_IsoDebugPosVE");
var __dep_export_IsoFloorCursorVE = require("gge-module:export_IsoFloorCursorVE");
var __dep_export_IsoTutorialMarkerVE = require("gge-module:export_IsoTutorialMarkerVE");
