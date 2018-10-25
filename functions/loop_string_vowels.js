/*
TODO:
OBJECTIVE

In this challenge, we practice looping over the characters of string.

TASK

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .

Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

*/

function vowelsAndConsonants(s) {
    const vowels = "aeiou" /* set variable with vowels */
    let consonants = "" /* set variable that do not have vowels aka consonants */
    for (let i = 0; i < s.length; i++) { /* s.length of string -- in this case, the alphabet */
        if (vowels.includes(s[i])) { /* checks for any vowels present in the string at any position */
            console.log(s[i]) /* print all the vowels first */
        } else { /* if the letters are anything but vowels, continue and gather all consonatns */
            consonants += s[i] + '\n' /* += concatenates strings; '\n' is a String Escape code for new line  */
        }
    }
    console.log(consonants.trim()) /* trim removes whitespace from both sides of a string but does NOT change the original string.*/
}