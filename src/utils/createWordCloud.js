import commonWords from './commonWords';

// Remove all special characters, and make all characters lower case
const filterTitles = titles => {
  const filteredTitles = titles.filter(title => title !== undefined);
  const cleanTitles = filteredTitles.map(title => {
    return title.toLowerCase().replace(/[\W_]+/g, ' ');
  });
  return cleanTitles;
};

// Remove common words from titles
const removeCommonWords = titles => {
  const commonWordsRemoved = [];
  const removedWords = [];
  titles.map(title => {
    const words = title.split(' ');
    for (let word of words) {
      if (!commonWords.includes(word)) {
        commonWordsRemoved.push(word);
      } else if (commonWords.includes(word)) {
        removedWords.push(word);
      }
    }
    return commonWordsRemoved;
  });
  return commonWordsRemoved;
};

// Create word map to count occurrence of each word
const wordMap = words => {
  const wordMap = {};

  for (let word of words) {
    wordMap[word] = wordMap[word] + 1 || 1;
  }
  return wordMap;
};

const formatWordMap = words => {
  let formattedWordMap = [];
  for (let word in words) {
    formattedWordMap.push({ text: word, value: words[word] });
  }
  return formattedWordMap;
};

export const createWordCloud = data => {
  const cleanTitles = filterTitles(data);

  const commonWordsRemoved = removeCommonWords(cleanTitles);

  const mappedWords = wordMap(commonWordsRemoved);

  const formattedWordMap = formatWordMap(mappedWords);

  return formattedWordMap;
};
