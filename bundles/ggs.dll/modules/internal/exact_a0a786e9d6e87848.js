function factory(__s1param0) {
  if (typeof Float32Array != "undefined") {
    (function () {
      var __s4local0 = new Float32Array([-0]);
      var __s4local1 = new Uint8Array(__s4local0.buffer);
      var __s4local2 = __s4local1[3] === 128;
      function writeFloat_f32_cpy(__s6param0, __s6param1, __s6param2) {
        __s4local0[0] = __s6param0;
        __s6param1[__s6param2] = __s4local1[0];
        __s6param1[__s6param2 + 1] = __s4local1[1];
        __s6param1[__s6param2 + 2] = __s4local1[2];
        __s6param1[__s6param2 + 3] = __s4local1[3];
      }
      function writeFloat_f32_rev(__s8param0, __s8param1, __s8param2) {
        __s4local0[0] = __s8param0;
        __s8param1[__s8param2] = __s4local1[3];
        __s8param1[__s8param2 + 1] = __s4local1[2];
        __s8param1[__s8param2 + 2] = __s4local1[1];
        __s8param1[__s8param2 + 3] = __s4local1[0];
      }
      function readFloat_f32_cpy(__s10param0, __s10param1) {
        __s4local1[0] = __s10param0[__s10param1];
        __s4local1[1] = __s10param0[__s10param1 + 1];
        __s4local1[2] = __s10param0[__s10param1 + 2];
        __s4local1[3] = __s10param0[__s10param1 + 3];
        return __s4local0[0];
      }
      function readFloat_f32_rev(__s12param0, __s12param1) {
        __s4local1[3] = __s12param0[__s12param1];
        __s4local1[2] = __s12param0[__s12param1 + 1];
        __s4local1[1] = __s12param0[__s12param1 + 2];
        __s4local1[0] = __s12param0[__s12param1 + 3];
        return __s4local0[0];
      }
      __s1param0.writeFloatLE = __s4local2 ? writeFloat_f32_cpy : writeFloat_f32_rev;
      __s1param0.writeFloatBE = __s4local2 ? writeFloat_f32_rev : writeFloat_f32_cpy;
      __s1param0.readFloatLE = __s4local2 ? readFloat_f32_cpy : readFloat_f32_rev;
      __s1param0.readFloatBE = __s4local2 ? readFloat_f32_rev : readFloat_f32_cpy;
    })();
  } else {
    (function () {
      function writeFloat_ieee754(__s17param0, __s17param1, __s17param2, __s17param3) {
        var __s17local0 = __s17param1 < 0 ? 1 : 0;
        if (__s17local0) {
          __s17param1 = -__s17param1;
        }
        if (__s17param1 === 0) {
          __s17param0(1 / __s17param1 > 0 ? 0 : 2147483648, __s17param2, __s17param3);
        } else if (isNaN(__s17param1)) {
          __s17param0(2143289344, __s17param2, __s17param3);
        } else if (__s17param1 > 3.4028234663852886e+38) {
          __s17param0((__s17local0 << 31 | 2139095040) >>> 0, __s17param2, __s17param3);
        } else if (__s17param1 < 1.1754943508222875e-38) {
          __s17param0((__s17local0 << 31 | Math.round(__s17param1 / 1.401298464324817e-45)) >>> 0, __s17param2, __s17param3);
        } else {
          var __s17local1 = Math.floor(Math.log(__s17param1) / Math.LN2);
          __s17param0((__s17local0 << 31 | __s17local1 + 127 << 23 | Math.round(__s17param1 * Math.pow(2, -__s17local1) * 8388608) & 8388607) >>> 0, __s17param2, __s17param3);
        }
      }
      function readFloat_ieee754(__s25param0, __s25param1, __s25param2) {
        var __s25local0 = __s25param0(__s25param1, __s25param2);
        var __s25local1 = (__s25local0 >> 31) * 2 + 1;
        var __s25local2 = __s25local0 >>> 23 & 255;
        var __s25local3 = __s25local0 & 8388607;
        if (__s25local2 === 255) {
          if (__s25local3) {
            return NaN;
          } else {
            return __s25local1 * Infinity;
          }
        } else if (__s25local2 === 0) {
          return __s25local1 * 1.401298464324817e-45 * __s25local3;
        } else {
          return __s25local1 * Math.pow(2, __s25local2 - 150) * (__s25local3 + 8388608);
        }
      }
      __s1param0.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
      __s1param0.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
      __s1param0.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
      __s1param0.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
  }
  if (typeof Float64Array != "undefined") {
    (function () {
      var __s33local0 = new Float64Array([-0]);
      var __s33local1 = new Uint8Array(__s33local0.buffer);
      var __s33local2 = __s33local1[7] === 128;
      function writeDouble_f64_cpy(__s35param0, __s35param1, __s35param2) {
        __s33local0[0] = __s35param0;
        __s35param1[__s35param2] = __s33local1[0];
        __s35param1[__s35param2 + 1] = __s33local1[1];
        __s35param1[__s35param2 + 2] = __s33local1[2];
        __s35param1[__s35param2 + 3] = __s33local1[3];
        __s35param1[__s35param2 + 4] = __s33local1[4];
        __s35param1[__s35param2 + 5] = __s33local1[5];
        __s35param1[__s35param2 + 6] = __s33local1[6];
        __s35param1[__s35param2 + 7] = __s33local1[7];
      }
      function writeDouble_f64_rev(__s37param0, __s37param1, __s37param2) {
        __s33local0[0] = __s37param0;
        __s37param1[__s37param2] = __s33local1[7];
        __s37param1[__s37param2 + 1] = __s33local1[6];
        __s37param1[__s37param2 + 2] = __s33local1[5];
        __s37param1[__s37param2 + 3] = __s33local1[4];
        __s37param1[__s37param2 + 4] = __s33local1[3];
        __s37param1[__s37param2 + 5] = __s33local1[2];
        __s37param1[__s37param2 + 6] = __s33local1[1];
        __s37param1[__s37param2 + 7] = __s33local1[0];
      }
      function readDouble_f64_cpy(__s39param0, __s39param1) {
        __s33local1[0] = __s39param0[__s39param1];
        __s33local1[1] = __s39param0[__s39param1 + 1];
        __s33local1[2] = __s39param0[__s39param1 + 2];
        __s33local1[3] = __s39param0[__s39param1 + 3];
        __s33local1[4] = __s39param0[__s39param1 + 4];
        __s33local1[5] = __s39param0[__s39param1 + 5];
        __s33local1[6] = __s39param0[__s39param1 + 6];
        __s33local1[7] = __s39param0[__s39param1 + 7];
        return __s33local0[0];
      }
      function readDouble_f64_rev(__s41param0, __s41param1) {
        __s33local1[7] = __s41param0[__s41param1];
        __s33local1[6] = __s41param0[__s41param1 + 1];
        __s33local1[5] = __s41param0[__s41param1 + 2];
        __s33local1[4] = __s41param0[__s41param1 + 3];
        __s33local1[3] = __s41param0[__s41param1 + 4];
        __s33local1[2] = __s41param0[__s41param1 + 5];
        __s33local1[1] = __s41param0[__s41param1 + 6];
        __s33local1[0] = __s41param0[__s41param1 + 7];
        return __s33local0[0];
      }
      __s1param0.writeDoubleLE = __s33local2 ? writeDouble_f64_cpy : writeDouble_f64_rev;
      __s1param0.writeDoubleBE = __s33local2 ? writeDouble_f64_rev : writeDouble_f64_cpy;
      __s1param0.readDoubleLE = __s33local2 ? readDouble_f64_cpy : readDouble_f64_rev;
      __s1param0.readDoubleBE = __s33local2 ? readDouble_f64_rev : readDouble_f64_cpy;
    })();
  } else {
    (function () {
      function writeDouble_ieee754(__s46param0, __s46param1, __s46param2, __s46param3, __s46param4, __s46param5) {
        var __s46local0 = __s46param3 < 0 ? 1 : 0;
        if (__s46local0) {
          __s46param3 = -__s46param3;
        }
        if (__s46param3 === 0) {
          __s46param0(0, __s46param4, __s46param5 + __s46param1);
          __s46param0(1 / __s46param3 > 0 ? 0 : 2147483648, __s46param4, __s46param5 + __s46param2);
        } else if (isNaN(__s46param3)) {
          __s46param0(0, __s46param4, __s46param5 + __s46param1);
          __s46param0(2146959360, __s46param4, __s46param5 + __s46param2);
        } else if (__s46param3 > 1.7976931348623157e+308) {
          __s46param0(0, __s46param4, __s46param5 + __s46param1);
          __s46param0((__s46local0 << 31 | 2146435072) >>> 0, __s46param4, __s46param5 + __s46param2);
        } else {
          var __s46local1;
          if (__s46param3 < 2.2250738585072014e-308) {
            __s46param0((__s46local1 = __s46param3 / 5e-324) >>> 0, __s46param4, __s46param5 + __s46param1);
            __s46param0((__s46local0 << 31 | __s46local1 / 4294967296) >>> 0, __s46param4, __s46param5 + __s46param2);
          } else {
            var __s46local2 = Math.floor(Math.log(__s46param3) / Math.LN2);
            if (__s46local2 === 1024) {
              __s46local2 = 1023;
            }
            __s46param0((__s46local1 = __s46param3 * Math.pow(2, -__s46local2)) * 4503599627370496 >>> 0, __s46param4, __s46param5 + __s46param1);
            __s46param0((__s46local0 << 31 | __s46local2 + 1023 << 20 | __s46local1 * 1048576 & 1048575) >>> 0, __s46param4, __s46param5 + __s46param2);
          }
        }
      }
      function readDouble_ieee754(__s56param0, __s56param1, __s56param2, __s56param3, __s56param4) {
        var __s56local0 = __s56param0(__s56param3, __s56param4 + __s56param1);
        var __s56local1 = __s56param0(__s56param3, __s56param4 + __s56param2);
        var __s56local2 = (__s56local1 >> 31) * 2 + 1;
        var __s56local3 = __s56local1 >>> 20 & 2047;
        var __s56local4 = (__s56local1 & 1048575) * 4294967296 + __s56local0;
        if (__s56local3 === 2047) {
          if (__s56local4) {
            return NaN;
          } else {
            return __s56local2 * Infinity;
          }
        } else if (__s56local3 === 0) {
          return __s56local2 * 5e-324 * __s56local4;
        } else {
          return __s56local2 * Math.pow(2, __s56local3 - 1075) * (__s56local4 + 4503599627370496);
        }
      }
      __s1param0.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
      __s1param0.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
      __s1param0.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
      __s1param0.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
  }
  return __s1param0;
}
function writeUintLE(__s63param0, __s63param1, __s63param2) {
  __s63param1[__s63param2] = __s63param0 & 255;
  __s63param1[__s63param2 + 1] = __s63param0 >>> 8 & 255;
  __s63param1[__s63param2 + 2] = __s63param0 >>> 16 & 255;
  __s63param1[__s63param2 + 3] = __s63param0 >>> 24;
}
function writeUintBE(__s65param0, __s65param1, __s65param2) {
  __s65param1[__s65param2] = __s65param0 >>> 24;
  __s65param1[__s65param2 + 1] = __s65param0 >>> 16 & 255;
  __s65param1[__s65param2 + 2] = __s65param0 >>> 8 & 255;
  __s65param1[__s65param2 + 3] = __s65param0 & 255;
}
function readUintLE(__s67param0, __s67param1) {
  return (__s67param0[__s67param1] | __s67param0[__s67param1 + 1] << 8 | __s67param0[__s67param1 + 2] << 16 | __s67param0[__s67param1 + 3] << 24) >>> 0;
}
function readUintBE(__s69param0, __s69param1) {
  return (__s69param0[__s69param1] << 24 | __s69param0[__s69param1 + 1] << 16 | __s69param0[__s69param1 + 2] << 8 | __s69param0[__s69param1 + 3]) >>> 0;
}
module.exports = factory(factory);
