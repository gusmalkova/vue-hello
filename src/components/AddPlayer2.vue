<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Add Player</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="player.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="player.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import PlayerDataService from "../services/PlayerDataService";

export default {
  name: "add-player",
  data() {
    return {
      player: {
        idNum: "",
        name: "",
        age: null,
        siNumber: "",
        gender: "",
      },
      submitted: false
    };
  },
  methods: {
    savePlayer() {
      var data = {
        idNum: this.idNum,
        name: this.name,
        age: this.age,
        siNumber: this.siNumber,
        gender: this.gender,
      };

      PlayerDataService.create(data)
        .then(response => {
          this.player.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPlayer() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>