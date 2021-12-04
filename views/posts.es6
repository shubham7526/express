const MyLayout = require('./Layout.es6')
 
class Posts extends MyLayout {
    content () {
        const {posts, user} = this.data;
        
        return `<div>${user.name.first}</div>`
    }

}
 
module.exports = Posts