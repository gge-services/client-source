Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0;
var __dep_class_BulkLoader = require("gge-module:class_BulkLoader");
var __s0local1 = createjs.Event;
var __dep_export__extend = require("gge-module:export__extend");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __s0local2 = __dep_export_LoggerConfigurator.getLogger("core.AssetLoaderService");
function loadAsset(__s1param0, __s1param1 = 0) {
  var __s1local0 = __dep_class_PathProvider.PathProvider.instance.interfaceVersions;
  var __s1local1 = __dep_class_PathProvider.PathProvider.instance.itemVersions;
  if (__dep_export__extend.isNullOrUndefined(__s1local0) || __dep_export__extend.isNullOrUndefined(__s1local1)) {
    __s0local2.error("InterfaceVersions or ItemVersions has not been set. Set them before using assetLoad method. \n ");
  }
  return new Promise(function (__s4param0, __s4param1) {
    var __s4local0;
    var __s4local1;
    var __s4local2 = __dep_export__extend.isNullOrUndefined(__s1local0.getPath(__s1param0)) == 0;
    var __s4local3 = !__s4local2 && __dep_export__extend.isNullOrUndefined(__s1local1.getPath(__s1param0)) == 0;
    if (__s4local2) {
      __s4local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.loadVersionedInterfaceAsset;
      __s4local1 = "interface";
    } else if (__s4local3) {
      __s4local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.loadVersionedItemAsset;
      __s4local1 = "item";
    }
    if (!__s4local0) {
      __s0local2.warn("Could not find Version for Interface/Item: " + __s1param0 + " (skipping)");
      __s4param0("Warning from promise: " + __s1param0);
      return;
    }
    __s0local2.debug("loadAsset - " + __s1param0 + ", type - " + __s4local1 + ",with prio - " + __s1param1);
    var __s4local4 = __s4local0.apply(__dep_class_BasicModel.BasicModel.basicLoaderData, [__s1param0, __s1param1]);
    if (__s4local4.isLoaded) {
      __s0local2.debug(__s1param0 + " was loaded already!");
      __s4param0(__s1param0);
    } else {
      __s0local2.debug("loading of " + __s1param0 + " has been started");
      function __s10local0(__s11param0) {
        __s10local2();
        __s4param0(__s11param0);
        __s0local2.debug("loading of " + __s1param0 + " has been finished");
      }
      function __s10local1(__s13param0) {
        __s10local2();
        __s4param0(__s13param0);
        __s0local2.warn("loading of " + __s1param0 + " has been canceled with error");
      }
      function __s10local2() {
        __s4local4.removeEventListener(__s0local1.COMPLETE, __s10local0);
        __s4local4.removeEventListener(__dep_class_BulkLoader.BulkLoader.ERROR, __s10local1);
      }
      __s4local4.addEventListener(__s0local1.COMPLETE, __s10local0, false, 0, true);
      __s4local4.addEventListener(__dep_class_BulkLoader.BulkLoader.ERROR, __s10local1, false, 0, true);
    }
  });
}
(function (__s17param0) {
  __s17param0[__s17param0.SEQUENTIAL = 0] = "SEQUENTIAL";
  __s17param0[__s17param0.PARALLEL = 1] = "PARALLEL";
})(__s0local0 = exports.AssetLoadingFlowType ||= {});
exports.loadAsset = loadAsset;
exports.loadAssets = function loadAssets(__s19param0, __s19param1 = __s0local0.PARALLEL, __s19param2 = 0) {
  __s0local2.debug("loadAssets list - " + __s19param0 + ", flowType: " + __s19param1 + ", prio: " + __s19param2);
  if (__s19param1 == __s0local0.PARALLEL) {
    return Promise.all(__s19param0.map(function (__s22param0) {
      return loadAsset(__s22param0, __s19param2);
    }));
  }
  if (__s19param1 == __s0local0.SEQUENTIAL) {
    var __s19local0 = [];
    return __s19param0.reduce(function (__s25param0, __s25param1) {
      return __s25param0.then(function (__s27param0) {
        return loadAsset(__s25param1, __s19param2).then(function (__s29param0) {
          return __s19local0.push(__s29param0);
        });
      });
    }, Promise.resolve());
  }
  return null;
};
