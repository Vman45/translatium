import translateText from './translate-text';

const translateArray = (inputLang, outputLang, inputArr) => Promise.resolve()
  .then(() => {
    const inputText = inputArr.join('\n');
    return translateText(inputLang, outputLang, inputText);
  })
  .then(({ outputText }) => ({
    outputText,
    outputArr: outputText.split('\n'),
  }));

export default translateArray;
