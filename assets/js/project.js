AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "ASO",
    cardImage: "assets/images/project-page/aso.jpg",
    description: "An Automated Speed Controlling System",
  },
  {
    title: "TeaPlant Disease Identification",
    cardImage: "assets/images/project-page/tp.jpg",
    description: "TeaPlant Disease Classification using resnet Architecture",
    url:"",
  },
  {
    title: "Fardise",
    cardImage: "assets/images/project-page/fardise.png",
    description: "A E-Commerce Project for farmers to sell their product directly",
    url:"https://fardise.github.io/",
  },
  {
    title: "Udhayam",
    cardImage: "assets/images/project-page/udhayam.png",
    description: "Designed Website for the KIT college's national level symposium(Using wix)",
    url:"https://www.kitudhayam.in/",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, url}) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${url}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
            <h6>${description}</h6>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
