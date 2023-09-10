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
  
  //const getRandomItem = (array,numItems) => array.get([...array.keys()][Math.floor(Math.random() * numItems)])
  //const getRandomItem = (array,numItems) => [...array][Math.floor(Math.random()*numItems)]
}

export const createPrompt = () => {
// create obj with 2 properties numQuestions and numChoises
//returns array with specific objects
//Wrong direction have to go back and restart
}

export const createQuestions = () => {
  //Going in the wrong direction have to go back and restart

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
