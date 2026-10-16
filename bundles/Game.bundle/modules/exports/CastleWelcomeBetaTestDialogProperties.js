Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleWelcomeBetaTestDialogProperties(__s3param0 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    var __s3local1 = __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isClosedBeta ? CastleWelcomeBetaTestDialogProperties.CLOSED_BETA_NEWS : CastleWelcomeBetaTestDialogProperties.OPEN_BETA_NEWS;
    __s3local0._newsIDs = __s3param0 || __s3local1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWelcomeBetaTestDialogProperties, __s1param0);
  Object.defineProperty(CastleWelcomeBetaTestDialogProperties.prototype, "newsIDs", {
    get: function () {
      return this._newsIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeBetaTestDialogProperties.__initialize_static_members = function () {
    CastleWelcomeBetaTestDialogProperties.OPEN_BETA_NEWS = [1];
    CastleWelcomeBetaTestDialogProperties.CLOSED_BETA_NEWS = [1];
  };
  return CastleWelcomeBetaTestDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleWelcomeBetaTestDialogProperties = __s0local0;
__s0local0.__initialize_static_members();
