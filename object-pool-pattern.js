class Shoe {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return `${this.brand} ${this.model}`;
  }
}

class ShoePool {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.availableShoes = [];
  }

  createShoe(brand, model) {
    return new Shoe(brand, model);
  }

  acquire(brand, model) {
    if (this.availableShoes.length === 0) {
      if (this.availableShoes.length < this.maxSize) {
        const newShoe = this.createShoe(brand, model);
        return newShoe;
      } else {
        throw new Error("Shoe pool exhausted");
      }
    } else {
      const shoe = this.availableShoes.pop();
      shoe.brand = brand;
      shoe.model = model;
      return shoe;
    }
  }

  release(shoe) {
    if (this.availableShoes.length < this.maxSize) {
      this.availableShoes.push(shoe);
    }
  }
}

module.exports = Shoe;
module.exports = ShoePool;



