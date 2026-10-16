Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoDefencePositionsMoat() {}
  IsoDefencePositionsMoat.prototype.reset = function () {
    this._walls = this.createNewList();
    this._outerCorners = this.createNewList();
    this._innerCorners = this.createNewList();
    this._gate = new __dep_export_IsoDefencePosition.IsoDefencePosition();
  };
  IsoDefencePositionsMoat.prototype.createNewList = function () {
    return [];
  };
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    set: function (__s11param0) {
      this._gate = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "innerCorners", {
    get: function () {
      return this._innerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "outerCorners", {
    get: function () {
      return this._outerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDefencePositionsMoat;
}();
exports.IsoDefencePositionsMoat = __s0local0;
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
