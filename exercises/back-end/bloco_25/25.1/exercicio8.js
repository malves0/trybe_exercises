db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      total: { $sum: "$valorTotal" }
    }
  },
  {
    $sort: {
      total: -1
    }
  },
  {
    $limit: 5
  }
]);
