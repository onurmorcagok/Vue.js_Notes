new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js",
        anotherMessage: "Vue is great framework",
        userComment: "",
        userComments: [
            "Vue is incredible",
            "Vue great framework",
            "Front-End Development for Vue.js"
        ]
    },
    methods: {
        addComment: function () {
            this.userComments.push(this.userComment); // Array push
        }
    }
})