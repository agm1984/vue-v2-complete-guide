new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('wow')
        },
        updateValue: function(event) {
            this.value = event.target.value
        }
    },
})