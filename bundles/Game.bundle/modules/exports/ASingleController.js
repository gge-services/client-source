Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function ASingleController() {
    this._destroyed = false;
  }
  ASingleController.prototype.setModel = function (__s5param0) {
    this._model = __s5param0;
  };
  ASingleController.prototype.setView = function (__s7param0) {
    this._view = __s7param0;
  };
  ASingleController.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  ASingleController.prototype._destroy = function () {
    this._view = null;
    this._model = null;
  };
  return ASingleController;
}();
exports.ASingleController = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IController");
