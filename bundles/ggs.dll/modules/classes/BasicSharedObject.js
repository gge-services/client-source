Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function () {
  function BasicSharedObject() {
    this.networkCookie = __dep_class_BasicModel.BasicModel.networkCookie;
    this.saveFileSize(this.env.gameFileSize);
  }
  BasicSharedObject.prototype.readLoginDataUsername = function () {
    return this.networkCookie.username;
  };
  BasicSharedObject.prototype.readLoginDataEmail = function () {
    return this.networkCookie.email;
  };
  BasicSharedObject.prototype.readLoginDataLoginToken = function () {
    return this.networkCookie.loginToken;
  };
  BasicSharedObject.prototype.readLoginDataLanguage = function () {
    return this.networkCookie.getAttributeAsString("language");
  };
  BasicSharedObject.prototype.saveLoginData = function (__s13param0, __s13param1) {
    this.networkCookie.saveLoginData(__s13param0, __s13param1);
  };
  BasicSharedObject.prototype.deleteLoginData = function () {
    this.networkCookie.deleteLoginData();
  };
  BasicSharedObject.prototype.saveLanguageData = function (__s17param0) {
    this.networkCookie.setAttribute("language", __s17param0);
  };
  BasicSharedObject.prototype.saveCountryData = function (__s19param0) {
    this.networkCookie.country = __s19param0;
  };
  BasicSharedObject.prototype.savePlayerID = function (__s21param0) {
    this.networkCookie.setAttribute("playerID", __s21param0);
  };
  BasicSharedObject.prototype.readSelectedServer = function () {
    return this.networkCookie.getAttributeAsString("selectedServer");
  };
  BasicSharedObject.prototype.saveSelectedServer = function (__s25param0) {
    this.networkCookie.setAttribute("selectedServer", __s25param0);
  };
  BasicSharedObject.prototype.readSoundSettings = function () {
    var __s27local0 = [];
    if (this.networkCookie.hasAttribute("soundSettings")) {
      var __s27local1 = this.networkCookie.getAttribute("soundSettings");
      if (typeof __s27local1 == "string") {
        try {
          __s27local0 = JSON.parse(__s27local1);
        } catch (__s32local0) {
          __s27local0 = [];
        }
      } else if (Array.isArray(__s27local1)) {
        __s27local0 = __s27local1;
      }
    }
    return __s27local0;
  };
  BasicSharedObject.prototype.saveSoundSettings = function (__s35param0) {
    this.networkCookie.setAttribute("soundSettings", __s35param0);
  };
  BasicSharedObject.prototype.readInstanceId = function () {
    return this.networkCookie.instanceId;
  };
  Object.defineProperty(BasicSharedObject.prototype, "hasInstanceId", {
    get: function () {
      return this.networkCookie.hasInstanceId;
    },
    enumerable: true,
    configurable: true
  });
  BasicSharedObject.prototype.saveInstance = function (__s41param0, __s41param1) {
    this.networkCookie.instanceId = __s41param0;
    this.networkCookie.zoneId = __s41param1.toString();
  };
  BasicSharedObject.prototype.saveFileSize = function (__s43param0) {
    this.networkCookie.setAttribute("fileSize", __s43param0);
  };
  BasicSharedObject.prototype.saveFirstFrameSize = function (__s45param0) {
    __dep_exact_39c566239c224ca4.info(" saving size of first frame to cookie:" + __s45param0 + "KB.");
    this.networkCookie.setAttribute("firstFrameSizeInKB_" + this.readInstanceId(), __s45param0);
  };
  BasicSharedObject.prototype.readFirstFrameSize = function () {
    var __s47local0;
    __s47local0 = this.networkCookie.hasAttribute("firstFrameSize") && this.networkCookie.getAttribute("firstFrameSize") != null ? this.networkCookie.getAttributeAsNumber("firstFrameSize") : -1;
    __dep_exact_39c566239c224ca4.info("first frame size as read from cookie:" + __s47local0 + "KB");
    return __s47local0;
  };
  BasicSharedObject.prototype.readIsSocialNetwork = function () {
    return !!this.networkCookie.hasAttribute("isSocialNetwork") && this.networkCookie.getAttributeAsBoolean("isSocialNetwork");
  };
  BasicSharedObject.prototype.saveIsSocialNetwork = function (__s51param0) {
    this.networkCookie.setAttribute("isSocialNetwork", __s51param0);
  };
  Object.defineProperty(BasicSharedObject.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSharedObject;
}();
exports.BasicSharedObject = __s0local0;
