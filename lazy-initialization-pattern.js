class ShoeRecommendation {
  constructor() {
    this.recommendations = {};
  }

  initializeRecommendations() {
    this.recommendations = {
      Nike: ['Air Max', 'React Element', 'Cortez'],
      Adidas: ['Superstar', 'Ultraboost', 'Stan Smith'],
      Puma: ['Clyde', 'RS-X', 'Suede']
    };
  }

  getRecommendations(brand) {
    if (!this.recommendations[brand]) {
      this.initializeRecommendations();
    }
    return this.recommendations[brand] || [];
  }
}

class ShoeLoader {
  constructor() {
    this.instance = null;
  }

  getInstance() {
    if (!this.instance) {
      this.instance = new ShoeRecommendation();
    }
    return this.instance;
  }
}

module.exports = ShoeLoader;
module.exports = ShoeRecommendation;
