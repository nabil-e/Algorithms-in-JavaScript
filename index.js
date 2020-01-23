////////////////////////////////////////////////////////////////////
/// 1. Fizz Buzz                                                ///
//////////////////////////////////////////////////////////////////

function fizzBuzz(num){
  for (let i = 1; i <= num; i++){
    if (i % 15 === 0) console.log('FizzBuzz')
    else if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i)

    // Ternary methode
    //(i % 15 == 0) ? console.log('FizzBuzz') : (i % 3 === 0) ? console.log('Fizz') : (i % 5 === 0) ? console.log('Buzz') : console.log(i)
  }  
}
//fizzBuzz(20)

////////////////////////////////////////////////////////////////////
/// 2. Harmless Ransom Note                                     ///
//////////////////////////////////////////////////////////////////

function harmlessRansomNote(noteText, magazineText){
  const noteArr = noteText.split(' ')
  const magazineArr = magazineText.split(' ')
  const magazineObj = {}
  let noteIsPossible = true

  // Add and count word in object from magazine array
  magazineArr.map(word => !magazineObj[word] ? magazineObj[word] = 1 : magazineObj[word]++)

  // Verify if all word in note array is in magazine object
  while (noteIsPossible){
    noteArr.map(word => magazineObj[word] ? magazineObj[word]-- : magazineObj[word] < 0 ? noteIsPossible = false : noteIsPossible = false)
    return noteIsPossible
  }
}
//harmlessRansomNote('le petit', 'le pe petit se le se le' )

////////////////////////////////////////////////////////////////////
/// 3. Is Palindrome                                            ///
//////////////////////////////////////////////////////////////////

function isPalindrome(string){
  string = string.toLowerCase()
  const charactersArr = string.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArr = charactersArr.filter(char => validCharacters.includes(char))
  
  return lettersArr.join('') === lettersArr.reverse().join('')
  //if (lettersArr.join('') === lettersArr.reverse().join('')) return true; else return false
}
//console.log(isPalindrome("madam i'm adam"))

////////////////////////////////////////////////////////////////////
/// 4. Caesar Cipher                                            ///
//////////////////////////////////////////////////////////////////

function caesarCipher(string, num){
  const characters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  string = string.toLowerCase()
  stringArr = string.split('')
  let changingString = []

  stringArr.map(char => {
    if (characters.indexOf(char) > -1 && characters.includes(char)){
      //if index > 25 then return in the first index of list
      let index = (characters.indexOf(char) + num) > 25 ? (characters.indexOf(char) + num - 26) : (characters.indexOf(char) + num) 
      
      char = characters[index]
      changingString.push(char) 
    }else{
      changingString.push(char) 
    }
  })
  //console.log(changingString)
  return changingString.join('')
}
console.log(caesarCipher('z', 1))

////////////////////////////////////////////////////////////////////
/// 5. Reverse Words                                            ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 6. Reverse Array In Place                                   ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 7. Mean Median Mode                                         ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 8. Two Sum                                                  ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 9. Binary Search                                            ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 10. Fibonacci                                               ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 11. Memoized Fibonacci                                      ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 12. Sieve of Eratosthenes                                   ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 13. Bubble Sort                                             ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 14. Merge Sort                                              ///
//////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
/// 15. Max Stock Profit                                        ///
//////////////////////////////////////////////////////////////////



