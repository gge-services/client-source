Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function ColossusEventDelegator(__s3param0) {
    this._eventID = 0;
    this._eventID = __s3param0;
  }
  ColossusEventDelegator.prototype.showLoaded = function (__s5param0) {
    var __s5local0;
    var __s5local1;
    switch (this._eventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLOSSUS:
        __s5local0 = "dialog_eventColossus_copytext";
        __s5local1 = "CastleColossusChar";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_HORSE_COLOSSUS:
        __s5local0 = "dialog_eventColossusrider_copytext";
        __s5local1 = "CastleColossusRiderChar";
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COIN_COLOSSUS:
        __s5local0 = "dialog_eventCoinColossus_copytext";
        __s5local1 = "CastleColossusCoinChar";
    }
    this.textFieldManager.registerTextField(__s5param0.txt_copy_colossus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local0));
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s5param0.placeHolder);
    var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local1), null, 0, false);
    __s5param0.placeHolder.addChild(__s5local2.asDisplayObject());
  };
  Object.defineProperty(ColossusEventDelegator.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ColossusEventDelegator;
}();
exports.ColossusEventDelegator = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventDelegator");
