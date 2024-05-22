const urls = [
    "https://www.datocms-assets.com/60761/1642341254-html5.svg",
    "https://www.datocms-assets.com/60761/1642341246-css3.svg",
    "https://www.datocms-assets.com/60761/1642341261-sass.svg",
    "https://www.datocms-assets.com/60761/1642341255-javascript.svg",
    "https://www.datocms-assets.com/60761/1642343542-typescript.svg",
    "https://www.datocms-assets.com/60761/1642341257-node-dot-js.svg",
    "https://www.datocms-assets.com/60761/1642341260-react.svg",
    "https://www.datocms-assets.com/60761/1642341260-redux.svg",
    "https://www.datocms-assets.com/60761/1643647501-graphql.svg",
    "https://www.datocms-assets.com/60761/1642341257-next-dot-js.svg",
    "https://www.datocms-assets.com/60761/1642341241-bootstrap.svg",
    "https://www.datocms-assets.com/60761/1642341243-bulma.svg",
    "https://www.datocms-assets.com/60761/1642341263-webpack.svg",
    "https://www.datocms-assets.com/60761/1642341253-gulp.svg",
    "https://www.datocms-assets.com/60761/1642341251-grunt.svg",
    "https://www.datocms-assets.com/60761/1642341245-csharp.svg",
    "https://www.datocms-assets.com/60761/1642341259-php.svg",
    "https://www.datocms-assets.com/60761/1642341250-git.svg",
    "https://www.datocms-assets.com/60761/1642341250-github.svg",
    "https://www.datocms-assets.com/60761/1642341248-docker.svg",
    "https://www.datocms-assets.com/60761/1642341248-figma.svg",
    "https://www.datocms-assets.com/60761/1642341262-unity.svg",
    "https://www.datocms-assets.com/60761/1642341256-jira.svg",
    "https://www.datocms-assets.com/60761/1642341244-confluence.svg",
];

async function createToolsItem(tools_carousel) {
    const tools_list = document.createElement("ul");
    tools_list.className = "tools__list";

    urls.forEach((url) => {
        const li = document.createElement("li");
        li.className = "tool_item";
        const img = document.createElement("img");
        img.src = url;

        const match = url.match(/\/([^\/]+)\.svg$/);
        let img_content = "Skill";
        if (match) img_content = match[1].split("-")[1];
        img.alt = img_content;

        const h4 = document.createElement("h4");
        h4.innerHTML = img_content;

        li.appendChild(img);
        li.appendChild(h4);
        tools_list.appendChild(li);
    });

    tools_carousel.appendChild(tools_list);
}

document.addEventListener("DOMContentLoaded", async (event) => {
    const tools_carousel = document.querySelector(".tools_carousel");
    await createToolsItem(tools_carousel);
    await createToolsItem(tools_carousel);
});
