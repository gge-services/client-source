Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GenericEventInfoListProperties(__s3param0, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._eventID = 0;
    __s3local0._tabID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventID = __s3param0;
    __s3local0._tabID = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GenericEventInfoListProperties, __s1param0);
  Object.defineProperty(GenericEventInfoListProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEventInfoListProperties.prototype, "tabID", {
    get: function () {
      return this._tabID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEventInfoListProperties.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  return GenericEventInfoListProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.GenericEventInfoListProperties = __s0local0;
