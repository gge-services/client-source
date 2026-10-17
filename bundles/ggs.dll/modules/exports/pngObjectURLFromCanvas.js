// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 592
// Export: pngObjectURLFromCanvas; preserved source: modules/webpack/exports/curObjectURLFromCanvas.js
// Original canonical SHA-256: 53828a963062d9e02bc4f2875c4735e25fddba997e376b2142ae635534b3bc72
exports.pngObjectURLFromCanvas = function pngObjectURLFromCanvas(__s7param0) {
  var __s7local0 = pngDataURLFromCanvas(__s7param0);
  var __s7local1 = "data:image/png;base64,";
  if (!__s7local0.startsWith(__s7local1)) {
    throw new Error("pngDataURL is not valid");
  }
  var __s7local2 = arrayBufferFromBase64String(__s7local0.substring(__s7local1.length));
  var __s7local3 = new Blob([__s7local2], {
    type: "image/png"
  });
  return URL.createObjectURL(__s7local3);
};
