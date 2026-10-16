Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_getDisplayObjectBounds = require("gge-module:export_getDisplayObjectBounds");
exports.getGraphicsInstructions = function getGraphicsInstructions(__s1param0) {
  if (__s1param0 instanceof createjs.Shape) {
    return __s1param0.graphics._instructions.filter(function (__s4param0) {
      return function isDrawingInstruction(__s6param0) {
        return Object.keys(__s6param0).length > 0 && __s6param0.x !== undefined && __s6param0.y !== undefined;
      }(__s4param0);
    });
  } else {
    return function getRoundRectInstructions(__s9param0) {
      var __s9local0 = __dep_export_getDisplayObjectBounds.getDisplayObjectBounds(__s9param0);
      var __s9local1 = isNaN(__s9param0.useAsMaskCornerRadius) ? 7 : __s9param0.useAsMaskCornerRadius;
      var __s9local2 = __s9param0.parent ? __s9param0.parent.scaleX * __s9param0.width : __s9param0.width;
      var __s9local3 = __s9param0.parent ? __s9param0.parent.scaleY * __s9param0.height : __s9param0.height;
      return [new createjs.Graphics.RoundRect(__s9local0.x + __s9param0.x, __s9local0.y + __s9param0.y, __s9local2, __s9local3, __s9local1, __s9local1, __s9local1, __s9local1)];
    }(__s1param0);
  }
};
