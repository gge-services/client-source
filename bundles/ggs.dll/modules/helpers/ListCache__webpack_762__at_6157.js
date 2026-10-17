// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 762; original: modules/opaque/opaque_9f948d30698163c2a68a09cc.js
function ListCache(__s33param0) {
  var __s33local0 = -1;
  var __s33local1 = __s33param0 ? __s33param0.length : 0;
  for (this.clear(); ++__s33local0 < __s33local1;) {
    var __s33local2 = __s33param0[__s33local0];
    this.set(__s33local2[0], __s33local2[1]);
  }
}
