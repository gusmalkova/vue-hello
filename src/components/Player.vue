<template>
  <div v-if="currentPlayer" class="edit-form">
    <h4>Player</h4>
    <form>
      <div class="form-group">
        <label for="title">ID Number</label>
        <input type="text" class="form-control" id="title"
          v-model="currentPlayer.idNum"
        />
      </div>
      <div class="form-group">
        <label for="description">Full Name</label>
        <input type="text" class="form-control" id="description"
          v-model="currentPlayer.name"
        />
      </div>

      <div class="form-group">
        <label for="description">Age</label>
        <input type="text" class="form-control" id="description"
          v-model="currentPlayer.age"
        />
      </div>
    
    <div class="form-group">
        <label for="description">Gender</label>
        <input type="text" class="form-control" id="description"
          v-model="currentPlayer.gender"
        />
      </div>

    <div class="form-group">
        <label for="description">Social Security Number</label>
        <input type="text" class="form-control" id="description"
          v-model="currentPlayer.siNumber"
        />
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>