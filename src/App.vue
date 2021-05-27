<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloVue msg="Welcome to the Jungle" />
    <div id="app-2">
      <span v-bind:title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HelloVue from "./components/HelloVue.vue";
//import hideText from "./components/hideText.vue";

export default {
  name: "App",
  components: {
    HelloVue,
  },
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
  data2() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
