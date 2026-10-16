Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleSpecialEventFactory = require("gge-module:export_CastleSpecialEventFactory");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function FakeEventVO(__s3param0) {
    var __s3local0 = this;
    __s3local0._eventBuildingWOD = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventId = __s3param0;
    __s3local0._eventType = "FakeEvent";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FakeEventVO, __s1param0);
  FakeEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    this._originalEventType = String(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventType", __s5param0, "", true));
    this._eventType = "FakeEvent";
    this.setEventBuildingProperties();
  };
  FakeEventVO.prototype.setEventBuildingProperties = function () {
    var __s7local0 = __dep_export_CastleSpecialEventFactory.CastleSpecialEventFactory.createByEventType(this._originalEventType);
    if (!__s7local0 || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local0, "ASeasonEventVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local0, "PaymentrewardEventVO")) {
      this._eventBuildingNameID = "";
      this._eventBuildingWOD = 0;
    } else {
      this._eventBuildingNameID = __s7local0.eventBuildingNameId;
      this._eventBuildingWOD = __s7local0.eventBuildingWOD;
    }
  };
  Object.defineProperty(FakeEventVO.prototype, "eventId", {
    get: function () {
      return -Number.MAX_VALUE;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return 0;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "remainingEventTimeInSeconds").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return this._eventBuildingWOD;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return this._eventBuildingNameID;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "originalEventType", {
    get: function () {
      return this._originalEventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "isAdditionalLibLoaded", {
    get: function () {
      return true;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isAdditionalLibLoaded").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeEventVO.prototype, "isActive", {
    get: function () {
      return true;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  FakeEventVO.prototype.openDialog = function (__s37param0 = true) {
    this.executeOpenDialog(__s37param0, __dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_factionEventEnd_waiting_title"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_factionEventEnd_waiting_copy")));
  };
  return FakeEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.FakeEventVO = __s0local0;
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
