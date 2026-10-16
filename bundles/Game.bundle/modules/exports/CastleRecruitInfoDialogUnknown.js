Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __s0local0 = function (__s1param0) {
  function CastleRecruitInfoDialogUnknown(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitInfoDialogUnknown, __s1param0);
  CastleRecruitInfoDialogUnknown.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    if (__s5param0[0].wodId == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_UNKNOWNSOLDIER_WOD) {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("Unknown_short_info_soldier"));
    } else if (__s5param0[0].wodId == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_UNKNOWNTOOLS_WOD) {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("Unknown_short_info_tool"));
    } else {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogUnknown.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogUnknown;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleRecruitInfoDialogUnknown = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
