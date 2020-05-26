const validate = () => {
  const form = document.querySelector(`.feedback__order form`);
  const fields = form.querySelectorAll(`.feedback__field input`);
  const checkbox = form.querySelector(`.feedback__checkbox input`);

  const setErrorFor = (input) => {
    const formControl = input;
    formControl.classList.add(`feedback__error`);
  };

  const setSuccessFor = (input) => {
    const formControl = input;
    formControl.classList.remove(`feedback__error`);
  };

  fields.forEach((element) => {
    element.addEventListener(`input`, () => {
      setSuccessFor(element);
    });
  });

  checkbox.addEventListener(`input`, () => {
    if (checkbox.checked) {
      checkbox.parentNode.classList.remove(`feedback__checkbox--error`);
    }
  });

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    let succesFields = 0;
    fields.forEach((element) => {

      if (!element.value) {
        setErrorFor(element);
      } else {
        setSuccessFor(element);
        succesFields++;
      }
    });

    if (!checkbox.checked) {
      checkbox.parentNode.classList.add(`feedback__checkbox--error`);
      succesFields--;
    } else {
      checkbox.parentNode.classList.remove(`feedback__checkbox--error`);
      succesFields++;
    }

    if (succesFields === 4) {
      setTimeout(() => {
        form.reset();
      }, 600);

    }
  });
};

export default validate();
