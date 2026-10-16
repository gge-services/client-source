Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function () {
  function AdvisorAttackOverviewVO() {}
  AdvisorAttackOverviewVO.prototype.parseServerData = function (__s5param0) {
    this._gained = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.G);
    this._lost = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.L);
    this._lostUnits = __s5param0.LU;
    this._lostTools = __s5param0.LT;
    this._wins = __s5param0.W;
    this._defeats = __s5param0.D;
    this._stopped = __s5param0.P;
    this._advisorType = __s5param0[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_TYPE];
    this._commanders = __s5param0[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_OVERVIEW_COMMANDERS];
    this._gallantryPoints = __s5param0.GP ? __s5param0.GP : 0;
    this.restoreLootDefaults();
  };
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "gained", {
    get: function () {
      return this._gained;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lostUnits", {
    get: function () {
      return this._lostUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "lostTools", {
    get: function () {
      return this._lostTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "wins", {
    get: function () {
      return this._wins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "defeats", {
    get: function () {
      return this._defeats;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "stopped", {
    get: function () {
      return this._stopped;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewVO.prototype, "gallantryPoints", {
    get: function () {
      return this._gallantryPoints;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewVO.prototype.restoreLootDefaults = function () {
    switch (this.advisorType) {
      case __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        this._gained.addItem(new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET, 0), true);
        this._gained.addItem(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(0), true);
    }
  };
  return AdvisorAttackOverviewVO;
}();
exports.AdvisorAttackOverviewVO = __s0local0;
