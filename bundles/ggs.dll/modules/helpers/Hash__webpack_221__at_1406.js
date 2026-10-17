// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 221; original: modules/opaque/opaque_3ceb4ad97d4557409871cd49.js
function Hash(__s1param0) {
  var __s1local0 = -1;
  var __s1local1 = __s1param0 ? __s1param0.length : 0;
  for (this.clear(); ++__s1local0 < __s1local1;) {
    var __s1local2 = __s1param0[__s1local0];
    this.set(__s1local2[0], __s1local2[1]);
  }
}
