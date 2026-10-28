import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class ClientConstTime {
  static SIX_HOURS_2_MILLISEC: any;
  static SEC_2_MILLISEC: any;
  static SEC_2_HOURES: any;
  static SECONDS_PER_YEAR: any;
  static SECONDS_PER_FOUR_WEEKS: any;
  static SECONDS_PER_DAY: any;
  static MINUTES_2_SEC: any;
  static MINUTES_2_MILLISEC: any;
  static MILLISEC_2_SEC: any;
  static HOURES_2_SEC: any;
  static HOURES_2_MILLISEC: any;
  static DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS: any;
  static DAYS_2_MILLISEC: any;
  static isOneDay(argument0) {
    return argument0 / ClientConstTime.SECONDS_PER_DAY == 1;
  }
  static isOneHour(argument0) {
    return argument0 * ClientConstTime.SEC_2_HOURES == 1;
  }
  static isOneMinute(argument0) {
    return argument0 / ClientConstTime.SEC_2_MILLISEC == 1;
  }
  static __initialize_static_members() {
    ClientConstTime.MILLISEC_2_SEC = 0.001;
    ClientConstTime.SEC_2_HOURES = 1 / 3600;
    ClientConstTime.SEC_2_MILLISEC = 1000;
    ClientConstTime.SIX_HOURS_2_MILLISEC = 21600000;
    ClientConstTime.DAYS_2_MILLISEC = 86400000;
    ClientConstTime.HOURES_2_SEC = 3600;
    ClientConstTime.MINUTES_2_MILLISEC = ClientConstTime.SEC_2_MILLISEC * 60;
    ClientConstTime.HOURES_2_MILLISEC = ClientConstTime.MINUTES_2_MILLISEC * 60;
    ClientConstTime.MINUTES_2_SEC = 60;
    ClientConstTime.SECONDS_PER_DAY = ClientConstTime.HOURES_2_SEC * 24;
    ClientConstTime.SECONDS_PER_YEAR = ClientConstTime.SECONDS_PER_DAY * 365;
    ClientConstTime.SECONDS_PER_FOUR_WEEKS = int(ClientConstTime.SECONDS_PER_DAY * 28);
    ClientConstTime.DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS = 0.5;
  }
}
ClientConstTime.__initialize_static_members();
