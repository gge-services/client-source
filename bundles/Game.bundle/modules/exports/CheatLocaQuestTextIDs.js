Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CheatLocaQuestTextIDs() {}
  CheatLocaQuestTextIDs.checkOldQuestTextIDs = function () {
    __dep_exact_9e901e8e2483a22f_4.ZipUtil.tryUnzip(__dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.appLoader.getLoaderData(__dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_RES_LOADER));
    var __s5local0;
    var __s5local1;
    var __s5local2 = new Map();
    var __s5local3 = __dep_exact_9e901e8e2483a22f_3.DictionaryUtil.getKeys(__s5local2);
    var __s5local4 = __dep_export_CastleModel.CastleModel.questData.questxMLList;
    var __s5local5 = __dep_exact_9e901e8e2483a22f_3.DictionaryUtil.getKeys(__s5local4);
    var __s5local6 = [];
    var __s5local7 = "This is the list of unused QuesttextIDs because this quest doesn't exists (anymore): \n";
    if (__s5local5 != null) {
      for (var __s5local8 = 0, __s5local9 = __s5local5; __s5local8 < __s5local9.length; __s5local8++) {
        var __s5local10 = __s5local9[__s5local8];
        if (__s5local10 !== undefined) {
          (__s5local1 = new __dep_export_CastleQuestVO.CastleQuestVO()).fillFromParamXML(__s5local4.get(__s5local10));
          __s5local6.push(__s5local1);
        }
      }
    }
    if (__s5local3 != null) {
      for (var __s5local11 = 0, __s5local12 = __s5local3; __s5local11 < __s5local12.length; __s5local11++) {
        var __s5local13 = __s5local12[__s5local11];
        if (__s5local13 !== undefined) {
          if ((__s5local0 = __s5local13).indexOf("genquest_") > -1) {
            __s5local0 = __s5local0.replace("genquest_", "");
            if (CheatLocaQuestTextIDs.foundGenericQuestString_IsNotAvailable(__s5local6, __s5local0)) {
              __s5local7 += "\n" + __s5local13;
            }
          } else if (__s5local0.indexOf("questid_") > -1) {
            __s5local0 = __s5local0.substring(__s5local0.indexOf("_") + 1, __s5local0.indexOf("_", __s5local0.indexOf("_") + 1));
            if (__s5local4.get(__dep_exact_f855840627e6e145.int(__s5local0)) == null) {
              __s5local7 += "\n" + __s5local13;
            }
          }
        }
      }
    }
    __s5local7 += "\n\nThis is the list of Quests without texts: \n";
    for (var __s5local14 = 0, __s5local15 = __s5local6; __s5local14 < __s5local15.length; __s5local14++) {
      if (!(__s5local1 = __s5local15[__s5local14]).hidden) {
        var __s5local16 = "";
        if (__s5local1.questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
          __s5local16 = "_hero" + __dep_export_CastleModel.CastleModel.userData.selectedHeroID;
        }
        if (__s5local1.isGenericQuest) {
          __s5local7 += CheatLocaQuestTextIDs.checkTextID("genQuest_" + __s5local1.genericQuestType + "_info_" + __s5local1.genericInfoID);
          if (!__s5local1.isStarterQuest) {
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("genQuest_" + __s5local1.genericQuestType + "_tip_" + __s5local1.genericTipID);
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("genQuest_" + __s5local1.genericQuestType + "_finish_" + __s5local1.genericFinishID);
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("genQuest_" + __s5local1.genericQuestType + "_name_" + __s5local1.genericNameID);
          }
        } else {
          __s5local7 += CheatLocaQuestTextIDs.checkTextID("questID_" + __s5local1.questID + "_info" + __s5local16);
          if (!__s5local1.isStarterQuest) {
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("questID_" + __s5local1.questID + "_tip" + __s5local16);
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("questID_" + __s5local1.questID + "_finish" + __s5local16);
            __s5local7 += CheatLocaQuestTextIDs.checkTextID("questSeriesID_" + __s5local1.questSeriesID + __s5local16);
          }
        }
      }
    }
    __dep_exact_81dacdf05bd32292.System.setClipboard(__s5local7);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties("", "The result is copied into your clipboard. Have a nice Day\n=°.°="));
  };
  CheatLocaQuestTextIDs.checkTextID = function (__s27param0) {
    if (__dep_exact_92d05af59ee2ff30.Localize.hasText(__s27param0)) {
      return "";
    } else {
      return __s27param0 + "\n";
    }
  };
  CheatLocaQuestTextIDs.foundGenericQuestString_IsNotAvailable = function (__s31param0, __s31param1) {
    var __s31local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s31param1.substr(0, __s31param1.indexOf("_"))));
    __s31param1 = __s31param1.substr(__s31param1.indexOf("_") + 1);
    if (__s31param0 != null) {
      for (var __s31local1 = 0, __s31local2 = __s31param0; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined) {
          if (__s31param1.indexOf("name_") > -1 && (__s31param1 = __s31param1.replace("name_", ""), __s31local3.genericQuestType == __s31local0 && __s31local3.genericNameID == __dep_exact_f855840627e6e145.int(__s31param1))) {
            return false;
          }
          if (__s31param1.indexOf("tip_") > -1 && (__s31param1 = __s31param1.replace("tip_", ""), __s31local3.genericQuestType == __s31local0 && __s31local3.genericTipID == __dep_exact_f855840627e6e145.int(__s31param1))) {
            return false;
          }
          if (__s31param1.indexOf("info_") > -1 && (__s31param1 = __s31param1.replace("info_", ""), __s31local3.genericQuestType == __s31local0 && __s31local3.genericInfoID == __dep_exact_f855840627e6e145.int(__s31param1))) {
            return false;
          }
          if (__s31param1.indexOf("finish_") > -1 && (__s31param1 = __s31param1.replace("finish_", ""), __s31local3.genericQuestType == __s31local0 && __s31local3.genericFinishID == __dep_exact_f855840627e6e145.int(__s31param1))) {
            return false;
          }
        }
      }
    }
    return false;
  };
  return CheatLocaQuestTextIDs;
}();
exports.CheatLocaQuestTextIDs = __s0local0;
var __dep_export_CastleQuestVO = require("gge-module:export_CastleQuestVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
