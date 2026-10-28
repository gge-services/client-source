export class AutoRecruitmentEvent extends createjs.Event {
  static ON_PURCHASE_DENY: any;
  static ON_PURCHASE_CONFIRM: any;
  static ON_LOOPED_SLOT_PURCHASED: any;
  static ON_COPY_SUCCESS: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    AutoRecruitmentEvent.ON_PURCHASE_CONFIRM = "onPurchaseConfirm";
    AutoRecruitmentEvent.ON_PURCHASE_DENY = "onPurchaseDeny";
    AutoRecruitmentEvent.ON_LOOPED_SLOT_PURCHASED = "onLoopedSlotPurchased";
    AutoRecruitmentEvent.ON_COPY_SUCCESS = "onCopySuccess";
  }
}
AutoRecruitmentEvent.__initialize_static_members();
