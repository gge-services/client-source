Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CheatUnitNameList() {}
  CheatUnitNameList.getUnitNameList = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    var __s5local1 = "";
    if (__s5local0 != null) {
      for (var __s5local2 = 0, __s5local3 = Array.from(__s5local0.values()); __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          __s5local1 += __dep_exact_92d05af59ee2ff30.Localize.text(__s5local4.getNameString()) + " (wodID: " + __s5local4.wodId + ")\n";
        }
      }
    }
    __dep_exact_81dacdf05bd32292.System.setClipboard(__s5local1);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", "The result is copied into your clipboard. Have a nice Day\n=°.°="));
  };
  return CheatUnitNameList;
}();
exports.CheatUnitNameList = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
