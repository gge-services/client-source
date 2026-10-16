Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_NetworkCookie = require("gge-module:class_NetworkCookie");
var __dep_class_AgeGateData = require("gge-module:class_AgeGateData");
var __dep_class_BasicLocalizationData = require("gge-module:class_BasicLocalizationData");
var __dep_class_BasicSessionData = require("gge-module:class_BasicSessionData");
var __dep_class_BasicUserData = require("gge-module:class_BasicUserData");
var __dep_class_ForumData = require("gge-module:class_ForumData");
var __dep_class_InstanceVOProxy = require("gge-module:class_InstanceVOProxy");
var __dep_export_shouldReloadBranch = require("gge-module:export_shouldReloadBranch");
var __s0local0 = function () {
  function BasicModel() {}
  Object.defineProperty(BasicModel, "smartfoxClient", {
    get: function () {
      return BasicModel._smartfoxClient;
    },
    set: function (__s7param0) {
      BasicModel._smartfoxClient = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "userData", {
    get: function () {
      BasicModel._userData ||= new __dep_class_BasicUserData.BasicUserData();
      return BasicModel._userData;
    },
    set: function (__s11param0) {
      BasicModel._userData = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "socialData", {
    get: function () {
      return BasicModel._socialData;
    },
    set: function (__s15param0) {
      BasicModel._socialData = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "languageData", {
    get: function () {
      return BasicModel._languageData;
    },
    set: function (__s19param0) {
      BasicModel._languageData = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "fontData", {
    get: function () {
      return BasicModel._fontData;
    },
    set: function (__s23param0) {
      BasicModel._fontData = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "achievementData", {
    get: function () {
      return BasicModel._achievementData;
    },
    set: function (__s27param0) {
      BasicModel._achievementData = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "localData", {
    get: function () {
      return BasicModel._localData;
    },
    set: function (__s31param0) {
      BasicModel._localData = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "networkCookie", {
    get: function () {
      return BasicModel._networkCookie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "sessionData", {
    get: function () {
      BasicModel._sessionData ||= new __dep_class_BasicSessionData.BasicSessionData();
      return BasicModel._sessionData;
    },
    set: function (__s37param0) {
      BasicModel._sessionData = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "basicLoaderData", {
    get: function () {
      return BasicModel._basicLoaderData;
    },
    set: function (__s41param0) {
      BasicModel._basicLoaderData = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "basicLocalization", {
    get: function () {
      BasicModel._localizationData ||= new __dep_class_BasicLocalizationData.BasicLocalizationData();
      return BasicModel._localizationData;
    },
    set: function (__s45param0) {
      BasicModel._localizationData = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "identityManagement", {
    get: function () {
      return BasicModel._identityManagement;
    },
    set: function (__s49param0) {
      BasicModel._identityManagement = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "forumData", {
    get: function () {
      BasicModel._forumData ||= new __dep_class_ForumData.ForumData();
      return BasicModel._forumData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "ageGateData", {
    get: function () {
      BasicModel._ageGateData ||= new __dep_class_AgeGateData.AgeGateData();
      return BasicModel._ageGateData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "branchesModel", {
    get: function () {
      return BasicModel._branchesModel ||= new __dep_export_shouldReloadBranch.BranchesModel();
    },
    enumerable: true,
    configurable: true
  });
  BasicModel.instanceProxy = new __dep_class_InstanceVOProxy.InstanceVOProxy();
  BasicModel._networkCookie = new __dep_class_NetworkCookie.NetworkCookie();
  return BasicModel;
}();
exports.BasicModel = __s0local0;
