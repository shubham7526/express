const MyLayout = require('./Layout.es6')
 
class Error extends MyLayout {
    content () {
        
        return `<div>error</div>`
    }

}
 
module.exports = Error