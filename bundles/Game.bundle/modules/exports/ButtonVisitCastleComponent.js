Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ButtonVisitCastleComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonVisitCastleComponent, __s1param0);
  ButtonVisitCastleComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeVisited;
  };
  Object.defineProperty(ButtonVisitCastleComponent.prototype, "targetWMO", {
    set: function (__s7param0) {
      this._worldMapObjectVO = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonVisitCastleComponent.prototype.onClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, this._worldMapObjectVO);
  };
  Object.defineProperty(ButtonVisitCastleComponent.prototype, "infoTextId", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
        return "ringmenu_visit_camp";
      } else {
        return "ringmenu_visit_castle";
      }
    },
    enumerable: true,
    configurable: true
  });
  return ButtonVisitCastleComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonVisitCastleComponent = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
