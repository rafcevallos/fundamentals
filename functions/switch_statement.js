/*
TODO: Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set , then return A.
If the first character in string s is in the set , then return B.
If the first character in string s is in the set , then return C.
If the first character in string s is in the set , then return D.
*/

function getLetter(s) {
    let letter;

    switch(true) {
        case "aeiou".includes(s[0]): /* determines whether the string includes a certain element, returning true */
            letter = "A";
            break;
        case "bcdfg".includes(s[0]):
            letter = "B";
            break;
        case "hjklm".includes(s[0]):
            letter = "C";
            break;
        case "npqrstvwxyz".includes(s[0]):
            letter = "D";
            break;
    }
    return letter;
}

getLetter(s)