Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = function (__s1param0) {
  function CMTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CMTCommand, __s1param0);
  Object.defineProperty(CMTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_COMA_TEASER;
    },
    enumerable: true,
    configurable: true
  });
  CMTCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == 0) {
      for (var __s7local0 = 0, __s7local1 = JSON.parse(__s7param1[1]); __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        var __s7local3 = __s7local2.type;
        var __s7local4 = __s7local2.tid;
        if (CMTCommand.TEASER_TYPE_TEXT_ID[__s7local3] != null) {
          var __s7local5 = __dep_opaque_c83528567256175cfb346d7d.Localize.text(CMTCommand.TEASER_TYPE_TEXT_ID[__s7local3], [__dep_class_BasicModel.BasicModel.userData.userName]);
          var __s7local6 = __dep_opaque_c83528567256175cfb346d7d.Localize.text("cm_teaser" + __s7local4 + "_copy", [__dep_opaque_c83528567256175cfb346d7d.Localize.text("gametitle")]);
          __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_SHOW_COMA_TEASER, [__s7local3, __s7local4, __s7local5, __s7local6]);
        } else {
          __dep_exact_ba3768902da9162c.warn("CMTCommand - unknown teaser type: " + __s7local3);
        }
      }
    }
    return __s1param0.prototype.executeCommand.call(this, __s7param0, __s7param1);
  };
  CMTCommand.TEASERTYPE_EVENT = 0;
  CMTCommand.TEASERTYPE_INFO = 1;
  CMTCommand.TEASERTYPE_WARNING = 2;
  CMTCommand.TEASER_TYPE_TEXT_ID = ["cm_teaserevent_title", "cm_teaserinfo_title", "cm_teaserwarning_title"];
  return CMTCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.CMTCommand = __s0local0;
