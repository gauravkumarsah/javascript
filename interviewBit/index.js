for (var i = 0; i < 4; i++) {
  (function () {
    setTimeout(function () {
      console.log(i);
    }, 500);
  })();
}