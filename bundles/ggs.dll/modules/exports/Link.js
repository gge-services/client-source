Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Rectangle;
var __s0local1 = function () {
  function Link(__s3param0, __s3param1 = false) {
    this.isAnchorLink = __s3param1;
    this.rects = [];
    this.linkId = __s3param0;
  }
  Link.prototype.startLinkRect = function (__s5param0, __s5param1) {
    this.rects.push(new __s0local0(__s5param0, __s5param1, 0, 0));
  };
  Link.prototype.endCurrentLinkRect = function (__s7param0, __s7param1) {
    var __s7local0 = this.rects[this.rects.length - 1];
    __s7local0.right = __s7param0;
    __s7local0.bottom = __s7param1;
  };
  Link.prototype.containsPoint = function (__s9param0) {
    for (var __s9local0 = 0, __s9local1 = this.rects; __s9local0 < __s9local1.length; __s9local0++) {
      if (__s9local1[__s9local0].containsPoint(__s9param0)) {
        return true;
      }
    }
    return false;
  };
  return Link;
}();
exports.Link = __s0local1;
