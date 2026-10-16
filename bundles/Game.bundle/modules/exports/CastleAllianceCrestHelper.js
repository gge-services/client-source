Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.ColorFilter;
var __s0local1 = function () {
  function CastleAllianceCrestHelper() {}
  CastleAllianceCrestHelper.setCrestGraphics = function (__s5param0, __s5param1, __s5param2 = null, __s5param3 = null, __s5param4 = true) {
    if (__s5param1 && !__s5param1.isEmpty) {
      __s5param3 ||= __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST;
      var __s5local0 = !__s5param1 || __s5param1.isEmpty ? __dep_export_ClientConstAllianceCrest.ClientConstAllianceCrest.DEFAULT_CREST_GREY : __s5param1;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5param0);
      __s5param0.visible = false;
      CastleAllianceCrestHelper.addCrestToDisp(__s5param0, __s5local0, __s5param2.size, __s5param3, __s5param4);
    }
  };
  CastleAllianceCrestHelper.addCrestToDisp = function (__s8param0, __s8param1, __s8param2, __s8param3, __s8param4 = true) {
    if (__s8param4) {
      var __s8local0 = CastleAllianceCrestHelper.ASSET_FRAME_SIMPLE_PREFIX + __s8param1.frameID + (__s8param3.isSimpleCrest ? CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX : "");
      var __s8local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s8local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s8local0), null, 0, true);
      if (__s8local1.isLoaded) {
        CastleAllianceCrestHelper.createCrest(__s8param0, __s8local1, __s8param1, __s8param2.y, __s8param2.x, __s8param3);
      } else {
        __s8local1.clipLoaded.addOnce(function (__s13param0) {
          CastleAllianceCrestHelper.createCrest(__s8param0, __s13param0, __s8param1, __s8param2.y, __s8param2.x, __s8param3);
        });
      }
    } else {
      CastleAllianceCrestHelper.createCrest(__s8param0, null, __s8param1, __s8param2.y, __s8param2.x, __s8param3);
    }
  };
  CastleAllianceCrestHelper.createCrest = function (__s16param0, __s16param1, __s16param2, __s16param3, __s16param4, __s16param5) {
    var __s16local0 = __s16param1 ? __s16param1.currentshownDisplayObject : null;
    var __s16local1 = CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX + __s16param2.layoutID + (__s16param5.isSimpleCrest ? CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX : "");
    if (!__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s16local1)) {
      __s16local1 = CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX + __s16param2.layoutID;
    }
    var __s16local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s16local1), null, 0, true);
    if (__s16local2.isLoaded) {
      CastleAllianceCrestHelper.changeBackground(__s16local2, __s16param2);
    } else {
      __s16local2.clipLoaded.addOnce(function (__s21param0) {
        CastleAllianceCrestHelper.changeBackground(__s21param0, __s16param2);
      });
    }
    __s16param0.addChild(__s16local2);
    if (__s16local0) {
      __s16param0.addChild(__s16local0);
    }
    if (__s16local2.isLoaded) {
      CastleAllianceCrestHelper.changeSizeAndUpdate(__s16param0, __s16param4, __s16param3);
    } else {
      __s16local2.clipLoaded.addOnce(function (__s26param0) {
        CastleAllianceCrestHelper.changeSizeAndUpdate(__s16param0, __s16param4, __s16param3);
      });
    }
  };
  CastleAllianceCrestHelper.changeBackground = function (__s28param0, __s28param1) {
    var __s28local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    for (var __s28local1 = __s28param1.colors, __s28local2 = __s28param0.currentshownDisplayObject, __s28local3 = 0; __s28local3 < __s28local1.length; __s28local3++) {
      __s28local0.color = __s28local1[__s28local3].color;
      var __s28local4 = __s28local2["c" + (__s28local3 + 1)];
      if (__s28local4) {
        __s28local4.useFilters([new __s0local0(__s28local0.redMultiplier, __s28local0.greenMultiplier, __s28local0.blueMultiplier, __s28local0.alphaMultiplier, __s28local0.redOffset, __s28local0.greenOffset, __s28local0.blueOffset, __s28local0.alphaOffset)]);
        __s28local4.visible = true;
      }
    }
  };
  CastleAllianceCrestHelper.changeSizeAndUpdate = function (__s33param0, __s33param1, __s33param2) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleDownToFit(__s33param0, __s33param1, __s33param2);
    __s33param0.mouseChildren = false;
    __s33param0.visible = true;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s33param0);
  };
  CastleAllianceCrestHelper.colorizeFlags = function (__s35param0, __s35param1) {
    __s35param1 = CastleAllianceCrestHelper.getValidFlagColors(__s35param1);
    for (var __s35local0 = 0; __s35local0 < 3; ++__s35local0) {
      var __s35local1 = __s35param0.getChildByName("c" + (__s35local0 + 1));
      if (__s35local1) {
        var __s35local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
        __s35local2.color = __s35param1[__s35local0];
        __s35local1.useFilters([new __s0local0(__s35local2.redMultiplier, __s35local2.greenMultiplier, __s35local2.blueMultiplier, __s35local2.alphaMultiplier, __s35local2.redOffset, __s35local2.greenOffset, __s35local2.blueOffset, __s35local2.alphaOffset)]);
      }
    }
  };
  CastleAllianceCrestHelper.getValidFlagColors = function (__s40param0) {
    var __s40local0 = new Array(3);
    switch (__s40param0.length) {
      case 1:
        __s40local0[0] = __s40local0[1] = __s40local0[2] = __s40param0[0];
        break;
      case 2:
        __s40local0[0] = __s40param0[0];
        __s40local0[1] = __s40param0[1];
        __s40local0[2] = __s40param0[0];
        break;
      default:
        __s40local0 = __s40param0;
    }
    return __s40local0;
  };
  CastleAllianceCrestHelper.getMyAllianceCrestVO = function () {
    var __s43local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (__s43local0 && !__s43local0.allianceCrestVO.isEmpty) {
      return __s43local0.allianceCrestVO;
    } else {
      return __dep_export_ClientConstAllianceCrest.ClientConstAllianceCrest.DEFAULT_CREST_GREY;
    }
  };
  CastleAllianceCrestHelper.getMyAllianceCrestBackgroundColorAsVector = function () {
    if (CastleAllianceCrestHelper.getMyAllianceCrestVO()) {
      return __dep_export_CastleArrayHelper.CastleArrayHelper.toUintVector(CastleAllianceCrestHelper.getValidFlagColors(CastleAllianceCrestHelper.getMyAllianceCrestVO().colors));
    } else {
      return __dep_export_CastleModel.CastleModel.allianceCrestData.createRandomCrest().colors;
    }
  };
  CastleAllianceCrestHelper.__initialize_static_members = function () {
    CastleAllianceCrestHelper.ASSET_FRAME_SIMPLE_PREFIX = "AllianceCrestFrame_";
    CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX = "_simple";
    CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX = "AllianceCrestLayout_";
  };
  return CastleAllianceCrestHelper;
}();
exports.CastleAllianceCrestHelper = __s0local1;
var __dep_export_ClientConstAllianceCrest = require("gge-module:export_ClientConstAllianceCrest");
var __dep_export_CastleArrayHelper = require("gge-module:export_CastleArrayHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
__s0local1.__initialize_static_members();
