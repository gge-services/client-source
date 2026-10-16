Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = createjs.TextField;
var __s0local1 = createjs.TextFormat;
var __s0local2 = createjs.Shape;
var __s0local3 = function () {
  function CheatHOLSkillsIdsDisplay() {
    this.enableSkillIdsDisplay = false;
  }
  Object.defineProperty(CheatHOLSkillsIdsDisplay, "instance", {
    get: function () {
      if (CheatHOLSkillsIdsDisplay._instance == null) {
        CheatHOLSkillsIdsDisplay._instance = new CheatHOLSkillsIdsDisplay();
      }
      return CheatHOLSkillsIdsDisplay._instance;
    },
    enumerable: true,
    configurable: true
  });
  CheatHOLSkillsIdsDisplay.prototype.cheatShowSkillIdAndSkillGroupID = function (__s8param0, __s8param1) {
    if (this.enableSkillIdsDisplay && __s8param0 && __s8param1) {
      if (__s8param0.cheatText) {
        __s8param0.removeChild(__s8param0.cheatText);
      }
      var __s8local0 = new __s0local0();
      var __s8local1 = new __s0local1("Arial", 11);
      __s8local0.setTextFormat(__s8local1);
      __s8local0.text = "id: " + __s8param1.id + " groupID: " + __s8param1.skillGroupID;
      __s8local0.textColor = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
      __s8local0.x -= 52;
      __s8local0.y -= 50;
      var __s8local2 = new __s0local2();
      __s8local2.graphics.beginFill("#000000").drawRect(-52, -50, 100, 20);
      __s8param0.cheatText = __s8local0;
      __s8param0.addChild(__s8local2);
      __s8param0.addChild(__s8local0);
    }
  };
  return CheatHOLSkillsIdsDisplay;
}();
exports.CheatHOLSkillsIdsDisplay = __s0local3;
