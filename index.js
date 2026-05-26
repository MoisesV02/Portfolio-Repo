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

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
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
    "images/CERN-image-V2.jpg");
createExperienceCard("Learning Assistant", 
    `Assisted professors with course development and student mentoring. Supported student collaboration
    and communication between groups.`, 
    "images/CERN-image-V2.jpg");


//Project cards
createProjectCard("Personal Portfolio Website",
    `Designed and developed a personal portfolio website to showcase my skills, projects, and experience. 
    Implemented responsive design and interactive features using HTML, CSS, and JavaScript.`,
    "https://github.com/MoisesV02/Portfolio-Repo",
    "images/Dispersion.jpg");

createProjectCard("React Website",
    `Designed and developed a game website using React that fetured responsive games that could 
    be played on both desktop and mobile devices.`,
    "https://github.com/MoisesV02/react-website",
    "images/Dispersion.jpg");
