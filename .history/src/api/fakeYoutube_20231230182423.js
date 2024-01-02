import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  }
}
