let splitBrands = (brands) => {
  return brands.replace(/,\s/g, ',').split(',');
}

let fixDate = (date) => {
  return date.replace(/\/20(\w\w)/g, '/$1');
}

let invertDate = (date) => {
  return date.replace(/(\w\w?)\/(\w\w?)\/(\w\w)/g, '$2/$1/$3');
}

let bool2X = (str) => {
  return str == 'Yes' ? 'x' : null;
}

let updateAbrv = (brands, newAbrev) => {
  let abrevs = []
  if (brands[0] === '') {
    brands[0] = 'NONE';
  } else
  for (let brand of brands) {
    let b = newAbrev[brand];
    b = b != '' || b != ' ' ? b : 'NONE';
    b = b != undefined ? b : `bad-brand,${brand}`;
    abrevs.push(b);
  }
  return abrevs;
}

let toAbr = (brands, brandsAbrev) => {
  let abrevs = []
  for (let brand of brands) {
    abrevs = abrevs.concat(brandsAbrev[brand]);
  }
  return abrevs;
}

let empty = (str) => {
  return str === "" || str === null || str === undefined
}

let fillSpaces = (num, longest) => {
  let str = '';
  num = num.toString()
  for (let i = 0; i < longest - num.length; i++)
    str += ' ';
  return str + num;
}

let fromRow = (arr, src) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1]["inRow"] = 'Row: ' + fillSpaces(i + 1, 3) + ', Sheet: ' + fillSpaces(src, 8);
  }
  return arr;
}

export { splitBrands, updateAbrv, toAbr, fixDate, bool2X, empty, invertDate, fromRow };