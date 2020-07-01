var isOpen = false;

document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  if (!isOpen) {
    e.target.src = "./images/icon-close.svg";
    document.querySelector(".header nav").style.display = "block";
    document.querySelector(".header nav").classList.add("overlay");
    isOpen = true;
  } else {
    e.target.src = "./images/icon-hamburger.svg";
    document.querySelector(".header nav").style.display = "none";
    document.querySelector(".header nav").classList.remove("overlay");
    isOpen = false;
  }
});
