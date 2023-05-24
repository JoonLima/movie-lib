import axios from "axios";

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODA0OTE1ZTVkZjUxOGI3NjkwYjVmYmFmZWUwNTJjMSIsInN1YiI6IjY0NDQ4NzRhYTA2ZWZlMDVjNGE1MDM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bL75fYEmqBhzGafmlCazNYx1zNmnHuSvoVQ0gi_1Flk",
  },
});
