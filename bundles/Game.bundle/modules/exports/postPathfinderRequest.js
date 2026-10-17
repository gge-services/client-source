// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 2058
// Export: postPathfinderRequest; preserved source: modules/webpack/exports/postPathfinderRequest.js
// Original canonical SHA-256: ba403493a1ec7c5e55f526cccd584e5cbd5d99b50142907d27c3b1a487348e9d
exports.postPathfinderRequest = function postPathfinderRequest(__s7param0, __s7param1, __s7param2 = null) {
  return new Promise(function (__s9param0) {
    var __s9local0 = ++__s0local1;
    __s0local2.set(__s9local0, __s9param0);
    var __s9local1 = {
      id: __s9local0,
      fromPos: {
        x: __s7param0.x,
        y: __s7param0.y
      },
      toPos: {
        x: __s7param1.x,
        y: __s7param1.y
      }
    };
    if (__s7param2) {
      var __s9local2 = function buildGraphTransferData(__s12param0) {
        var __s12local0 = __s12param0._nodeX;
        var __s12local1 = __s12param0._nodeY;
        var __s12local2 = __s12param0._nodeNeighbors;
        var __s12local3 = __s12param0._nodeConnectionCosts;
        var __s12local4 = !!__s12param0._useVariedCosts;
        for (var __s12local5 = __s12local0.length, __s12local6 = 0, __s12local7 = 0; __s12local7 < __s12local5; ++__s12local7) {
          __s12local6 += __s12local2[__s12local7].length;
        }
        var __s12local8 = new Int32Array(__s12local5);
        var __s12local9 = new Int32Array(__s12local5);
        var __s12local10 = new Int32Array(__s12local5 + 1);
        var __s12local11 = new Int32Array(__s12local6);
        var __s12local12 = __s12local4 ? new Float64Array(__s12local6) : null;
        var __s12local13 = 0;
        for (var __s12local7 = 0; __s12local7 < __s12local5; ++__s12local7) {
          __s12local8[__s12local7] = __s12local0[__s12local7];
          __s12local9[__s12local7] = __s12local1[__s12local7];
          __s12local10[__s12local7] = __s12local13;
          for (var __s12local14 = __s12local2[__s12local7], __s12local15 = __s12local4 ? __s12local3[__s12local7] : null, __s12local16 = 0; __s12local16 < __s12local14.length; ++__s12local16) {
            __s12local11[__s12local13] = __s12local14[__s12local16];
            if (__s12local15) {
              __s12local12[__s12local13] = __s12local15[__s12local16];
            }
            ++__s12local13;
          }
        }
        __s12local10[__s12local5] = __s12local13;
        var __s12local17 = [__s12local8.buffer, __s12local9.buffer, __s12local10.buffer, __s12local11.buffer];
        if (__s12local12) {
          __s12local17.push(__s12local12.buffer);
        }
        return {
          data: {
            nodeX: __s12local8,
            nodeY: __s12local9,
            neighborOffsets: __s12local10,
            neighborList: __s12local11,
            costsList: __s12local12,
            useVariedCosts: __s12local4
          },
          transferables: __s12local17
        };
      }(__s7param2);
      __s9local1.graphData = __s9local2.data;
      __s0local0.postMessage(__s9local1, __s9local2.transferables);
    } else {
      __s0local0.postMessage(__s9local1);
    }
  });
};
