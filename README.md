# VUE.JS

> As of today, I have spent two years learning node.js and React. I will now take these skills and utilize them to learn Vue.js. I consider this an effort in de-biasing and an effort to expand my overall knowledge of "the DOM".

## Notes

### VUE.JS API

http://www.vuejs.org/api

### Instance Created Properties

Properties created from outside the instance do not have the getters/setters attached, ie:

``` javascript
const vm1 = new Vue()
vm1.title = 'New!'
```

### Surrounding JavaScript

You can interact with the Vue Instance from outside:

``` javascript
const data = {
  title: 'Name',
  isActive: true,
}

const vm = new Vue({
  el: '#app',
  data,
  methods: {},
})

console.log(vm.$data === data)
console.log(vm.$data.title)
```

### Vue Refs

> Same as React, read-only for the most part

```
<button v-on:click="show" ref="myButton">
  Show
</button>

methods: {
  show: function() {
    console.log(this.$refs.myButton)
  },
}
```