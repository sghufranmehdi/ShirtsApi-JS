const Shirts = [
  { id: 1, name: "T-shirt" },
  { id: 2, name: "Formal" },
  { id: 3, name: "Casual" },
];

module.exports = {
  getShirt: (data) => {
    return Shirts;
  },
  getShirtById: (id) => {
    const shirts = Shirts.find((c) => c.id === parseInt(id));
    if (!shirts) {
      return "The shirt with the given ID was not found."; //404
    } else {
      return shirts;
    }
  },

  updateShirt: (id, data) => {
    const shirts = Shirts.find((c) => c.id === parseInt(id));
    if (!shirts) {
      return "The shirt with the given ID was not found."; //404
    } else {
      shirts.name = data.name;
      return shirts;
    }
  },
  deleteShirt: (id) => {
    const shirts = Shirts.find((c) => c.id === parseInt(id));
    if (!shirts) {
      return "The shirt with the given ID was not found."; //404
    } else {
      const index = Shirts.indexOf(shirts);
      Shirts.splice(index, 1);
      return shirts;
    }
  },
  addShirt: (data) => {
    const shirts = {
      id: Shirts.length + 1,
      name: data.name,
    };
    Shirts.push(shirts);
    return shirts;
  },
};
