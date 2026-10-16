Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MouseCursorData() {
    this.data = [];
  }
  Object.defineProperty(MouseCursorData.prototype, "data", {
    get: function () {
      return this._data;
    },
    set: function (__s7param0) {
      this._data = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MouseCursorData.prototype, "frameRate", {
    get: function () {
      if (this._frameRate === undefined) {
        this._frameRate = 0;
      }
      return this._frameRate;
    },
    set: function (__s12param0) {
      this._frameRate = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MouseCursorData.prototype, "hotSpot", {
    get: function () {
      if (this._hotSpot === undefined) {
        this._hotSpot = new createjs.Point(0, 0);
      }
      return this._hotSpot;
    },
    set: function (__s17param0) {
      this.hotSpot = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  return MouseCursorData;
}();
exports.MouseCursorData = __s0local0;
