document.addEventListener('DOMContentLoaded', function () {
  console.log("Welcome to ScriptAI!");
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeLink = document.getElementById("theme-style");

  toggleBtn.addEventListener("click", () => {
    if (themeLink.getAttribute("href") === "light.css") {
      themeLink.setAttribute("href", "dark.css");
    } else {
      themeLink.setAttribute("href", "light.css");
    }
  });
});
