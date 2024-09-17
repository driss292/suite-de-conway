// Étape 1
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

// Étape 2
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

// Étape 3
function suiteDeConway(carac: string, n: number) {
  const array = [carac];
  let suite = carac;

  for (let i = 1; i < n; i++) {
    suite = decritChaine(suite);
    array.push(suite);
  }
  return array;
}

console.log(suiteDeConway("a", 3)); // ["a","1a","11a"]
console.log(suiteDeConway("1", 3)); // ["1","11","21"]

function ask_user() {
  let caracter = prompt("Feed me a letter !") as string;
  let number = parseInt(prompt("How high ?") as string);
  const content = suiteDeConway(caracter, number);
  return content;
}

// Création du contenu HTML
const body = document.querySelector("body") as HTMLElement;

const content = ask_user();
content.forEach((item) => {
  const para = document.createElement("p");
  para.style.textAlign = "center";
  para.textContent = item;

  body.appendChild(para);
});
