const text = document.getElementById("text");
const photo = document.getElementById("photo");
const Pname = document.getElementById("Pname");
const position = document.getElementById("position");

//function repeatRequest() {
fetch("./script/testimonials.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(typeof data);

    function moveCard() {
      data.forEach((element) => {
        text.innerHTML = `<q>${element.text}</q>`;
        photo.src = element.photo;
        Pname.innerHTML = `<b>${element.name}</b>`; //laziness
        position.innerText = element.position;
        console.log(element);
      });
    }
    document
      .getElementById("left-btn")
      .addEventListener("click", () => moveCard());
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// }
