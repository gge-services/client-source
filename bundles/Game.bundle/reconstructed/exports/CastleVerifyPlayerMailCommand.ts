import { BasicVerifyPlayerMailCommand } from "../../../ggs.dll/reconstructed/exports/BasicVerifyPlayerMailCommand";
import { CastleBasicController } from "./CastleBasicController";
import { CastleMailVerificationAnswerEvent } from "./CastleMailVerificationAnswerEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleVerifyPlayerMailCommand extends BasicVerifyPlayerMailCommand {
  constructor(argument0 = false) {
    super(argument0);
  }
  all_ok() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.ALL_OK));
  }
  general_error() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.GENERAL_ERROR));
  }
  email_already_verified() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED));
  }
  email_already_in_use() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE));
  }
  email_blocked() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_BLOCKED));
  }
  email_invalid() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_INVALID));
  }
  email_too_long() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG));
  }
  email_domain_blocked() {
    this.controller.dispatchEvent(new CastleMailVerificationAnswerEvent(CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED));
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
}
classImplementsInterfaces(CastleVerifyPlayerMailCommand, "ISimpleCommand");
