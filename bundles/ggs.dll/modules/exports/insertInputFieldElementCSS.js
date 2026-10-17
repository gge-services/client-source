// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 605
// Export: insertInputFieldElementCSS; preserved source: modules/webpack/exports/HTML_TEXTFIELD_CLASS.js
// Original canonical SHA-256: 50e4bd692b7973d382104a92757d9c4687a74be71a64fa6d8e1e65670c9955eb
exports.insertInputFieldElementCSS = function insertInputFieldElementCSS() {
  var __s1local0 = document.createElement("style");
  var __s1local1 = "\n            textarea." + exports.HTML_TEXTFIELD_CLASS + ",\n            textarea." + exports.HTML_TEXTFIELD_CLASS + ":focus,\n            input." + exports.HTML_TEXTFIELD_CLASS + ",\n            input." + exports.HTML_TEXTFIELD_CLASS + ":focus {\n                outline: none;\n                box-shadow: none;\n                border: none;\n                background-color: transparent;\n                display: none;\n                position: absolute;\n                overflow: hidden;\n            }\n    \n            textarea." + exports.HTML_TEXTFIELD_CLASS + " {\n                resize: none;\n            }\n    \n            @-webkit-keyframes autofill {\n                to {\n                    color: #000000;\n                    background: transparent;\n                }\n            }\n    \n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:hover,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:focus,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:active {\n                -webkit-animation-name: autofill;\n                -webkit-animation-fill-mode: both;\n            }\n    ";
  __s1local0.appendChild(document.createTextNode(__s1local1));
  document.head.appendChild(__s1local0);
};
