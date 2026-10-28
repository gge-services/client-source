export class CastleStringHelper {
  static parseToStringOrEmpty(argument0) {
    var __s5local0 = "";
    if (argument0 != null) {
      __s5local0 = argument0.toString();
    }
    return __s5local0;
  }
  static isNullOrEmpty(argument0) {
    return argument0 == null || argument0 == "";
  }
}
