<template>
  <v-container class="container">
    <v-list-item-content>
      <v-list-item-title>
        <span v-if="showFlag">
          {{ item.text }}
        </span>
        <v-text-field
          v-else
          v-model="item.text"
          @blur="inputBlur(item)"
        ></v-text-field>
      </v-list-item-title>
    </v-list-item-content>

    <v-btn depressed small color="primary" @click="changeFlag()">Edit</v-btn>
    <v-btn depressed small color="error" @click="deleteData(item.id)"
      >DELETE</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Content",
  props: ["item"],
  data: () => ({
    showFlag: true,
  }),
  methods: {
    inputBlur(item) {
      this.changeFlag();
      this.$emit("input-blur", item);
    },
    deleteData(id) {
      this.$emit("delete", id);
    },
    changeFlag() {
      this.showFlag = !this.showFlag;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 80px;
  margin-left: 15px;
}
</style>


