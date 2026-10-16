Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResearchPathfinderSearchableMap() {
    this._width = 0;
    this._height = 0;
    this._walkableMap = new Map();
  }
  ResearchPathfinderSearchableMap.prototype.getHeight = function () {
    return this._height;
  };
  ResearchPathfinderSearchableMap.prototype.getWidth = function () {
    return this._width;
  };
  ResearchPathfinderSearchableMap.prototype.isWalkable = function (__s9param0, __s9param1) {
    if (__s9param0 == 0 || __s9param1 == 0) {
      return false;
    }
    var __s9local0 = this.getPosStr(__s9param0, __s9param1);
    return !this._walkableMap.has(__s9local0) || this._walkableMap.get(__s9local0);
  };
  ResearchPathfinderSearchableMap.prototype.setWalkable = function (__s12param0, __s12param1, __s12param2) {
    var __s12local0 = this.getPosStr(__s12param0, __s12param1);
    this._walkableMap.set(__s12local0, __s12param2);
    this._width = Math.max(this._width, __s12param0 + 1);
    this._height = Math.max(this._height, __s12param1 + 1);
  };
  ResearchPathfinderSearchableMap.prototype.getPosStr = function (__s14param0, __s14param1) {
    return __s14param0 + "," + __s14param1;
  };
  return ResearchPathfinderSearchableMap;
}();
exports.ResearchPathfinderSearchableMap = __s0local0;
