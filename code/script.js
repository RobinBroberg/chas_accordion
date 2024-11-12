// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
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

  data.forEach((post, index) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "title";
    sectionDiv.textContent = post.title;

    if (index % 2 === 0) {
      sectionDiv.style.backgroundColor = "lightgray";
    } else {
      sectionDiv.style.backgroundColor = "#bfbfbf";
    }

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";

    accordion.append(sectionDiv);
    accordion.append(descriptionDiv);

    const descriptionP = document.createElement("p");
    descriptionP.textContent = post.body;
    descriptionDiv.append(descriptionP);

    sectionDiv.addEventListener("click", toggle);
  });
}

getPosts();
