const express = require('express');
const readline = require('readline');
const ShoeRecommendation = require('./lazy-initialization-pattern');
const ShoePool = require('./object-pool-pattern');
const ShoeMultiton = require('./multiton-pattern');
const ShoeBuilder = require('./builder-pattern');

app = express();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Builder Pattern
// const nikeAirBuilder = new ShoeBuilder("Nike", "Air Max")
//   .withColor('Hitam')
//   .withSize(42)
//   .withPrice(1600000);

// const nikeAir = nikeAirBuilder.build();
// console.log(nikeAir.getInfo());

// const adidasSuperstar = new ShoeBuilder("Adidas", "Superstar")
//   .withColor("White")
//   .withSize(40)
//   .withPrice(1400000)
//   .build();
// console.log(adidasSuperstar.getInfo());

// // Multiton Pattern
// console.log('==================');
// console.log('Rekomendasi Sepatu');
// console.log('==================');
// const shoe1 = ShoeMultiton.getInstance("Nike", "Air Max");
// console.log("Sepatu 1:", shoe1.getInfo());

// const shoe2 = ShoeMultiton.getInstance("Adidas", "Superstar");
// console.log("Sepatu 2:", shoe2.getInfo());

// const shoe3 = ShoeMultiton.getInstance("Nike", "Air Max");
// console.log("Sepatu 3:", shoe3.getInfo()); // Ini akan mengembalikan nilai yang sama dengan "shoe1"

// // Object Pool Pattern
// const shoePool = new ShoePool(5);

// console.log('==================');
// console.log('Rekomendasi Sepatu');
// console.log('==================');
// const shoe1 = shoePool.acquire('Nike', 'Air Force 1');
// console.log('Sepatu 1: ', shoe1.getInfo());

// const shoe2 = shoePool.acquire('Adidas', 'Yeezy');
// console.log('Sepatu 2: ', shoe2.getInfo());

// const shoe3 = shoePool.acquire('Puma', 'Clyde');
// console.log('Sepatu 3: ', shoe3.getInfo());

// // Lazy Initialization Pattern
// const recommendation = new ShoeRecommendation();

// rl.question('Masukan Nama Brand Sepatu yang Anda Inginkan: ', (brand) => {
//   const brandRecommendations = recommendation.getRecommendations(brand);

//   if (brandRecommendations.length > 0) {
//     console.log(`Rekomendasi Sepatu dari Brand ${brand}: ${brandRecommendations.join(', ')}`);
//   } else {
//     console.log(`Mohon Maaf Tidak Ada Rekomendasi Sepatu untuk Brand yang Anda Masukan`);
//   }

//   rl.close();
// });