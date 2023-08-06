class Shoe {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return `${this.brand} ${this.model}`;
  }
}

class ShoeMultiton {
  static instances = {};

  static getInstance(brand, model) {
    const key = `${brand}-${model}`;

    if (!ShoeMultiton.instances[key]) {
      ShoeMultiton.instances[key] = new Shoe(brand, model);
    }

    return ShoeMultiton.instances[key];
  }
}

module.exports = Shoe;
module.exports = ShoeMultiton;
