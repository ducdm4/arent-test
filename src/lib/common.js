const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateNewHomeItem = () => {
  const type = ["m", "l", "d", "s"];
  let result = [];
  for (let i = 0; i < 8; i++) {
    const getType = randomInteger(0, 3);
    switch (type[getType]) {
      case "m":
        result.push({
          image: `m0${randomInteger(1, 3)}.jpg`,
          date: "05.21",
          type: "Morning",
        });
        break;
      case "l":
        result.push({
          image: `l0${randomInteger(1, 3)}.jpg`,
          date: "05.21",
          type: "Lunch",
        });
        break;
      case "d":
        result.push({
          image: `d0${randomInteger(1, 2)}.jpg`,
          date: "05.21",
          type: "Dinner",
        });
        break;
      case "s":
        result.push({
          image: `s01.jpg`,
          date: "05.21",
          type: "Snack",
        });
        break;
    }
  }
  return result;
};
export { generateNewHomeItem, randomInteger };
