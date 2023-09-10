import fs from 'fs'

export const chooseRandom = (array, numItems) => {
  // TODO implement chooseRandom
  //takes an array and an integer and creates a new array of size integer
  // and returns a randomly populated array of original array elements
  if(array.length == 0 || array.length == 1){
    return array;
  }
  if(numItems < 1 || numItems > array.length){
    numItems = Math.random() * (array.length - 1) + 1;
  }
   return [...array].sort(() => 0.5 - Math.random()).slice(0, numItems);


}

export const createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
  const questions = questionNumber => ({
    type: 'input',
    name: `question-${questionNumber}`,
    message: `Enter question ${questionNumber}`
  })

  const choices = (choiceNumber, questionNumber) => ({
    type: 'input',
    name: `question-${questionNumber}-choice-${choiceNumber}`,
    message: `Enter answer choice ${choiceNumber} for question ${questionNumber}`
  })

  return Array(numQuestions + numQuestions * numChoices)
  .fill()
  .map((value, index) => {
    if (index % (numChoices + 1) === 0) {
      return questions(index / (numChoices + 1) ? index / (numChoices + 1) : 1)
    } 
    
    else {
      return choices(index % (numChoices + 1),
        Math.ceil(index / (numChoices + 1))
      )
    }
  })
}

export const createQuestions = (questions = {}) => {
  let questionObjectKeys = Object.keys(questions)

  let questionsElements = {}

  questionObjectKeys.forEach(element => {
    if (!element.includes('choice')) {
      questionsElements[element] = {
        type: 'list',
        name: element,
        message: questions[element],
        choices: []
      }
    } else {
      let stringSplit = 'question-' + element.split('-')[1]
      let tempObj = questionsElements[stringSplit]
      tempObj['choices'].push(questions[element])
    }
    return Object.values(questionsElements)
  })

  return Object.values(questionsElements)
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
