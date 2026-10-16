Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function AModel() {
    this.SGN_UPDATE = new __dep_exact_9e901e8e2483a22f.ObjectSignal();
    this._destroyed = false;
  }
  AModel.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  AModel.prototype._destroy = function () {
    this.SGN_UPDATE.removeAll();
  };
  AModel.prototype.dispatchUpdate = function () {
    this.SGN_UPDATE.signal(this);
  };
  return AModel;
}();
exports.AModel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IModel");
