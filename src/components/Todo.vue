<template>
  <v-container class="main-center">
    <div class="up-part">
      <v-text-field label="Please input todo" v-model="newTodo"></v-text-field>
      <v-btn depressed small color="primary" @click="addData()">ADD</v-btn>
    </div>

    <v-card :loading="loadingFlag">
      <v-toolbar color="white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>ToDo</v-toolbar-title>
      </v-toolbar>

      <v-list flat>
        <v-list-item-group multiple>
          <v-list-item v-for="(item, i) in items" :key="i">
            <Content
              :item="item"
              @input-blur="updateData($event)"
              @delete="deleteData($event)"
            ></Content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import Content from "./Content";
export default {
  name: "Todo",
  components: {
    Content,
  },
  data: () => ({
    newTodo: "",
    loadingFlag: false,
    items:[]
  }),
  mounted() {
    // init data
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/data").then((res) => {
        this.loadingFlag = true;
        if (res.status === 200) {
          this.loadingFlag = false;
          this.items = res.data;
        }
      });
    },
    addData() {
      if (!this.newTodo || this.newTodo.length === 0) {
        return;
      }
      this.$axios.post("/data", { value: this.newTodo }).then((res) => {
        this.loadingFlag = true;
        if (res.status === 200) {
          // clear input value
          this.newTodo = "";
          this.loadingFlag = false;
          this.getData();
        }
      });
    },
    updateData(item) {
      this.$axios.put("/data", item).then((res) => {
        this.loadingFlag = true;
        if (res.status === 200) {
          this.loadingFlag = false;
          this.getData();
        }
      });
    },
    deleteData(id) {
      this.$axios.delete(`/data/${id}`).then((res) => {
        this.loadingFlag = true;
        if (res.status === 200) {
          this.loadingFlag = false;
          this.getData();
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
.main-center {
  display: flex;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 30px;
  flex-direction: column;

  .v-btn:not(.v-btn--round).v-size--small {
    min-width: 80px;
    margin-left: 15px;
  }

  .up-part {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
