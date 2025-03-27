const text = document.getElementById("text");
const photo = document.getElementById("photo");
const Pname = document.getElementById("Pname");
const position = document.getElementById("position");

fetch("./script/testimonials.json")
  .then((response) => response.json())
  .then((data) => {

    let currentIndex = 0;
    function moveCard() {
      const testimonial = data[currentIndex];

      text.innerHTML = `<q>${testimonial.text}</q>`;
      photo.src = testimonial.photo;
      Pname.innerHTML = `<b>${testimonial.name}</b>`;
      position.innerText = testimonial.position;
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      moveCard();
    }, 5000);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
