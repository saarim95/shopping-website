document.addEventListener("DOMContentLoaded", function () {
  const cartIcons = document.querySelectorAll(".fa-cart-shopping");
  const countElements = document.querySelectorAll(".count");
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

  cartIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      let count = parseInt(countElements[index].textContent);
      count++;
      countElements[index].textContent = count;
    });
  });

  incrementButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let count = parseInt(countElements[index].textContent);
      count++;
      countElements[index].textContent = count;
    });
  });

  decrementButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let count = parseInt(countElements[index].textContent);
      if (count > 0) {
        count--;
        countElements[index].textContent = count;
      }
    });
  });
});

const typed = new Typed(".multiple-text", {
  strings: ["Buy", "Sell"],
  typeSpeed: 100,
  backSpeed: 90,
  backDelay: 1000,
  loop: true,
});
