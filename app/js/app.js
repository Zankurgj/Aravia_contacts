document.addEventListener("DOMContentLoaded", function () {
  Inputmask({ mask: "+7(999)999-99-99" }).mask(
    document.querySelector("#phone")
  );
});

function onToggleContactForm() {
  document.querySelector("#feedbackForm").classList.toggle("show");
}
