Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleProfiler = require("gge-module:export_CastleProfiler");
var __dep_export_CastleSlimModel = require("gge-module:export_CastleSlimModel");
var __dep_export_CastleKoreanData = require("gge-module:export_CastleKoreanData");
var __s0local0 = function (__s1param0) {
  function CastleModel() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleModel, __s1param0);
  CastleModel.addModel = function (__s5param0) {
    CastleModel.models.push(__s5param0);
    return __s5param0;
  };
  CastleModel.resetModels = function () {
    if (CastleModel.models != null) {
      for (var __s7local0 = 0; __s7local0 < CastleModel.models.length; __s7local0++) {
        var __s7local1 = CastleModel.models[__s7local0];
        if (__s7local1) {
          __s7local1.reset();
        }
      }
    }
  };
  Object.defineProperty(CastleModel, "profiler", {
    get: function () {
      CastleModel._profiler ||= new __dep_export_CastleProfiler.CastleProfiler();
      return CastleModel._profiler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "smartfoxClient", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel._smartfoxClient;
    },
    set: function (__s17param0) {
      __dep_exact_9e901e8e2483a22f.BasicModel._smartfoxClient = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "userData", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel._userData;
    },
    set: function (__s21param0) {
      __dep_exact_9e901e8e2483a22f.BasicModel._userData = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "socialData", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel._socialData;
    },
    set: function (__s25param0) {
      __dep_exact_9e901e8e2483a22f.BasicModel._socialData = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "languageData", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel._languageData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "localData", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel._localData;
    },
    set: function (__s31param0) {
      __dep_exact_9e901e8e2483a22f.BasicModel._localData = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "eventPackageData", {
    get: function () {
      return CastleModel._eventPackageData;
    },
    set: function (__s35param0) {
      CastleModel._eventPackageData = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleModel, "worldAssignment", {
    get: function () {
      return window.ggs.worldAssignment;
    },
    enumerable: true,
    configurable: true
  });
  CastleModel.__initialize_static_members = function () {
    CastleModel.koreanData = new __dep_export_CastleKoreanData.CastleKoreanData();
  };
  CastleModel.models = [];
  return CastleModel;
}(__dep_export_CastleSlimModel.CastleSlimModel);
exports.CastleModel = __s0local0;
__s0local0.__initialize_static_members();
