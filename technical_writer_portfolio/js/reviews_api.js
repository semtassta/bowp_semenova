async function getResponse() {
    let response = await fetch("https://semtassta.github.io/bowp_semenova/technical_writer_portfolio/data/reviews.json")
    console.log("response:\n", response, "\n /response: \n")
    let content = await response.text()
    console.log("await response.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 3)
    console.log("content.slice(0, 3)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert_reviews")
    for (key in content) {
        node_for_insert.innerHTML += `
        <blockquote class="blockquote" id=${content[key].id}>
                <p class="mb-4">${content[key].text}</p>
                <footer class="blockquote-footer">${content[key].title}
                    <cite title="Source Title">
                        ${content[key].position}, ${content[key].company}
                    </cite>
                </footer>
        </blockquote>
                `
    }
}
getResponse()
