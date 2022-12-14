let shoppingCart = (function () {
  let basket = [];
  return {
    upsertItem(item) {
      let index = basket.findIndex((bas) => bas.id === item.id);
      if (index === -1) {
        basket.push(item);
      } else {
        basket[index] = item;
      }
    },
    getItemsCount: function () {
      return basket.length;
    },
    getTotalPrice: function () {
      let val = 0;
      basket.forEach((item) => (val = val + item.count * item.product.price));
      return val;
      // return basket
      //   .map((val) => val.product.price * val.count)
      //   .reduce((prev, current) => {
      //     return prev + current;
      //   });
    },
    removeItemById(id) {
      let value = basket.findIndex((bs) => bs.id === id);
      basket.splice(value, 1);
    },
  };
})();

const item1 = {
  id: 0,
  product: {
    id: 1,
    name: "Coffee",
    description: "Coffee Grounds from Ethiopia",
    price: 9,
  },
  count: 1,
};
const item2 = {
  id: 1,
  product: {
    id: 2,
    name: "Tea",
    description: "Oonlong Tea from China",
    price: 10,
  },
  count: 5,
};
const item3 = {
  id: 2,
  product: {
    id: 3,
    name: "Bottled Water",
    description: "Bottled Water from US",
    price: 2,
  },
  count: 30,
};

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = "Himilayan Water";
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309
