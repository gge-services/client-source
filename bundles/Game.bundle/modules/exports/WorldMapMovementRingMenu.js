Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_WorldMapRingMenu = require("gge-module:export_WorldMapRingMenu");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function WorldMapMovementRingMenu(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.isPermanent = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapMovementRingMenu, __s1param0);
  WorldMapMovementRingMenu.prototype.updateMenuPosition = function () {
    if (this.interactiveMapmovementTarget && this.interactiveMapmovementTarget.disp) {
      var __s5local0 = this.interactiveMapmovementTarget.movementIconContainer.getBounds(null);
      var __s5local1 = new __s0local0(this.interactiveMapmovementTarget.movementIconContainer.x + __s5local0.x + __s5local0.width / 2, this.interactiveMapmovementTarget.movementIconContainer.y + __s5local0.y + __s5local0.height / 2);
      var __s5local2 = this.disp.stage.localToGlobal(__s5local1);
      this.disp.x = __s5local2.x * this.layoutManager.worldmapScreen.camera.viewPortZoom;
      this.disp.y = __s5local2.y * this.layoutManager.worldmapScreen.camera.viewPortZoom;
    } else {
      this.hide();
    }
  };
  WorldMapMovementRingMenu.prototype.initComponent = function () {
    __s1param0.prototype.initComponent.call(this);
    this.hideInfoTexts();
  };
  WorldMapMovementRingMenu.prototype.hideInfoTexts = function () {};
  Object.defineProperty(WorldMapMovementRingMenu.prototype, "interactiveMapmovementTarget", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  return WorldMapMovementRingMenu;
}(__dep_export_WorldMapRingMenu.WorldMapRingMenu);
exports.WorldMapMovementRingMenu = __s0local1;
