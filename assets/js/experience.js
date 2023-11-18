AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IOT Intern",
    cardImage: "assets/images/experience-page/kottayam.jpg",
    place: "IIIT KOTTAYAM",
    time: "DEC 2022",
    desp: "<li>Worked as a IOT intern</li><li>We had a chance to study about various devices and technology stacks</li>",
  },
  {
    title: "UI/UX Design",
    cardImage: "assets/images/experience-page/n2p.jpg",
    place: "N2P Technology",
    time: "May 2023",
    desp: "<li>Worked as a UI/UX intern</li><li> I played a pivotal role in crafting seamless and visually appealing user interfaces for their innovative products.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "RVS College of Engineering",
    image: "assets/images/experience-page/rvs.png",
    desp: "4th International Conference on Inventive Research in Computing Applications",
  },
  {
    title: "KIT-KalaignarKarunanidhi Institute of Technology",
    image: "assets/images/experience-page/kit.png",
    desp: "National Conference on Research in computing Technologies",
  },
  {
    title: "Kumaruguru Institute of Technology",
    image: "assets/images/experience-page/kumaruguru.png",
    desp: "International Conference on AI Applications in Tamilcomputing.",
  },
  {
    title: "KIT-KalaignarKarunanidhi Institute of Technology",
    image: "assets/images/experience-page/ncdrc.jpg",
    desp: "NCDRC Summit",
  },
  {
    title: "Kongunadu Institute of Technology",
    image: "assets/images/experience-page/ncdrc.jpg",
    desp: "NCDRC Summit",
  },
  {
    title: "Kovai.co",
    image: "assets/images/experience-page/azure.png",
    desp: "Microsoft Azure Conference",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
