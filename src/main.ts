import "./style.css";

function decoupeChaine(str: String) {
  if (str.length === 0) return "";
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result += " ";
    }
    result += str[i];
  }
  return result;
}

function decritChaine(str: String) {
  if (str.length === 0) return "";
  let result = "";
  let compteur = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      compteur++;
    } else {
      result += compteur + str[i - 1];
      compteur = 1;
    }
  }
  result += compteur + str[str.length - 1];
  return result;
}
console.log(decoupeChaine("ab")); // a b
console.log(decoupeChaine("aabbca")); // aa bb c a

console.log(decritChaine("ab")); // 1a1b
console.log(decritChaine("aabbca")); // 2a2b1c1a
