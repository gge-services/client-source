Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  return function CredentialsValidationConstants() {};
}();
__s0local0.WHITESPACE_CHARS = "\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000";
__s0local0.EMAIL_MIN_LENGTH = 6;
__s0local0.EMAIL_MAX_LENGTH = 50;
__s0local0.EMAIL_REGEX = "^[A-Za-z0-9\\-+_]+(\\.[A-Za-z0-9\\-+_]+)*@([A-Za-z0-9\\-]+\\.)+[A-Za-z]{2,}$";
__s0local0.USERNAME_MIN_LENGTH = 3;
__s0local0.USERNAME_MAX_LENGTH = 15;
__s0local0.USERNAME_FORBIDDEN_CHARACTERS = "、〃〈〉《》「」『』【】〔〕〖〗〘〙〚〛〝〞〟〿！＂＃＄％＆＇（）＊＋，／；＜＝＞？＠［＼］＾｀｛｜｝｡｢｣､ﾞﾟ￠￡￢￣￤";
__s0local0.DOUBLE_WHITESPACES_REGEX = ".*[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]{2}.*";
__s0local0.WHITESPACE_PREFIX_REGEX = "^[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
__s0local0.WHITESPACE_SUFFIX_REGEX = "[\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u0085\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+$";
__s0local0.PASSWORD_MIN_LENGTH = 4;
__s0local0.PASSWORD_MAX_LENGTH = 16;
__s0local0.PASSWORD_FORBIDDEN_CHARACTERS = "%&*/()[]{}'\\´`^°§€²³,;µ$\"";
exports.CredentialsValidationConstants = __s0local0;
