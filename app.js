const app = Vue.createApp({
    //data, functions
    // template: '<h2>I am template</h2>'
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'Game of Throne', author: 'William Jeo', img: 'assets/GOT.jpg', isFav: false},
                { title: 'Game of Throne', author: 'William Jeo', img: 'assets/GOW.jpg', isFav: false},
                { title: 'Game of Throne', author: 'William Jeo', img: 'assets/witchers.jpg', isFav: false},
            ]
                    
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }

    }
})

app.mount('#app')