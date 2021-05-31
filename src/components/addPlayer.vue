<template>
  <div class="new-player">
    <input
      type="text"
      v-model="idNum"
      @keydown.enter="add"
      class="form-element"
      placeholder="Player ID Number"
    />
    <input
      type="text"
      v-model="name"
      @keydown.enter="add"
      class="form-element"
      placeholder="Player Name"
    />
    <input
      type="number"
      v-model="age"
      @keydown.enter="add"
      class="form-element"
      placeholder="Player Age"
    />
    <input
      type="text"
      v-model="gender"
      @keydown.enter="add"
      class="form-element"
      placeholder="Player Gender"
    />
    <input
      type="text"
      v-model="siNumber"
      @keydown.enter="add"
      class="form-element"
      placeholder="Player Social Insurance Number"
    />
    <button @click="add" class="form-element">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      this.$emit("playerAdded", {
        idNum: this.idNum,
        name: this.name,
        age: this.age,
        siNumber: this.siNumber,
        gender: this.gender,
      });
      this.idNum ="";
      this.name = "";
      this.age = 0;
      this.siNumber = "";
      this.gender = "";
    },
  },
};
</script>

<style>
.new-player {
  margin: 35px;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #fff;
}

input.form-element {
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: none;
  background-color: #2196f3;
}
</style>
