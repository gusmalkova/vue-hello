import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/players");
  }

  get(id) {
    return http.get(`/players/${id}`);
  }

  create(data) {
    return http.post("/players", data);
  }

  update(id, data) {
    return http.put(`/players/${id}`, data);
  }

  delete(id) {
    return http.delete(`/players/${id}`);
  }

  deleteAll() {
    return http.delete(`/players`);
  }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new TutorialDataService();