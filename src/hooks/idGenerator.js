const latter = ["a", "b", "c", "d", "e", "f", "g"];

export const idGenerator = (arrey = []) => {
  let newID = "";
  let randomLatterCount = 0;

  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.round(Math.random() * 9);
    newID += randomNumber;

    if (randomLatterCount > 2) {
      
      let randomLatter = Math.round(Math.random() * (latter.length - 1));
      newID += latter[randomLatter];
      randomLatterCount++;
    }
  }

  if (arrey.some((el) => el.id === newID)) return idGenerator(arrey);
  return newID;
};
