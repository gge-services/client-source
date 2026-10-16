Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function QuestMapTooltipHelper() {}
  QuestMapTooltipHelper.hideToolTip = function () {
    if (QuestMapTooltipHelper.disp) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(QuestMapTooltipHelper._questMapTooltip.disp);
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(QuestMapTooltipHelper._questMapTooltip.disp, QuestMapTooltipHelper.FADE_DURATION, {
        autoAlpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
  };
  QuestMapTooltipHelper.showToolTip = function (__s8param0, __s8param1) {
    QuestMapTooltipHelper._questMapTooltip.show(__s8param1);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().addInteractiveToolTip(QuestMapTooltipHelper.disp);
    var __s8local0 = __s8param0.localToGlobal(new __s0local0(0, 0));
    QuestMapTooltipHelper._questMapTooltip.disp.x = __s8local0.x;
    QuestMapTooltipHelper._questMapTooltip.disp.y = Math.max(QuestMapTooltipHelper._questMapTooltip.disp.height, __s8local0.y) - __s8param0.height / 2;
    if (QuestMapTooltipHelper._questMapTooltip.disp.y - QuestMapTooltipHelper._questMapTooltip.disp.height < 0) {
      QuestMapTooltipHelper._questMapTooltip.disp.y = __s8local0.y + __s8param0.height / 2 + QuestMapTooltipHelper._questMapTooltip.disp.height;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_down.visible = false;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_up.visible = true;
    } else {
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_down.visible = true;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_up.visible = false;
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(QuestMapTooltipHelper._questMapTooltip.disp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(QuestMapTooltipHelper._questMapTooltip.disp, QuestMapTooltipHelper.FADE_DURATION, {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
  };
  Object.defineProperty(QuestMapTooltipHelper, "disp", {
    get: function () {
      return QuestMapTooltipHelper._questMapTooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  QuestMapTooltipHelper.__initialize_static_members = function () {
    QuestMapTooltipHelper.FADE_DURATION = 0.1;
    QuestMapTooltipHelper._questMapTooltip = new __dep_export_QuestMapTooltip.QuestMapTooltip();
  };
  return QuestMapTooltipHelper;
}();
exports.QuestMapTooltipHelper = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_QuestMapTooltip = require("gge-module:export_QuestMapTooltip");
__s0local1.__initialize_static_members();
