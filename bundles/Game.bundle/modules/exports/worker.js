// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 2058
// Export: worker; preserved source: modules/webpack/exports/postPathfinderRequest.js
// Original canonical SHA-256: ba403493a1ec7c5e55f526cccd584e5cbd5d99b50142907d27c3b1a487348e9d
var __s0local0 = new (require("gge-module:exact_f3b1574af5499fbc"))();
exports.worker = __s0local0;
window.addEventListener("beforeunload", function (__s1param0) {
  __s0local0.terminate();
});
__s0local0.onmessage = function (__s3param0) {
  if (__s3param0.data) {
    var __s3local0 = __s0local2.get(__s3param0.data.id);
    if (__s3local0) {
      __s0local2.delete(__s3param0.data.id);
      __s3local0(__s3param0.data);
    }
  }
};
