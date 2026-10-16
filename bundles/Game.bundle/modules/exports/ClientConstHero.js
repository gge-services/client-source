Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstHero() {}
  ClientConstHero.getGenderStringForHero = function (__s5param0) {
    if (ClientConstHero.FEMALE_HEROS.indexOf(__s5param0) > -1) {
      return "female";
    } else {
      return "male";
    }
  };
  ClientConstHero.__initialize_static_members = function () {
    ClientConstHero.FEMALE_HEROS = [2, 7, 9, 803];
    ClientConstHero.MALE_HEROS = [0, 1, 3, 4, 5, 6, 8, 801, 802];
    ClientConstHero.STARTER_HEROES = [801, 802, 803];
  };
  return ClientConstHero;
}();
exports.ClientConstHero = __s0local0;
__s0local0.__initialize_static_members();
