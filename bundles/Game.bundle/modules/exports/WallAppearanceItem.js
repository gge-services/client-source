Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function WallAppearanceItem(__s3param0, __s3param1) {
    this._disp = __s3param0;
    this._nodePositions = __s3param1;
  }
  WallAppearanceItem.prototype.updateVisibility = function (__s5param0) {
    if (this._nodePositions != null) {
      for (var __s5local0 = 0, __s5local1 = this._nodePositions; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined && __s5param0 != null) {
          for (var __s5local3 = 0, __s5local4 = __s5param0; __s5local3 < __s5local4.length; __s5local3++) {
            var __s5local5 = __s5local4[__s5local3];
            if (__s5local5 !== undefined && __s5local5.pos == __s5local2 && __s5local5.isDefeated) {
              this._disp.visible = false;
              return;
            }
          }
        }
      }
    }
    this._disp.visible = true;
  };
  return WallAppearanceItem;
}();
exports.WallAppearanceItem = __s0local0;
