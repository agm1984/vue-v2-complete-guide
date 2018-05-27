new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    computed: {
        result: function() {
            return (this.value === 37) ? 'Done' : 'Not there yet'
        },
    },
    watch: {
        result: function() {
            const instance = this
            setTimeout(function() {
                instance.value = 0
            }, 5000)
        }
    },
    methods: {

    },
})