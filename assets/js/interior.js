var optionMenu = document.querySelector(".dropdown_menu"),
  selectBtn = optionMenu.querySelector(".dropdown_btn"),
  // options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".profile");
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});

// ---------cart-------

document.getElementById("quantity").addEventListener("change", function () {
  console.log("called");
  mrp = document.getElementById("mrp").innerText;
  var newmrp = mrp.substring(1);
  Amount = parseFloat(newmrp) * this.value;
  document.getElementById("amount_by_quantity").innerHTML = "&#8377;" + Amount;
  console.log(Amount);
  discountPercent = document.getElementById("discount_percent").value;
  DiscountAmountPercent = (Amount * discountPercent) / 100;
  document.getElementById("retail_discount").innerHTML =
    "- &#8377;" + DiscountAmountPercent;
  console.log("DiscountAmountPercent", DiscountAmountPercent);
  DiscountAmount = Amount - DiscountAmountPercent;
  document.getElementById("item_price").innerHTML = "&#8377;" + DiscountAmount;
  console.log(DiscountAmount);
});
