var __s0local0 = createjs.Rectangle;
createjs.Shape.prototype.updateBounds = function () {
  var __s1local0 = this.getBounds();
  __s1local0 ||= new __s0local0(0, 0, 0, 0);
  var __s1local1 = this.graphics.bounds;
  this.setBounds(__s1local0.x, __s1local0.y, Math.max(__s1local0.width, __s1local1.width), Math.max(__s1local0.height, __s1local1.height));
};
