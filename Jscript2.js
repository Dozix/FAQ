const img = document.getElementById("img1");
console.log(img.className)
const content = document.getElementsByClassName("content");
const contentArr = Array.from(content);
console.log(contentArr);

function closeAllContent() {
  const content = document.getElementsByClassName("content");
  const contentArr = Array.from(content);
  
  contentArr.forEach((element, index) => {
    console.log(element);
    element.style.display = "none";
    const img = document.getElementById("img" + (index + 1));
    img.src = "./assets/images/icon-plus.svg";
  });
}
function handleClick(id) {
  closeAllContent();
  const img = document.getElementById(`img${id}`);
  const content = document.getElementById(`content${id}`);
  if (img.classList.contains("open")) {
    //change icon
    img.src = "./assets/images/icon-plus.svg";
    content.style.display = "none";

    img.classList.remove("open");
  } else {
    //change icon
    img.src = "./assets/images/icon-minus.svg";
    content.style.display = "Block";

    img.classList.add("open");
  }
  console.log(img.classList.contains("open"));
}
