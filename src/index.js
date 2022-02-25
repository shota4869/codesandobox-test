import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * アロー関数
 */

function fn(str) {
  return str;
}
console.log(fn("fn1です"));

const fn1 = fn;

fn1();
console.log(fn1("fn1です"));

const fn2 = (str) => {
  return str;
};
console.log(fn2("fn2です"));

const fn3 = (num1, num2) => {
  return num1 + num2;
};

console.log(fn3(10, 20));

/**
 * 分割代入
 */
const my = {
  name: "sho",
  age: 28
};

const message1 = `名前は${my.name}です。年齢は${my.age}歳です`;
console.log(message1);
const { name, age } = my;
const message2 = `名前は${name}です。年齢は${age}歳です`;
console.log(message2);

const me = ["sho", 28];

const message3 = `名前は${me[0]}です。年齢は${me[1]}歳です`;
console.log(message3);
const [name1, age2] = me;
const message4 = `名前は${name1}です。年齢は${age2}歳です`;
console.log(message4);

/**
 * デフォルト値
 */
const sayHello = (name = "sho") => console.log(`こんにちわ${name}さん`);
sayHello("shota");

/**
 * スプレッド構文
 */
//配列の展開
const arry = [1, 2];
console.log(arry);
console.log(...arry); //配列の中身を展開して処理してくれる

const sumFn = (num1, num2) => console.log(num1 + num2);
sumFn(...arry);

/**
 * まとめる
 */
const arry2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arry3] = arry2;
console.log(num1);
console.log(num2);
console.log(arry3);

/**
 * 配列のコピー、結合
 */
const arry4 = [10, 20];
const arry5 = [30, 40];

const arry6 = [...arry4];
console.log(arry6);

const arry7 = [...arry4, ...arry5];
console.log(arry7);

// const arry8 = arry4;
// console.log(arry8);

// arry8[0] = 100;
// console.log(arry4);

arry6[0] = 100;
console.log(arry4);
console.log(arry6);

/**
 * mapやfilter
 */
const nameArry = ["田中", "山田", "タカセ"];
const nameArry2 = nameArry.map((name) => {
  return name;
});
console.log(nameArry2);

nameArry.map((name) => console.log(name));

const numArry = [1, 2, 3, 4, 5];
const newNumArry = numArry.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArry);

nameArry.map((name, index) => console.log(`${index++}番目は${name}です`));
