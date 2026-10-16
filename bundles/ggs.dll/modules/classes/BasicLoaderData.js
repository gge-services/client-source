Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_FileErrorLOFactory = require("gge-module:class_FileErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_BulkLoader = require("gge-module:class_BulkLoader");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_GoodgameLoader = require("gge-module:class_GoodgameLoader");
var __s0local0 = function (__s1param0) {
  function BasicLoaderData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._appLoader = new __dep_class_GoodgameLoader.GoodgameLoader("appLoader");
    __s3local0._assetLoader = new __dep_class_BulkLoader.BulkLoader("assetLoader");
    __s3local0.ASSET_NOT_VERSIONED_FLAG = "/undefined";
    __s3local0._assetLoader.loadQueue.maintainScriptOrder = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLoaderData, __s1param0);
  Object.defineProperty(BasicLoaderData.prototype, "appLoader", {
    get: function () {
      return this._appLoader;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLoaderData.prototype, "assetLoader", {
    get: function () {
      return this._assetLoader;
    },
    enumerable: true,
    configurable: true
  });
  BasicLoaderData.prototype.getVersionedItemAssetUrl = function (__s9param0) {
    var __s9local0;
    this.checkAssetUrlAndDisplayErrors(__s9param0, this.bindFunction(this.isItemAssetVersioned), "ITEMVERSIONS");
    __s9local0 = __dep_class_PathProvider.PathProvider.instance.getAssetURL(__s9param0);
    this.checkAssetUrl(__s9local0, __s9param0, "ITEMVERSIONS");
    return __s9local0;
  };
  BasicLoaderData.prototype.isItemAssetVersioned = function (__s11param0) {
    var __s11local0;
    __s11local0 = __dep_class_PathProvider.PathProvider.instance.getAssetURL(__s11param0);
    return this.checkAssetUrlForNotNull(__s11local0);
  };
  BasicLoaderData.prototype.loadVersionedItemAsset = function (__s13param0, __s13param1 = 0) {
    var __s13local0 = this.getVersionedItemAssetUrl(__s13param0);
    return this.loadAsset(__s13local0, __s13param0, __s13param1);
  };
  BasicLoaderData.prototype.getVersionedInterfaceAssetUrl = function (__s15param0) {
    var __s15local0;
    this.checkAssetUrlAndDisplayErrors(__s15param0, this.bindFunction(this.isInterfaceAssetVersioned), "INTERFACEVERSIONS");
    __s15local0 = __dep_class_PathProvider.PathProvider.instance.getInterfaceAssetURL(__s15param0);
    this.checkAssetUrl(__s15local0, __s15param0, "INTERFACEVERSIONS");
    return __s15local0;
  };
  BasicLoaderData.prototype.isInterfaceAssetVersioned = function (__s17param0) {
    var __s17local0;
    __s17local0 = __dep_class_PathProvider.PathProvider.instance.getInterfaceAssetURL(__s17param0);
    return this.checkAssetUrlForNotNull(__s17local0);
  };
  BasicLoaderData.prototype.loadVersionedInterfaceAsset = function (__s19param0, __s19param1 = 0) {
    var __s19local0 = this.getVersionedInterfaceAssetUrl(__s19param0);
    return this.loadAsset(__s19local0, __s19param0, __s19param1);
  };
  BasicLoaderData.prototype.checkAssetUrlAndDisplayErrors = function (__s21param0, __s21param1, __s21param2) {
    if (!__s21param1.call(this, __s21param0)) {
      if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest || __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest) {
        throw new Error("ASSET_NOT_VERSIONED_IN_" + __s21param2 + ": " + __s21param0);
      }
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_FileErrorLOFactory.FileErrorLOFactory(__dep_class_FileErrorLOFactory.FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR, __s21param0));
    }
  };
  BasicLoaderData.prototype.checkAssetUrlForNotNull = function (__s25param0) {
    return __s25param0.indexOf(this.ASSET_NOT_VERSIONED_FLAG) == -1;
  };
  BasicLoaderData.prototype.checkAssetUrl = function (__s27param0, __s27param1, __s27param2) {
    var __s27local0;
    if (__s27param0.indexOf(this.ASSET_NOT_VERSIONED_FLAG) == -1) {
      __s27local0 = true;
    } else {
      __s27local0 = false;
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_FileErrorLOFactory.FileErrorLOFactory(__dep_class_FileErrorLOFactory.FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR, __s27param1));
    }
    return __s27local0;
  };
  BasicLoaderData.prototype.loadAsset = function (__s31param0, __s31param1, __s31param2) {
    var __s31local0;
    if (__s31param2 === undefined) {
      __s31param2 = 0;
    }
    if (this.checkAssetUrlForNotNull(__s31param0)) {
      var __s31local1 = {
        id: __s31param1,
        priority: __s31param2
      };
      __s31local0 = this.assetLoader.addAssetBundle(__s31param0, __s31local1);
    }
    return __s31local0;
  };
  BasicLoaderData.prototype.wasAssetLoaded = function (__s35param0) {
    if (this.isInterfaceAssetVersioned(__s35param0)) {
      var __s35local0 = this.getVersionedInterfaceAssetUrl(__s35param0);
      return this._assetLoader.isLoaded(__s35local0);
    }
    if (this.isItemAssetVersioned(__s35param0)) {
      var __s35local1 = this.getVersionedItemAssetUrl(__s35param0);
      return this._assetLoader.isLoaded(__s35local1);
    }
    return false;
  };
  return BasicLoaderData;
}(createjs.EventDispatcher);
exports.BasicLoaderData = __s0local0;
