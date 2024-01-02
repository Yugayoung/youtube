import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return useParams.relatedToVideoId
      ? axios.get('/videos/search.json')
      : axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
  }
}