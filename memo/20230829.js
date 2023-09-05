// オブジェクトはconsole.table()が見やすい！


// メソッド：オブジェクトの中に格納された関数
// プロパティ：オブジェクトの中に格納された値






// addEventListener(種類,処理)

// this:クリックされたボタン自身を指す※
// 処理にはアロー関数ではなくfunctionの書き方で書く。
// => thisの扱いに変化がある為。

// あらかじめ存在しないクラスでCSSを用意。

// クラス名を追加
// this.classList.add("クラス名")

// 付いていなかったらクラス名を付ける、ついていたら外す
// this.classList.toggle("クラス名")


// 例.単数ver

const btn01 = document.getElementById("btn01");
btn01.addEventListener("click", function() {
  // this.classList.add("clicked"); // addでクラスを追加
  this.classList.toggle("clicked"); // toggleでクラスを付け外し
})



// 複数ver

const btn = document.getElementsByClassName("btn");

for(let i = 0; btn.length; i++) {
  btn[i].addEventListener("click", function() {
    this.classList.toggle("clicked");
  })
}

btn.forEach(x => {
  x.addEventListener("click", function() {
    this.classList.toggle("clicked");
  })
})





// 1.要素取得
document.getElementById("id"); // idで要素を取得
document.getElementsByClassName("class") // クラスで要素を複数取得


// 2.イベントの設定
element.addEventListener("click", function() {
  // 処理
});


// 3.クラス名の編集
element.classList.add("class") // クラス名を追加
element.classList.remove("class") // クラス名を削除
element.classList.toggle("class") // クラス名がなかったら追加、あったら削除



// innerHTML と　textContentの違い

// getElementBy.... と querySelectorの違い




// HTML要素の書き換え

// 例.ボタンをクリックしたらボタンのテキストを変更

const button = document.getElementById("button");

button.addEventListener("click", function() {
  this.innerHTML = "クリックしました"; // テキストの書き換え
  this.setAttribute("disabled", true); // HTMLに属性を追加する 
});


// this.setAttribute(属性名, 属性の値)

// 例.要素を無効化
// this.setAttribute("disabled", true)


// 無効化で背景色をグレーにしたいのであれば、予めcssに記述する必要が有る


// DOM selector methods

// 1

// mine,best

// const buttonElem = document.getElementById("button");
  
// buttonElem.addEventListener('click', () => {
//   const oldText = buttonElem.innerText;
//   return button.innerText = oldText === "ON" ? "OFF" : "ON";
// });


// 2

//mine

const buttonElem = document.getElementById("wrapper").getElementsByTagName("button")[0];
const inputElem = document.getElementById("wrapper").getElementsByTagName("input")[0];

// best
// const buttonElem = document.querySelector("#wrapper button");
// const inputElem = document.querySelector("#wrapper input");

// buttonElem.addEventListener('click', () => {
//   const oldText = inputElem.value;
//     return inputElem.value = oldText === "ON" ? "OFF" : "ON";
// });




// 3.Select multiple HTML elements

// mine best
const listItems = document.querySelectorAll("#list li");



const handleHover = (event) => {
  return event.target.innerText = 'ON';
};
if(listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover));
}




// Events and user interactions

// 1.

// const button = document.getElementById('button');
// const input = document.getElementById('input');


// const handleClick = () => {
//   input.value = 'Hello World';
// };

// // best
// button.addEventListener('click', handleClick);

// // mine
// button.addEventListener("click", function() {
//   handleClick();
// });




// 2.Execute function when cursor moves onto element

const element = document.getElementById('element');

const changeText = () => {
  element.innerText = 'Thanks!';
};

// type in your code here
element.addEventListener("mousemove",changeText);






// 3.Cursor enters and leaves element

// const element = document.querySelector('#element');

// const toggleColor = (isEntering) => {
//   element.style.background = isEntering ? 'orange' : 'black';
// };

// type in your code here































