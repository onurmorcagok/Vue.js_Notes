new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue.js',
        anotherMessage: 'Vue incredible framework',
        userComment: '',
        userComments: [
            
        ],
    },
    methods:{
        addUserComment:function(){
            this.userComments.push(this.userComment);
        }
    }

})