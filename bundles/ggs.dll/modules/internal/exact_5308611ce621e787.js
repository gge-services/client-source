var __s0local0 = exports;
__s0local0.length = function utf8_length(__s1param0) {
  var __s1local0 = 0;
  var __s1local1 = 0;
  for (var __s1local2 = 0; __s1local2 < __s1param0.length; ++__s1local2) {
    if ((__s1local1 = __s1param0.charCodeAt(__s1local2)) < 128) {
      __s1local0 += 1;
    } else if (__s1local1 < 2048) {
      __s1local0 += 2;
    } else if ((__s1local1 & 64512) == 55296 && (__s1param0.charCodeAt(__s1local2 + 1) & 64512) == 56320) {
      ++__s1local2;
      __s1local0 += 4;
    } else {
      __s1local0 += 3;
    }
  }
  return __s1local0;
};
__s0local0.read = function utf8_read(__s9param0, __s9param1, __s9param2) {
  if (__s9param2 - __s9param1 < 1) {
    return "";
  }
  for (var __s9local0, __s9local1 = null, __s9local2 = [], __s9local3 = 0; __s9param1 < __s9param2;) {
    if ((__s9local0 = __s9param0[__s9param1++]) < 128) {
      __s9local2[__s9local3++] = __s9local0;
    } else if (__s9local0 > 191 && __s9local0 < 224) {
      __s9local2[__s9local3++] = (__s9local0 & 31) << 6 | __s9param0[__s9param1++] & 63;
    } else if (__s9local0 > 239 && __s9local0 < 365) {
      __s9local0 = ((__s9local0 & 7) << 18 | (__s9param0[__s9param1++] & 63) << 12 | (__s9param0[__s9param1++] & 63) << 6 | __s9param0[__s9param1++] & 63) - 65536;
      __s9local2[__s9local3++] = 55296 + (__s9local0 >> 10);
      __s9local2[__s9local3++] = 56320 + (__s9local0 & 1023);
    } else {
      __s9local2[__s9local3++] = (__s9local0 & 15) << 12 | (__s9param0[__s9param1++] & 63) << 6 | __s9param0[__s9param1++] & 63;
    }
    if (__s9local3 > 8191) {
      (__s9local1 ||= []).push(String.fromCharCode.apply(String, __s9local2));
      __s9local3 = 0;
    }
  }
  if (__s9local1) {
    if (__s9local3) {
      __s9local1.push(String.fromCharCode.apply(String, __s9local2.slice(0, __s9local3)));
    }
    return __s9local1.join("");
  } else {
    return String.fromCharCode.apply(String, __s9local2.slice(0, __s9local3));
  }
};
__s0local0.write = function utf8_write(__s22param0, __s22param1, __s22param2) {
  var __s22local0;
  var __s22local1;
  var __s22local2 = __s22param2;
  for (var __s22local3 = 0; __s22local3 < __s22param0.length; ++__s22local3) {
    if ((__s22local0 = __s22param0.charCodeAt(__s22local3)) < 128) {
      __s22param1[__s22param2++] = __s22local0;
    } else if (__s22local0 < 2048) {
      __s22param1[__s22param2++] = __s22local0 >> 6 | 192;
      __s22param1[__s22param2++] = __s22local0 & 63 | 128;
    } else if ((__s22local0 & 64512) == 55296 && ((__s22local1 = __s22param0.charCodeAt(__s22local3 + 1)) & 64512) == 56320) {
      __s22local0 = 65536 + ((__s22local0 & 1023) << 10) + (__s22local1 & 1023);
      ++__s22local3;
      __s22param1[__s22param2++] = __s22local0 >> 18 | 240;
      __s22param1[__s22param2++] = __s22local0 >> 12 & 63 | 128;
      __s22param1[__s22param2++] = __s22local0 >> 6 & 63 | 128;
      __s22param1[__s22param2++] = __s22local0 & 63 | 128;
    } else {
      __s22param1[__s22param2++] = __s22local0 >> 12 | 224;
      __s22param1[__s22param2++] = __s22local0 >> 6 & 63 | 128;
      __s22param1[__s22param2++] = __s22local0 & 63 | 128;
    }
  }
  return __s22param2 - __s22local2;
};
