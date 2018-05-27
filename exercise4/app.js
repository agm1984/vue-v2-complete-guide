new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    first: 'first',
    second: 'second',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'lightgreen',
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red',
    }
  },
  computed: {},
  watch: {},
  methods: {
    startEffect: function() {
      // Make sure this is in the correct lexical environment
      const vm = this
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight
        vm.effectClasses.shrink = !vm.effectClasses.shrink
      }, 1000)
    },
    startProgress: function () {
      const vm = this
      let width = 0
      setInterval(function() {
        width += 10
        vm.progressBar.width = `${width}px`
      }, 500)
    },
  }
});
