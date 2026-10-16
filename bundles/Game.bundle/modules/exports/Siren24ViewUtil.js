Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Siren24ViewUtil() {}
  Siren24ViewUtil.loadKoreanAssets = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.loadVersionedInterfaceAsset("KoreaTableCell", 200);
    if (__s5param0 != null) {
      if (__s5local0.isLoaded) {
        __s5param0();
      } else {
        __s5local0.addEventListener(__dep_exact_9e901e8e2483a22f_1.BulkProgressEvent.COMPLETE, __s5param0, false, 0, true);
      }
    }
  };
  Object.defineProperty(Siren24ViewUtil, "ageRatingLogo", {
    get: function () {
      if (Library.KoreaTableCell) {
        return new Library.KoreaTableCell.MC_ageRating();
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Siren24ViewUtil, "contentDescriptorLogo", {
    get: function () {
      if (Library.KoreaTableCell) {
        return new Library.KoreaTableCell.MC_contentDescriptor();
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Siren24ViewUtil.licenceTable = function (__s18param0) {
    if (!Library.KoreaTableCell) {
      return null;
    }
    var __s18local0;
    var __s18local1 = __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.identityManagmentLicenseVO;
    switch (__s18param0) {
      case __dep_export_IdentityManagementView.IdentityManagementView.KOREAN_TABLE_DEFAULT:
        __s18local0 = new Library.KoreaTableCell.MC_KoreaTable();
        break;
      case __dep_export_IdentityManagementView.IdentityManagementView.KOREAN_TABLE_COMPACT:
        __s18local0 = new Library.KoreaTableCell.MC_KoreaTableCompact();
        break;
      case __dep_export_IdentityManagementView.IdentityManagementView.KOREAN_TABLE_VERTICAL:
        __s18local0 = new Library.KoreaTableCell.MC_KoreaTableVertical();
    }
    Siren24ViewUtil.fillCell(__s18local0, 0, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_GAME_NAME));
    Siren24ViewUtil.fillCell(__s18local0, 1, new __dep_exact_92d05af59ee2ff30.TextVO(__s18local1.gameTitle));
    Siren24ViewUtil.fillCell(__s18local0, 2, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENCE_COMPANY_NAME));
    Siren24ViewUtil.fillCell(__s18local0, 3, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_KOREAN_COMPANY_NAME));
    Siren24ViewUtil.fillCell(__s18local0, 4, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_RATING));
    Siren24ViewUtil.fillCell(__s18local0, 5, new __dep_exact_92d05af59ee2ff30.TextVO(__s18local1.ageRating.age + __dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_AGE_RATING_SUFFIX));
    Siren24ViewUtil.fillCell(__s18local0, 6, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_RATING_NUMBER));
    Siren24ViewUtil.fillCell(__s18local0, 7, new __dep_exact_92d05af59ee2ff30.TextVO(__s18local1.license_cc_np));
    Siren24ViewUtil.fillCell(__s18local0, 8, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_DATE_OF_RATING_DELIVERY));
    Siren24ViewUtil.fillCell(__s18local0, 9, new __dep_exact_92d05af59ee2ff30.TextVO(__s18local1.gameRatingBoardConcessionDate.getFullYear() + "." + __s18local1.gameRatingBoardConcessionDate.getMonth() + "." + __s18local1.gameRatingBoardConcessionDate.getDate()));
    Siren24ViewUtil.fillCell(__s18local0, 10, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_PUBLISHER_NUMBER));
    Siren24ViewUtil.fillCell(__s18local0, 11, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_4.IdentityManagementConstants.LICENSE_NUMBER));
    __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(__s18local0.txt_footer, new __dep_exact_92d05af59ee2ff30.TextVO("회사 이름\nGoodgame Studios Korea Limited\n사업자등록번호\n106-87-01536, 2013년09월10일 발행\n주소\n140-885 서울특별시 용산구 독서당로 96 대영빌딩 4충\n전화\n+82 (0) 2 - 795 - 8654\n이사회\nVerena Schnaus 대표이사 Oleg Rößger"));
    return __s18local0;
  };
  Siren24ViewUtil.fillCell = function (__s22param0, __s22param1, __s22param2) {
    __s22param0["mc_cell" + __s22param1].txt_label.embedFonts = true;
    __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(__s22param0["mc_cell" + __s22param1].txt_label, __s22param2).size = 10;
  };
  return Siren24ViewUtil;
}();
exports.Siren24ViewUtil = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IdentityManagementView = require("gge-module:export_IdentityManagementView");
