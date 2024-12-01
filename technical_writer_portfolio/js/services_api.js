async function getResponse() {
    let response = await fetch("https://semtassta.github.io/bowp_semenova/technical_writer_portfolio/data/services.json")
    console.log("response:\n", response, "\n /response: \n")
    let content = await response.text()
    console.log("await response.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 6)
    console.log("content.slice(0, 6)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert_services")
    for (key in content) {
        node_for_insert.innerHTML += `
        <div class="col d-flex flex-column gap-2" id=${content[key].id}>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">${content[key].title}</h4>
                        <p class="text-body-secondary">${content[key].description}.</p>
                    </div>
                `
    }
}
getResponse()
