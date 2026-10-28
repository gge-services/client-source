export class CastleVoucherEvent extends createjs.Event {
  constructor(argument0, argument1 = false, argument2 = false) {
    super(argument0, argument1, argument2);
  }
  static VOUCHER_CODE_SUCCESS = "voucher_code_success";
  static VOUCHER_CODE_FAILED = "voucher_code_failed";
}
