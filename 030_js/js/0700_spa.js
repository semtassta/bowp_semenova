// https://www.youtube.com/watch?v=QSF8JXFPR18&list=PLiOhsP3M5j5wIUlXkYMuWTVR8inofxLS0&index=7
async function getResponce() {
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../../tmp/g06u28.shop.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)

    // content = await responce.json()
    content = content.splice(0, 4)

    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }


    // let id_main = document.getElementById("main")


    let ul_0 = document.getElementById("ul_0")
    for (key in content) {
        ul_0.innerHTML += ` 
        <li class="m-3 list-group-item"> 
        <img src=${content[key].img} width="200px">
        <h5>${content[key].title}</h5>
        <p>${content[key].description}. Цена 
        ${content[key].price} р.</p>
        <p>Заказать 
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <input type="number" name="amount" value="0" size="2">
        </p> 
        </li>
                `
    }
}

getResponce()

function content_hidden() {
    const hidden_node = document.getElementsByClassName("hidden_node")
    for (let index = 0; index < hidden_node.length; index++) {
        console.log("index: ", index)
        hidden_node[index].style = "display: none;"
    }
}
content_hidden()

function nav_clear() {
    const clear_nav = document.getElementsByClassName("nav-link")
    for (let index = 0; index < clear_nav.length; index++) {
        console.log("index: ", index)
        clear_nav[index].style = "color: green;"
    }
}
nav_clear()


const id_main = document.getElementById("id_main")
const main = document.getElementById("main")
function style_main() {
    content_hidden()
    nav_clear()
    id_main.style = "color: red;"
    main.style = "display: flex; "
}
id_main.addEventListener("click", style_main)


const id_shop = document.getElementById("id_shop")
const shop = document.getElementById("shop")
function style_shop() {
    content_hidden()
    nav_clear()
    id_shop.style = "color: red;"
    shop.style = "display: flex; "
}
id_shop.addEventListener("click", style_shop)





