
function goToPage() {
  document.body.style.transition = "transform 2s ease, opacity 1s ease";
  document.body.style.transform = "translateX(-100%)";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000); // نفس مدة الانتقال
}

