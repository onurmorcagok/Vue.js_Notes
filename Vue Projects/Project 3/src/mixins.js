const mixins = {
    data() {
        return {
            message: "",
            inComingMessage: "",
        }
    },
    beforeDestroy(){
        EventBus.$off();
    }
}

export default mixins;