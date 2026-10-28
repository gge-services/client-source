export class TimeLimitedCampaignUpdateEvent extends createjs.Event {
  static CAMPAIGN_UPDATED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED = "CAMPAIGN_UPDATED";
  }
}
TimeLimitedCampaignUpdateEvent.__initialize_static_members();
