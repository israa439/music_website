"use strict";
let cards = document.querySelectorAll(".card");
let slideContainer = document.querySelector(".slide-container");
let currentSlide = 0;
function inputsAnimation() {
    let labels = document.querySelectorAll(".login-input label");
    let inputs = document.querySelectorAll(".login-input input");
    inputs.forEach((input, index) => {
        input.addEventListener("focus", () => {
            labels[index].style.transform = "translateY(-15px)";
        });
        input.addEventListener("blur", () => {
            if (input.value.trim() === "") {
                labels[index].style.transform = "translateY(0)";
            }
        });
        if (input.value.trim() !== "") {
            labels[index].style.transform = "translateY(-15px)";
        }
    });
}
function signupSwitch() {
    let signup = document.getElementById("signup-input");
    let signupBtn = signup.querySelector("input");
    let login = document.getElementById("login-input");
    let loginBtn = login.querySelector("input");
    let form = document.getElementById("login-form");
    let conatainer = document.getElementById("form");
    let submitBtn = document.getElementById("submit-btn");
    signupBtn.addEventListener("change", () => {
        if (signupBtn.checked) {
            conatainer.classList.remove("signup");
            conatainer.classList.add("signin");
            setTimeout(function () {
                form.classList.add("active");
            }, 800);
            submitBtn.textContent = "Sign Up";
        }
    });
    loginBtn.addEventListener("change", () => {
        if (loginBtn.checked) {
            form.classList.remove("active");
            setTimeout(function () {
                conatainer.classList.add("signup");
                conatainer.classList.remove("signin");
            }, 800);
            submitBtn.textContent = "Log In";
        }
    });
}
function nextSlide() {
    updateSlide();
    currentSlide = (currentSlide + 1) % cards.length;
}
function updateSlide() {
    const slideWidth = cards[0].clientWidth;
    slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
setInterval(nextSlide, 4000);
inputsAnimation();
signupSwitch();
