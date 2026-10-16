Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupBackground, __s1param0);
  IsoDataObjectGroupBackground.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._vo = this.destroyObject(this.vo);
  };
  IsoDataObjectGroupBackground.prototype.initObjects = function () {
    this._vo = new __dep_export_StaticBackgroundVO.StaticBackgroundVO();
    this._vo.type = __dep_export_IsoHelper.IsoHelper.data.getBackgroundType(this.isoData);
    this._vo.init(this.isoData);
  };
  IsoDataObjectGroupBackground.prototype.fillInCompleteList = function (__s9param0) {
    if (this.vo) {
      __s9param0.push(this.vo);
    }
  };
  IsoDataObjectGroupBackground.prototype.containsObject = function (__s12param0) {
    return this.vo == __s12param0;
  };
  Object.defineProperty(IsoDataObjectGroupBackground.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupBackground;
}(require("gge-module:export_AIsoDataObjectGroup").AIsoDataObjectGroup);
exports.IsoDataObjectGroupBackground = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_StaticBackgroundVO = require("gge-module:export_StaticBackgroundVO");
