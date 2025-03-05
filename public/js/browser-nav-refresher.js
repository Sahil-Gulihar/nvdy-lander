window.addEventListener("pageshow", function (e) {
  var n =
    e.persisted ||
    (typeof window.performance < "u" &&
      window.performance.navigation.type === 2);
  n && window.location.reload();
});
