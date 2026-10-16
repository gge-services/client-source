Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function ABGTowerConnectionsComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s3param0);
    this._disp = __s3param0;
    this._connectionComponents = [];
    for (var __s3local0 = 0; __s3local0 < ABGTowerConnectionsComponent.CONNECTION_AMOUNT; __s3local0++) {
      var __s3local1 = new __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent(__s3param1, __s3param2, true);
      __s3local1.disp.x = __s3local0 * (__s3param2 + __s3param3);
      this._connectionComponents.push(__s3local1);
      this._disp.addChild(__s3local1.disp);
    }
  }
  ABGTowerConnectionsComponent.prototype.setConnections = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < this._connectionComponents.length; __s7local0++) {
      var __s7local1 = this._connectionComponents[__s7local0];
      var __s7local2 = __s7param0.length > __s7local0 ? __s7param0[__s7local0] : null;
      __s7local1.setConnection(__s7local2);
    }
  };
  ABGTowerConnectionsComponent.CONNECTION_AMOUNT = 5;
  return ABGTowerConnectionsComponent;
}();
exports.ABGTowerConnectionsComponent = __s0local0;
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
