const {Layout}  = require("es6views")
 
class MyLayout extends Layout {
 
    parse() {
        const {title} = this._data;
        let markup = `<html><head>
                <title>${this._data.title}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                ${this.externalCss()}
            </head>
            <body>`
        
        markup += [this.header(), this.content(), this.footer()].join("")
          
        markup += `</body>`
        markup += this.script();
        this._markup = markup+`</html>`
    }

    externalCss () {
        return ``;
    }
    
    header () {
        // const data = this.data
        // return `<header>${data.title}</header>`
        return `<nav class="navbar navbar-light bg-primary">
            <div class="container-fluid ">
            <a class="navbar-brand" href="/home">Home</a>
            <a class="navbar-brand" href="/about">About</a>
            <a class="navbar-brand" href="/contact">Contact Us</a>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
            </form>
            </div>
      </nav>`
       
    }
    
    content () {
        return `abc`
    }
    
    footer () {
        // return `<footer>2008-${(new Date()).getFullYear()}</footer>`
        return `<div class="footer">Footer</div>`
        
    }

    script() {
        return `<script>
            console.log("hello")
        </script>`
    }
    
}
 
module.exports = MyLayout