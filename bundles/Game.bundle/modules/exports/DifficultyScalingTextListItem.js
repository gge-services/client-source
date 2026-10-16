Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingTextListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("EventDifficultyTextItem"))(), __s3param1) || this;
    __s3local0.eventID = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingTextListItem, __s1param0);
  DifficultyScalingTextListItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_chooseDifficulty_desc", ["event_title_" + this.eventID]));
  };
  Object.defineProperty(DifficultyScalingTextListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingTextListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingTextListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.DifficultyScalingTextListItem = __s0local0;
