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
