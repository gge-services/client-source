Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleExternalStandardOKDialogProperties(__s3param0 = "dialog_privateOffer_multiChest_reward_title", __s3param1 = "dialog_privateOffer_multiChest_reward_desc", __s3param2 = CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION, __s3param3 = null, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0._decorationState = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._titleTextID = __s3param0;
    __s3local0._descTextID = __s3param1;
    __s3local0._decorationState = __s3param2;
    __s3local0._okBtnCallback = __s3param3;
    __s3local0._descTextIDParams = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalStandardOKDialogProperties, __s1param0);
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "titleTextID", {
    get: function () {
      return this._titleTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "descTextID", {
    get: function () {
      return this._descTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "decorationState", {
    get: function () {
      return this._decorationState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "okBtnCallback", {
    get: function () {
      return this._okBtnCallback;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "descTextIDParams", {
    get: function () {
      return this._descTextIDParams;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalStandardOKDialogProperties.__initialize_static_members = function () {
    CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION = 0;
    CastleExternalStandardOKDialogProperties.ERROR_RED_DECORATION = 1;
  };
  return CastleExternalStandardOKDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleExternalStandardOKDialogProperties = __s0local0;
__s0local0.__initialize_static_members();
