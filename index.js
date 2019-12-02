

function reverseString(word) {

    // 1
    // return word.split('')
    //            .reverse()
    //            .join('');

    // 2
    //    let newString  = '';
    //    for (let i = 0 ; i < word.length ; i++  ){
    //        newString  = word[i] + newString;
    //    }
    //     return newString;


    // 3
    //     let newString  = '';
    //     for(let result of word){
    //     newString  = result + newString;
    //    }
    //    return newString;


    // 4
    //    let newString  = '';
    //    word.split('').forEach( function (result) {
    //     newString  = result + newString;
    //    });
    //    return newString;


    // 5
    //    let newString  = '';
    //    word.split('').map((_,i,result) =>{
    //     newString  = result + newString;
    //    });
    //   return newString;


    return [...word].reduce((newString,result) => result + newString ,'');

  }

const       output   = reverseString('hello');
console.log(output);

