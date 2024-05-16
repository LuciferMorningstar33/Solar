const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
    document.getElementById("container3").classList.toggle("shift");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
	document.getElementById("container3").classList.toggle("shift");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
