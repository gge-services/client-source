Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CharacterHelper() {}
  CharacterHelper.createCharacterBig = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = -1, __s5param4 = false, __s5param5 = null) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s5param1);
    var __s5local0 = __dep_export_ClientConstCharacter.ClientConstCharacter.getCharacterBigAssetName(__s5param0);
    var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local0), null, 0, __dep_exact_81dacdf05bd32292.getDefinitionByName("QuestGiverBig_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN));
    if (__s5param2 >= 0 && __s5param3 >= 0) {
      var __s5local2 = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(__s5param2, __s5param3);
      __s5local2.clipSizeChanged.add(CharacterHelper.onClipSizeChanged);
      __s5local1.clipSizeComponent = __s5local2;
    }
    CharacterHelper.currentLoadingInfos.push({
      clip: __s5local1,
      destMc: __s5param1,
      charId: __s5param0,
      maxWidth: __s5param2,
      maxHeight: __s5param3,
      mirror: __s5param4,
      onLoadedCallback: __s5param5
    });
    if (__s5local1.isLoaded) {
      CharacterHelper.onLoaded(__s5local1);
    } else {
      __s5local1.clipLoaded.addOnce(CharacterHelper.onLoaded);
    }
    return __s5local1;
  };
  CharacterHelper.onLoaded = function (__s10param0) {
    var __s10local0;
    var __s10local1 = 0;
    for (var __s10local2 = 0; __s10local2 < CharacterHelper.currentLoadingInfos.length; ++__s10local2) {
      if (__s10param0 == CharacterHelper.currentLoadingInfos[__s10local2].clip) {
        __s10local1 = __s10local2;
        __s10local0 = CharacterHelper.currentLoadingInfos[__s10local2];
        break;
      }
    }
    if (__s10local0.destMc) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s10local0.destMc);
    }
    if (__s10local0.destMc) {
      __s10local0.destMc.addChild(__s10param0);
    }
    if (__s10local0.mirror) {
      __s10param0.scaleY *= -1;
      __s10param0.rotation += 180;
    }
    CharacterHelper.currentLoadingInfos.splice(__s10local1, 1);
    if (__s10local0.onLoadedCallback) {
      __s10local0.onLoadedCallback(__s10param0);
    }
  };
  CharacterHelper.onClipSizeChanged = function (__s19param0) {
    var __s19local0 = __s19param0.asDisplayObject();
    if (__s19param0.clipSizeComponent) {
      __s19local0.x = __s19param0.clipSizeComponent.offsetX;
      __s19local0.y = __s19param0.clipSizeComponent.offsetY;
    }
  };
  CharacterHelper.__initialize_static_members = function () {
    CharacterHelper.currentLoadingInfos = [];
  };
  return CharacterHelper;
}();
exports.CharacterHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__s0local0.__initialize_static_members();
