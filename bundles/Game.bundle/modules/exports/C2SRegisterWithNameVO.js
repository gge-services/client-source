Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("C2SRegisterWithNameVO");
var __s0local1 = function (__s1param0) {
  function C2SRegisterWithNameVO() {
    var __s3local0 = this;
    __s3local0.DID = 0;
    __s3local0.CONM = 0;
    __s3local0.RTM = 0;
    __s3local0.campainPId = 0;
    __s3local0.campainCr = 0;
    __s3local0.campainLP = 0;
    __s3local0.adID = 0;
    __s3local0.timeZone = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SRegisterWithNameVO, __s1param0);
  C2SRegisterWithNameVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_REGISTER;
  };
  C2SRegisterWithNameVO.prototype.initialize = function () {
    this.PN = this.username;
    this.PW = this.password;
    this.REF = this.referrer;
    this.LANG = this.ggsLanguageCode;
    this.DID = __dep_exact_f855840627e6e145.int(this.distributorId);
    this.CONM = this.connectionTime;
    this.RTM = this.roundTripTime;
    this.AID = this.accountId;
    this.GCI = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    this.SID = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.storeId;
    this.PLFID = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.platformId;
    this.NID = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId;
    this.campainPId = Number(this.campaignVars_partnerId);
    this.campainCr = Number(this.campaignVars_creative);
    this.campainLP = Number(this.campaignVars_lp);
    this.adID = parseInt(this.campaignVars_adid);
    this.timeZone = __dep_exact_f855840627e6e145.int(this.timezone);
    __s0local0.debug("___C2SRegisterWithNameVO___");
    __s0local0.debug("PN: " + this.PN);
    __s0local0.debug("PW: " + this.PW);
    __s0local0.debug("REF: " + this.REF);
    __s0local0.debug("LANG: " + this.LANG);
    __s0local0.debug("DID: " + this.DID);
    __s0local0.debug("CONM: " + this.CONM);
    __s0local0.debug("RTM: " + this.RTM);
    __s0local0.debug("AID: " + this.AID);
    __s0local0.debug("campaignVars: " + this.campaignVars);
    __s0local0.debug("campainPId: " + this.campainPId);
    __s0local0.debug("campainCr: " + this.campainCr);
    __s0local0.debug("campainLP: " + this.campainLP);
    __s0local0.debug("adID: " + this.adID);
    __s0local0.debug("timeZone: " + this.timeZone);
    __s0local0.debug("______");
  };
  return C2SRegisterWithNameVO;
}(__dep_exact_9e901e8e2483a22f.BasicC2SRegisterUserVO);
exports.C2SRegisterWithNameVO = __s0local1;
