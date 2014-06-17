define("cachjax/ajax",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function(wordUp) {
      window.alert(wordUp);
    }
  });
define("cachjax",
  ["./ajax","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"] || __dependency1__;

    function foo(word) {
      console.log(word);
    }

    __exports__.ajax = ajax;
    __exports__.foo = foo;
  });