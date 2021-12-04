const MyLayout = require('./Layout.es6')
 
class Home extends MyLayout {

    externalCss () {
        return `
        <link rel="stylesheet" href="/stylesheets/home.css">
        <link rel="stylesheet" href="/stylesheets/style.css">`
    }

    content () {

        return `<div class="home-content-body m-2">
            <div class="home-left-side-bar d-flex flex-column justify-content-evenly align-items-center ">
                <a class="navbar-brand" href="/home">Home</a>
                <a class="navbar-brand" href="/about">About</a>
                <a class="navbar-brand" href="/contact">Contact Us</a> 
                <button id="magic">Show me magic of ssr</button>
            </div>
            <div class="home-content ms-4 me-4"> Home_Page_Content </div>
            <div class="home-right-side-bar"> <img src="/images/download.jpeg" alt="Italian Trulli"/> </div>
        </div>`
    }

    script() {
        return `<script>
            document.querySelector("#magic").addEventListener("click", (evt)=> {
                evt.target.innerHTML = "kyun hila daala na"
            })
        </script>`
    }
}

module.exports = Home