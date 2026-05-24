const container = document.querySelector("#card-container");

function createCard(title, description, img){
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

    container.innerHTML += code;
}


createCard("AI Trainer", 
    `Developed and evaluated domain-specific prompts to assess the performance of large language models (LLMs).
    Conduct independent research and analyze LLM outputs.`, 
    "images/CERN-image-V2.jpg");
createCard("Learning Assistant", 
    `Assisted professors with course development and student mentoring. Supported student collaboration
    and communication between groups.`, 
    "images/CERN-image-V2.jpg");
