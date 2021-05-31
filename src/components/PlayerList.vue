<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Players List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(player, index) in players"
          :key="index"
          @click="setActivePlayer(player, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPlayer">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPlayer">
        <h4>Player</h4>
        <div>
          <label><strong>ID number: </strong></label> {{ currentPlayer.idNum }}
        </div>
        <div>
          <label><strong>Full Name: </strong></label>
          {{ currentPlayer.name }}
        </div>
        <div>
          <label><strong>Age</strong></label>
          {{ currentPlayer.age}}  
        </div>
        <div>
          <label><strong>Gender: </strong></label>
          {{ currentPlayer.gender}}
        </div>
        <div>
          <label><strong>Social Insurance Number</strong></label>
          {{ currentPlayer.siNumber}}
        </div>
        <a
          class="badge badge-warning"
          :href="'/tutorials/' + currentPlayer.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerDataService from "../services/PlayerDataService";

export default {
  name: "players-list",
  data() {
    return {
      players: [],
      currentPlayer: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePlayers() {
      PlayerDataService.getAll()
        .then((response) => {
          this.players = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePlayers();
      this.currentPlayer = null;
      this.currentIndex = -1;
    },

    setActivePlayer(player, index) {
      this.currentPlayer = player;
      this.currentIndex = index;
    },

    removeAllPlayers() {
      PlayerDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePlayers();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>