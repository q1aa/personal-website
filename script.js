const projects = [
    {
        name: "Julin.dev",
        description: "My personal website",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://julin.dev"
    },
    {
        name: "CSGrok",
        description: "HTTP tunnel for sharing localhost websites to the public",
        tech: ["C#", "ASP.NET", "HTML", "CSS", "JavaScript"],
        link: "https://tunnels.julin.dev"
    },
    {
        name: "SongLinker",
        description: "Create and share a universal song link easily for all music platforms",
        tech: ["TS", "Express", "HTML", "CSS", "JavaScript", "MongoDB"],
        link: null
    },
    {
        name: "DevIcons",
        description: "Simple way to use icons in portfolio",
        tech: ["Express", "HTML", "CSS", "JavaScript"],
        link: "https://icons.julin.dev",
    }
]

const projectsContainer = document.querySelector(".projects");

projects.forEach(project => {
    const projectHTML = generateProjectHTML(project);
    projectsContainer.innerHTML += projectHTML;
});

function generateProjectHTML(project) {
    return `
            <div class="project">
                <div class="project-text-holder">
                    <p class="bracket">{</p>
                    <div class="json-content">
                        <p class="key">"name": <span class="value">"${project.name}",</span></p>
                        <p class="key">"description": <span class="value">"${project.description}"</span>,</p>
                        <p class="key">"tech": <span class="value">${project.tech},</span></p>
                        ${getLinkElement(project.link)}
                    </div>
                    <p class="bracket">}</p>
                </div>
            </div>
    `
}

function getLinkElement(link) {
    if (link) {
        return `<p class="key">"link": <a href="${link}" target="_blank"><span class="value">"${link}"</span></a></p>`;
    } else {
        return `<p class="key">"link": <a><span class="value">"${link}"</span></a></p>`;
    }

}

function focusElement(className) {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({ behavior: "smooth" });
    element.style.borderRadius = "5px";
    let opacity = 1;
    let timer = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.border = "none";
        } else {
            let red = Math.floor(opacity * 255);
            let blue = 255 - red;
            element.style.border = `2px solid rgba(${blue}, 0, ${red}, ${opacity})`;
            opacity -= 0.02;
        }
    }, 50);
}

function sendMail() {
    window.open("mailto:jul1n@icloud.com", "_blank");
    navigator.clipboard.writeText("jul1n@icloud.com");
}

function openGithub() {
    window.open("https://github.com/q1aa", "_blank");
}