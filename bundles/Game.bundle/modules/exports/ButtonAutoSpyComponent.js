Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SSpySpyUnits = require("gge-module:export_C2SSpySpyUnits");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ButtonAutoSpyComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAutoSpyComponent, __s1param0);
  Object.defineProperty(ButtonAutoSpyComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAutoSpyComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO && this._worldMapObjectVO.ownerInfo) {
      this._button.visible = this._worldMapObjectVO.canBeSpied && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished() && __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldMapObjectVO);
      this._button.enableButton = true;
    }
  };
  ButtonAutoSpyComponent.prototype.onClick = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpySpyUnits.C2SSpySpyUnits(this._worldMapObjectVO.absAreaPosX, this._worldMapObjectVO.absAreaPosY));
  };
  Object.defineProperty(ButtonAutoSpyComponent.prototype, "infoTextId", {
    get: function () {
      return "spylog_autoSpy_ringMenu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAutoSpyComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAutoSpyComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
