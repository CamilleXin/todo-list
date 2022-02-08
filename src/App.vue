<template>
  <div id="app">
    <v-app>
      <Todo />
    </v-app>
  </div>
</template>


<script>
import Todo from "./components/Todo"

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>
