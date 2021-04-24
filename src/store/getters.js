const getters = {
  choosen_movie: state => state.movie.choosenMovie,
  id: state => state.user.id,
  gmail: state => state.user.gmail,
  full_name: state => state.user.full_name,
  avatar: state => state.user.avatar,
};

export default getters;
