class RegularBulb {
  constructor() {
    this.life = "1 year";
    this.range = [50, 100];
  }
}

class EnergyBulb {
  constructor(color) {
    this.life = "10 years";
    this.range = [5, 40];
    this.color = color;
  }
}
class Factory {
  createBulb(type, color) {
    let bulb;
    if (type === "regular") {
      bulb = new RegularBulb();
    } else if (type === "energy") {
      bulb = new EnergyBulb(color);
    }
    bulb.type = type;

    return bulb;
  }
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (let i = 0, len = bulbs.length; i < len; i++) {
  console.log(bulbs[i]);
}
