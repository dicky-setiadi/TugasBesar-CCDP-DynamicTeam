class ShoeBuilder {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  withColor(color) {
    this.color = color;
    return this;
  }

  withSize(size) {
    this.size = size;
    return this;
  }

  withPrice(price) {
    this.price = price;
    return this;
  }

  build() {
    return new Shoe(this);
  }
}

class Shoe {
  constructor(builder) {
    this.builder = builder;
    this.brand = builder.brand;
    this.model = builder.model;
    this.color = builder.color;
    this.size = builder.size;
    this.price = builder.price;
  }

  getInfo() {
    return `${this.brand} ${this.model}, Color: ${this.color}, Size: ${this.size}, Price: Rp. ${this.price}`;
  }
}

module.exports = Shoe;
module.exports = ShoeBuilder;
