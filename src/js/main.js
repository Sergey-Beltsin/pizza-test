document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
});

const nameInput = document.querySelector(".feedback__form__input--name");
const addressInput = document.querySelector(".feedback__form__input--address");
const phoneInput = document.querySelector(".feedback__form__input--phone");
const feedbackForm = document.querySelector(".feedback__form");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal__wrapper");
const modalTitle = document.querySelector(".modal__title");
const formSubmit = document.querySelector(".feedback__form__submit");

nameInput.addEventListener("input", (event) => {
  const value = event.target.value;

  if (!value || !value.endsWith(".")) {
    nameInput.value = value;
  } else {
    nameInput.value = value.slice(0, value.length - 1);
  }
});

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formSubmit.disabled = true;

  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: nameInput.value,
        address: addressInput.value,
        phone: phoneInput.value,
      }),
    });

    modalTitle.textContent = "Спасибо за заказ";
    modal.classList.add("modal--visible");
  } catch (e) {
    modalTitle.textContent = "Что-то пошло не так";
    modal.classList.add("modal--visible");
  } finally {
    formSubmit.disabled = false;
  }
});

modal.addEventListener("click", () => {
  modal.classList.remove("modal--visible");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal--visible");
});

modalWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

$('[data-gallery=manual]').click(function (e) {

  e.preventDefault();

  var items = [],
    // get index of element clicked
    options = {
      index: $(this).parent().index()
    };

  // looping to create images array
  $('[data-gallery=manual]').each(function () {
    let src = $(this).attr('href');
    items.push({
      src: src
    });
  });

  new PhotoViewer(items, options);
});
