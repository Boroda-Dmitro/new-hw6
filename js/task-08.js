const form = document.querySelector("form.login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget;

  email.value === "" || password.value === ""
    ? alert("заповни всі поля")
        : console.log({ email: email.value, password: password.value });
    
    form.reset();
};

form.addEventListener("submit", handleSubmit);
