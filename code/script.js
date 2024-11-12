// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  const iconElement = element.querySelector("i");

  element.classList.toggle("active");

  if (element.classList.contains("active")) {
    iconElement.className = "fa-solid fa-minus";
  } else {
    iconElement.className = "fa-solid fa-plus";
  }
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

const accordion = document.querySelector(".accordion");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const rainbowColors = [
    "#FFB3BA",
    "#FFDFBA",
    "#FFFFBA",
    "#BAFFC9",
    "#BAE1FF",
    "#C9B3FF",
    "#FFB3E6",
  ];

  data.forEach((post, index) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "title";
    sectionDiv.innerHTML = `<i class="fa-solid fa-plus" style="margin-right: 8px;"></i>${post.title}`;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";

    accordion.append(sectionDiv);
    accordion.append(descriptionDiv);

    sectionDiv.style.backgroundColor =
      rainbowColors[index % rainbowColors.length];

    /* if (index % 2 === 0) {
      sectionDiv.style.backgroundColor = "#8BB3CC";
    } else {
      sectionDiv.style.backgroundColor = "#A8DADC";
    } */

    const descriptionP = document.createElement("p");
    descriptionP.textContent = post.body;
    descriptionDiv.append(descriptionP);

    sectionDiv.addEventListener("click", toggle);
  });
}

getPosts();
