// Scroll suave por data-scroll
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-scroll]").forEach(function (el) {
    el.addEventListener("click", function () {
      var target = el.getAttribute("data-scroll");
      if (!target) return;
      var node = document.querySelector(target);
      if (!node) return;
      window.scrollTo({
        top: node.offsetTop - 20,
        behavior: "smooth",
      });
    });
  });

  // Hook Tidycal / llamada directa (Diagnóstico ADD)
  var btnAgendar = document.getElementById("btn-agendar");
  if (btnAgendar) {
    btnAgendar.addEventListener("click", function () {
      var tidycalUrl = "https://tidycal.com/add-systems/diagnostico-add";
      window.open(tidycalUrl, "_blank");
    });
  }
});
