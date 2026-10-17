// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 592
// Export: curObjectURLFromCanvas; preserved source: modules/webpack/exports/curObjectURLFromCanvas.js
// Original canonical SHA-256: 53828a963062d9e02bc4f2875c4735e25fddba997e376b2142ae635534b3bc72
exports.curObjectURLFromCanvas = function curObjectURLFromCanvas(__s10param0, __s10param1 = {
  x: 0,
  y: 0
}) {
  var __s10local0 = pngDataURLFromCanvas(__s10param0);
  var __s10local1 = "data:image/png;base64,";
  if (!__s10local0.startsWith(__s10local1)) {
    throw new Error("pngDataURL is not valid");
  }
  var __s10local2 = arrayBufferFromBase64String(__s10local0.substring(__s10local1.length));
  new Blob([__s10local2], {
    type: "image/png"
  });
  var __s10local3 = new Blob([function curFileHeader(__s13param0 = 1) {
    var __s13local0 = new ArrayBuffer(6);
    var __s13local1 = new DataView(__s13local0);
    __s13local1.setUint16(0, 0, true);
    __s13local1.setUint16(2, 2, true);
    __s13local1.setUint16(4, __s13param0, true);
    return __s13local0;
  }(), function curICONDIRENTRY(__s15param0, __s15param1, __s15param2, __s15param3, __s15param4) {
    var __s15local0 = new ArrayBuffer(16);
    var __s15local1 = new DataView(__s15local0);
    __s15local1.setUint8(0, __s15param0 % 256);
    __s15local1.setUint8(1, __s15param1 % 256);
    __s15local1.setUint8(2, 0);
    __s15local1.setUint8(3, 0);
    __s15local1.setUint16(4, __s15param4.x, true);
    __s15local1.setUint16(6, __s15param4.y, true);
    __s15local1.setUint32(8, __s15param2, true);
    __s15local1.setUint32(12, __s15param3, true);
    return __s15local0;
  }(__s10param0.width, __s10param0.height, __s10local2.byteLength, 22, __s10param1), __s10local2], {
    type: "image/x-icon"
  });
  return URL.createObjectURL(__s10local3);
};
