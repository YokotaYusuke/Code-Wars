"use strict";

// mine
function lowercaseCount(str){
    //How many?
  return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}

// best answer
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}


// 見つからなかったときから配列を返す






