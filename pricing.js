const methodSelect = document.getElementById("payment-method");
const cardFields = document.getElementById("card-fields");

methodSelect.addEventListener("change", () => {
  cardFields.style.display = methodSelect.value === "card" ? "block" : "none";
});
