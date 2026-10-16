Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayObjectBounds = function getDisplayObjectBounds(__s1param0) {
  return (__s1param0 instanceof createjs.Shape ? __s1param0.graphics.bounds : __s1param0.getBounds()) || new createjs.Rectangle(0, 0, 0, 0);
};
