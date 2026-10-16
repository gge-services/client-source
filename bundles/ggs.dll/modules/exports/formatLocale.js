exports.formatLocale = function (__s1param0) {
  if (typeof __s1param0 != "string") {
    return __s1param0;
  } else {
    return __s1param0.split("-").slice(0, 2).map(function (__s5param0, __s5param1) {
      if (__s5param1 !== 0 && __s5param0.length === 2) {
        return __s5param0.toUpperCase();
      } else {
        return __s5param0;
      }
    }).join("-");
  }
};
