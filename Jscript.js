const img1 = document.getElementById("img1");
const section2P = document.getElementById("section2P");
const img2 = document.getElementById("img2")

function handleClick(id) {
    if (img1.classList.contains("open")) {
    //change icon
    img1.src = "./assets/images/icon-plus.svg";
    section2P.style.display = "none";

    img1.classList.remove("open");
  } else {
    //change icon
    img1.src = "./assets/images/icon-minus.svg";
    section2P.style.display = "Block";

    img1.classList.add("open");
  }
  console.log(img1.classList.contains("open"));
}
