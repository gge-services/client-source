Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Event;
var __s0local2 = __dep_exact_c549e43d1112dfff.getLogger("StartScreenAdBannerLoader");
var __s0local3 = function () {
  function StartScreenAdBannerLoader(__s3param0) {
    this.URL = "https://files-ak.goodgamestudios.com/loader/castle/eyecatcher-assets/";
    this._disp = __s3param0;
    this.loadQueue = window.AssetLoader || new createjs.LoadQueue();
  }
  StartScreenAdBannerLoader.prototype.startLoad = function () {
    var __s5local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isTest || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isLocal;
    this.json_url = this.URL + (__s5local0 ? "test.json" : "live.json");
    this.json_loader = this.loadQueue.loadFile(this.json_url);
    this.json_loader.addEventListener(__s0local1.COMPLETE, this.bindFunction(this.onJsonFileComplete));
    this.json_loader.addEventListener(__s0local1.ERROR, this.bindFunction(this.onJsonError));
  };
  StartScreenAdBannerLoader.prototype.onJsonError = function (__s7param0) {
    this.removeJsonLoaderCallbacks();
    __s0local2.error("Error loading banner json from: " + this.json_url);
  };
  StartScreenAdBannerLoader.prototype.removeJsonLoaderCallbacks = function () {
    this.json_loader.removeEventListener(__s0local1.COMPLETE, this.bindFunction(this.onJsonFileComplete));
    this.json_loader.removeEventListener(__s0local1.ERROR, this.bindFunction(this.onJsonError));
  };
  StartScreenAdBannerLoader.prototype.onJsonFileComplete = function (__s11param0) {
    this.removeJsonLoaderCallbacks();
    var __s11local0 = this.json_loader.getResult();
    if (__s11local0 && __s11local0.current) {
      this.updateBanner(__s11local0.current);
    }
  };
  StartScreenAdBannerLoader.prototype.updateBanner = function (__s14param0) {
    if (this._furysBladeBanner && this._furysBladeBanner.parent) {
      this._furysBladeBanner.parent.removeChild(this._furysBladeBanner);
    }
    var __s14local0 = __dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsCountryCode + ".png";
    this.bitmapUrl = this.URL + __s14param0 + "/" + __s14local0;
    this.bitmapLoader = this.loadQueue.loadFile(this.bitmapUrl);
    this.bitmapLoader.addEventListener(__s0local1.COMPLETE, this.bindFunction(this.completeHandler));
    this.bitmapLoader.addEventListener(__s0local1.ERROR, this.bindFunction(this.bitmapErrorCallback));
  };
  StartScreenAdBannerLoader.prototype.bitmapErrorCallback = function () {
    this.clearListeners();
    __s0local2.error("Error loading banner image from: " + this.bitmapUrl);
  };
  StartScreenAdBannerLoader.prototype.completeHandler = function (__s19param0) {
    var __s19local0 = this.bitmapLoader.getResult();
    if (!__s19local0 || __s19local0.naturalWidth === 0 || __s19local0.naturalHeight === 0) {
      __s0local2.error("Banner image loaded but has invalid dimensions (size 0)");
      this.clearListeners();
      return;
    }
    this._furysBladeBanner = new __s0local0(__s19local0);
    this._furysBladeBanner.x = -325 - this._furysBladeBanner.width / 2;
    this._furysBladeBanner.y = -170;
    this._furysBladeBanner.smoothing = true;
    this._disp.addChild(this._furysBladeBanner);
    this.clearListeners();
  };
  StartScreenAdBannerLoader.prototype.addListeners = function () {};
  StartScreenAdBannerLoader.prototype.clearListeners = function () {
    this.bitmapLoader.removeEventListener(__s0local1.COMPLETE, this.bindFunction(this.completeHandler));
    this.bitmapLoader.removeEventListener(__s0local1.ERROR, this.bindFunction(this.bitmapErrorCallback));
  };
  return StartScreenAdBannerLoader;
}();
exports.StartScreenAdBannerLoader = __s0local3;
