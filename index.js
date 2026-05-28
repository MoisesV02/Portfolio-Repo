//Variables held constant and accessed specific HTML elements using their IDs.
const experienceContainer = document.querySelector("#card-container");
const projectContainer = document.querySelector("#project-card-container");

//Function use create experience cards, it takes in the title, description, and image URL as parameters and generates the HTML code for the card, which is then added to the experience container on the webpage.
function createExperienceCard(title, description, img){
    let code = `
    <div class="card">
                    <div class="card-image">
                        <img src="${img}">
                    </div>
                    <div class="card-description">
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </div>
                </div>
                `;

    experienceContainer.innerHTML += code;
}

// Function to create project cards, it takes in the title, description, link, and image URL as parameters and generates the HTML code for the card, which is then added to the project container on the webpage. The card is wrapped in an anchor tag that links to the project and opens in a new tab when clicked.
function createProjectCard(title, description, link, img){
    let code = `
    <a href="${link}" class="project-link" target="_blank" rel="noopener noreferrer">
        <div class="card">
                    <div class="card-image">
                        <img src="${img}">
                    </div>
                    <div class="card-description">
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </div>
                </div>
    </a>
                `;

    projectContainer.innerHTML += code;
}

// Function to toggle the navigation menu on smaller screens. It adds or removes the "active" class to the navigation links and changes the menu icon between a hamburger and an "X" based on the state of the menu.
function toggleMenu() {
    // Get the navigation links and menu icon elements by their IDs
    const navLinks = document.getElementById("navLinks");
    const menuIcon = document.getElementById("menuIcon");

    navLinks.classList.toggle("active");

    // Change the menu icon based on the state of the navigation links
    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}

// Function to open the email form, needs to be developed in the future, may need PHP and APIs...
// function openForm(){
//     /*document.getElementById("contact-form")*/
// }



// Calling the functions to create experience and project cards with the relevant information for each card. The experience cards include a title, description, and image, while the project cards also include a link to the project.
//Experience cards
createExperienceCard("AI Trainer", 
    `Developed and evaluated domain-specific prompts to assess the performance of large language models (LLMs).
    Conduct independent research and analyze LLM outputs.`, 
    "https://www.shutterstock.com/image-vector/cute-green-robot-waving-hand-600nw-2455346975.jpg");
createExperienceCard("Learning Assistant", 
    `Assisted professors with course development and student mentoring. Supported student collaboration
    and communication between groups.`, 
    "https://laprogram.fiu.edu/wp-content/uploads/cropped-LAP_Full_Color_Circle-1.png");


//Project cards
createProjectCard("Personal Portfolio Website",
    `Designed and developed a personal portfolio website to showcase my skills, projects, and experience. 
    Implemented responsive design and interactive features using HTML, CSS, and JavaScript.`,
    "https://github.com/MoisesV02/Portfolio-Repo",
    "images/blackhole.jpg");

createProjectCard("React Website",
    `Designed and developed a game website using React that fetured responsive games that could 
    be played on both desktop and mobile devices.`,
    "https://github.com/MoisesV02/react-website",
    "https://i.pinimg.com/736x/5d/6c/ff/5d6cffeba8f502e5a9e07748510e16fd.jpg");
