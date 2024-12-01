async function getResponse() {
    let response = await fetch("https://semtassta.github.io/bowp_semenova/technical_writer_portfolio/data/portfolio.json")
    console.log("response:\n", response, "\n /response: \n")
    let content = await response.text()
    console.log("await response.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 300px" class="d-flex flex-column m-3 p-2 border bg-body" id=${content[key].id}>
        <img style="width: 200px; height: 200px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title py-3">${content[key].title}</h5>
        <p class="card-text py-0">${content[key].description}</p>
        <p class="card-text">Tools: ${content[key].tools}</p>
        <p class="card-text">Industries: ${content[key].industries}</p>
        </li>
                `
    }
}
getResponse()
