Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function ResearchTreeConnectionDot() {
    this._connectingLines = [];
    var __s3local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ResearchTree_ConnectorDot"))();
    this._disp = __s3local0;
    this._disp.visible = false;
  }
  ResearchTreeConnectionDot.prototype.addConnectingLine = function (__s5param0) {
    this._connectingLines.push(__s5param0);
    this.validateVisibility();
  };
  ResearchTreeConnectionDot.prototype.validateVisibility = function () {
    var __s7local0 = this;
    var __s7local1 = !this._connectingLines.every(function (__s9param0) {
      return __s9param0.orientation == __s7local0._connectingLines[0].orientation;
    });
    this._disp.visible = __s7local1;
  };
  Object.defineProperty(ResearchTreeConnectionDot.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResearchTreeConnectionDot;
}();
exports.ResearchTreeConnectionDot = __s0local0;
