Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SGetInstanceLink = require("gge-module:export_C2SGetInstanceLink");
var __dep_export_LinkReceivedEvent = require("gge-module:export_LinkReceivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleNewServerAnnounceDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._zoneId = 0;
    __s3local0._webSiteId = 0;
    __s3local0._wodId = 0;
    __s3local0.onLinkReceived = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._zoneId = __s3param0;
    __s3local0._webSiteId = __s3param1;
    __s3local0._wodId = __s3param2;
    __s3local0._url = null;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_LinkReceivedEvent.LinkReceivedEvent.LINK_RECEIVED, __s3local0.bindFunction(__s3local0.handleLinkReceived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetInstanceLink.C2SGetInstanceLink(__s3param0, __s3param1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNewServerAnnounceDialogProperties, __s1param0);
  CastleNewServerAnnounceDialogProperties.prototype.handleLinkReceived = function (__s5param0) {
    this._url = __s5param0.url;
    this.onLinkReceived.dispatch();
  };
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "webSiteId", {
    get: function () {
      return this._webSiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "zoneId", {
    get: function () {
      return this._zoneId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "url", {
    get: function () {
      return this._url;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewServerAnnounceDialogProperties.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewServerAnnounceDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleNewServerAnnounceDialogProperties = __s0local0;
