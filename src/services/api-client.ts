import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bbbee065de744b1dbe5a2386ff3f95f8',
  },
});
