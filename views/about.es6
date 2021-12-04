const MyLayout = require('./Layout.es6')
 
class About extends MyLayout {

    externalCss () {
        return `
        <link rel="stylesheet" href="/stylesheets/about.css">
        <link rel="stylesheet" href="/stylesheets/style.css">`
    }

    content () {

        return `<div class="d-flex flex-coloumn about-content-body m-2">
            <div class="about-left-side-bar d-flex flex-column justify-content-evenly align-items-center ">
                <a class="navbar-brand" href="/home">Home</a>
                <a class="navbar-brand" href="/about">About</a>
                <a class="navbar-brand" href="/contact">Contact Us</a> 
            </div>
            <div class="about-content text-center ms-4"> About us </div>

        </div>`
    }
}

module.exports = About