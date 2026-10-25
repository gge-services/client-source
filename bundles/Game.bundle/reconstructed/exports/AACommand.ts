import { AdvisorActivationEvent } from "./AdvisorActivationEvent";
import { AdvisorAttackHelper } from "./AdvisorAttackHelper";
import { AttackAdvisorConst } from "../../../ggs.dll/reconstructed/exports/AttackAdvisorConst";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SubscriptionEvent } from "./SubscriptionEvent";
export class AACommand extends CastleCommand {
  constructor(...args) {
    super(...args);
    this._isWaitingForSubscriptionRefresh = false;
  }
  get cmdId() {
    return ClientConstSF.S2C_ACTIVATE_ATTACK_ADVISOR_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = parsedResponse[CommKeys.ADVISOR_ATTACK_TYPE] ? parsedResponse[CommKeys.ADVISOR_ATTACK_TYPE] : AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
        var __s9local2 = AdvisorAttackHelper.getEventVOByAdvisorType(__s9local1);
        if (__s9local2) {
          __s9local2.isAdvisorActive = true;
          CastleBasicController.getInstance().dispatchEvent(new AdvisorActivationEvent(AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, __s9local1));
        } else if (__s9local1 == AttackAdvisorConst.ADVISOR_TYPE_BARON) {
          if (!this._isWaitingForSubscriptionRefresh) {
            this._isWaitingForSubscriptionRefresh = true;
            CastleBasicController.getInstance().addEventListener(SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionRefreshed));
          }
          CastleModel.subscriptionData.requestSIE();
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  onSubscriptionRefreshed(__s15param0) {
    this._isWaitingForSubscriptionRefresh = false;
    CastleBasicController.getInstance().removeEventListener(SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionRefreshed));
    CastleBasicController.getInstance().dispatchEvent(new AdvisorActivationEvent(AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, AttackAdvisorConst.ADVISOR_TYPE_BARON));
  }
}
