Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function AGBLinkComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0.ID_TERMS = "#terms";
    __s3local0.ID_PRIVACY = "#privacy";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, "empire_agb_terms_privacy", "") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AGBLinkComponent, __s1param0);
  AGBLinkComponent.prototype.onClick = function (__s5param0, __s5param1) {
    __s1param0.prototype.onClick.call(this, __s5param0, __s5param1);
    __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.VIEW_AGB);
  };
  AGBLinkComponent.prototype.getLinkURL = function (__s7param0) {
    switch (__s7param0) {
      case this.ID_TERMS:
        return __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.urlAGB;
      case this.ID_PRIVACY:
        return __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.urlPolicy;
    }
    return "";
  };
  return AGBLinkComponent;
}(require("gge-module:export_LinkComponent").LinkComponent);
exports.AGBLinkComponent = __s0local0;
