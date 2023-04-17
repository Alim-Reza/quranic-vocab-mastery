const getOptions = (currentAyah, englishWordMeaningPool, data_set) => {
  let randomListOfStrings = [];
  while (randomListOfStrings.length < 3) {
    const randomIndex = Math.floor(
      Math.random() * englishWordMeaningPool.length
    );
    const randomString = englishWordMeaningPool[randomIndex];

    if (!randomListOfStrings.includes(randomString)) {
      randomListOfStrings.push(randomString);
    }
  }
  const randomIndex = Math.floor(
    Math.random() * (englishWordMeaningPool.length + 1)
  );
  randomListOfStrings.splice(randomIndex, 0, data_set[currentAyah].meaning);
  return randomListOfStrings;
};

const onClickAction = (currentAyah, setCurrentAyah, data_set, selectedOption) => {
  if(selectedOption.target.innerHTML === data_set[currentAyah].meaning) {
    setCurrentAyah(prev => prev + 1);
  } else {
    return true;
  }
}

export const Logic = {
  getOptions,
  onClickAction,
};
