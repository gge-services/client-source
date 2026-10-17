// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 623
// Export: parseNetworkSettings; preserved source: modules/webpack/exports/parseInstances.js
// Original canonical SHA-256: 023aef07a37b9b8d049e8296e9cbcecfdda507c537dcb9ccfba7a0e72fe21fe0
exports.parseNetworkSettings = function (__s23param0) {
  var __s23local0 = new DOMParser().parseFromString(__s23param0, "text/xml").querySelector("general");
  return new __dep_export_NetworkSettings.NetworkSettings({
    allowedFullScreen: readBooleanChildTagValue(__s23local0, "allowedfullscreen"),
    defaultInstanceId: readNumberChildTagValue(__s23local0, "defaultinstance"),
    earnCredits: readNumberChildTagValue(__s23local0, "earncredits"),
    enableFeedMessages: readBooleanChildTagValue(__s23local0, "enablefeedmessages"),
    enableLonelyCow: readBooleanChildTagValue(__s23local0, "enablelonelycow"),
    inviteFriends: readBooleanChildTagValue(__s23local0, "invitefriends"),
    maxUsernameLength: readNumberChildTagValue(__s23local0, "maxusernamelength"),
    networkBuddies: readBooleanChildTagValue(__s23local0, "networkbuddies"),
    networkName: function readStringChildTagValue(__s25param0, __s25param1) {
      var __s25local0 = __s25param0.querySelector(__s25param1);
      if (__s25local0) {
        return __s25local0.textContent;
      } else {
        return "";
      }
    }(__s23local0, "networkname"),
    requestPayByJS: readBooleanChildTagValue(__s23local0, "requestpaybyjs"),
    showVersion: readBooleanChildTagValue(__s23local0, "showversion"),
    useExternalLinks: readBooleanChildTagValue(__s23local0, "useexternallinks"),
    useKeyBasedLogin: readBooleanChildTagValue(__s23local0, "usekeybaselogin"),
    usePayment: readBooleanChildTagValue(__s23local0, "usepayment")
  });
};
