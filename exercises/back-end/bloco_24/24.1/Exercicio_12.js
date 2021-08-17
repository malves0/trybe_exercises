db.movies.updateMany(
  {},
  {
    $unset: {
      budget: "",
      estimateBudget: "",
    },
  },
);