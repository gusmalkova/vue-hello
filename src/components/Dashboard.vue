<template>
  <div>
    <div class="router">
    </div>
    <div class="title"><h1>Players</h1></div>
    <div class="table-container">
      <addPlayer/>  
      <table>
        <caption> Player Information </caption> 
        <tr >
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Số BHXH</th>
          <th scope="col">Tuổi</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td class="idNumber">{{ post.idNumber }}</td>
          <td class="fullName">{{ post.fullName }}</td>
          <td class="sin">{{ post.socialInsuranceNumber }}</td>
          <td class="age">{{ post.age }}</td>
        </tr>
      </table>
    </div>

    <add-employee/>
  </div>
</template>

<script>

const axios = require("axios").default;
import addPlayer from './addPlayer.vue';

export default {
  components: { addPlayer },
  name: "players",
  data() {
    return {
      counter: 0,
      posts: [],
    };
  },

  created() {
    this.getEmployeeByFetch();
    
  },

  methods: {
    
    async getPlayerByFetch() {
      const response = await fetch("http://127.0.0.1:8080/api/players");
      const data = await response.json();
      this.posts = data;
      console.log(this.posts);
    },
    
    async postEmployeeByAxios(){
      axios.post("http://127.0.0.1:8080/api/players", {
        idNumber: "123456-1",
        name: "Donald Trump",
        age: 29,
        gender: "MALE",
        socialInsuranceCode: "12345698",
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  }
};

</script>



<style scoped>
.title {
  text-align: center;
}

th{
  text-align: center;
}

table, th, td{
  border: 1px solid black;
}

table{
  border-collapse: collapse;
}

.table-container, .form-container {
  display: table;
  margin-right: auto;
  margin-left: auto;
}

.first-name{
  color: skyblue;
}
</style>
