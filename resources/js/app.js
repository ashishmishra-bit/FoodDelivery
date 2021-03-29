// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("sticky" , window.scrollY > 0);
// })

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-login');

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});



