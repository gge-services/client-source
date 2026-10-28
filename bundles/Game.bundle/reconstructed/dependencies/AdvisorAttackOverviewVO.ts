import { AttackAdvisorConst } from "../../../ggs.dll/reconstructed/exports/AttackAdvisorConst";
import { ClientConstCurrency } from "./ClientConstCurrency";
import { CollectableItemC1VO } from "./CollectableItemC1VO";
import { CollectableItemGenericCurrencyVO } from "./CollectableItemGenericCurrencyVO";
import { CollectableManager } from "./CollectableManager";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
export class AdvisorAttackOverviewVO {
  _advisorType: any;
  _commanders: any;
  _defeats: any;
  _gained: any;
  _gallantryPoints: any;
  _lost: any;
  _lostTools: any;
  _lostUnits: any;
  _stopped: any;
  _wins: any;

  parseServerData(argument0) {
    this._gained = CollectableManager.parser.s2cParamList.createList(argument0.G);
    this._lost = CollectableManager.parser.s2cParamList.createList(argument0.L);
    this._lostUnits = argument0.LU;
    this._lostTools = argument0.LT;
    this._wins = argument0.W;
    this._defeats = argument0.D;
    this._stopped = argument0.P;
    this._advisorType = argument0[CommKeys.ADVISOR_ATTACK_TYPE];
    this._commanders = argument0[CommKeys.ADVISOR_ATTACK_OVERVIEW_COMMANDERS];
    this._gallantryPoints = argument0.GP ? argument0.GP : 0;
    this.restoreLootDefaults();
  }
  get gained() {
    return this._gained;
  }
  get lost() {
    return this._lost;
  }
  get lostUnits() {
    return this._lostUnits;
  }
  get lostTools() {
    return this._lostTools;
  }
  get wins() {
    return this._wins;
  }
  get defeats() {
    return this._defeats;
  }
  get stopped() {
    return this._stopped;
  }
  get advisorType() {
    return this._advisorType;
  }
  get commanders() {
    return this._commanders;
  }
  get gallantryPoints() {
    return this._gallantryPoints;
  }
  restoreLootDefaults() {
    switch (this.advisorType) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        this._gained.addItem(new CollectableItemGenericCurrencyVO(ClientConstCurrency.ID_KHAN_TABLET, 0), true);
        this._gained.addItem(new CollectableItemC1VO(0), true);
    }
  }
}
