db.movies.updateMany(
  { $or:
    [ { title: "Batman" }, { title: "Home Alone" } ],
  },
  {
    $max: { imdbRating: 17 },
  },
);
