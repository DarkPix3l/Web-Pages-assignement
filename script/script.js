const text = document.getElementById("text");
const photo = document.getElementById("photo");
const Pname = document.getElementById("Pname");
const position = document.getElementById("position");

//function repeatRequest() {
fetch("./script/testimonials.json")
  .then((response) => response.json())
  .then((data) => {
    //console.log(typeof data);

    let currentIndex = 0;
    function moveCard() {
      const testimonial = data[currentIndex];

      text.innerHTML = `<q>${testimonial.text}</q>`;
      photo.src = testimonial.photo;
      Pname.innerHTML = `<b>${testimonial.name}</b>`;
      position.innerText = testimonial.position;
      //console.log(element);
    }
    /* 
    document.getElementById("left-btn").addEventListener("click",  () => {
        currentIndex = (currentIndex + 1) % data.length;
        moveCard();
      }); */

    setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      moveCard();
    }, 3000);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// }
