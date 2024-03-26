export const computeLongestWord = (value, componentName) => {
  if (!value) {
    return "No Data";
  }
  console.log(`${componentName} - computeLongestWord`);
  let longestWord = "";
  value.split(" ").forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

export const fetchQuote = () => {
  return fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then((data) => data.quote);
};
