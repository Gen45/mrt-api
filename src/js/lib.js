let splitBrands = (brands) => {
  return brands.replace(/,\s/g, ',').split(',');
}

let fixDate = (date) => {
  return date.replace(/\/20(\w\w)/g, '/$1');
}

let bool2X = (str) => {
  return str == 'Yes' ? 'x' : null;
}

let updateAbrv = (brands, newAbrev) => {
  let abrevs = []
  for (let brand of brands) 
      abrevs.push(newAbrev[brand]);
  return abrevs;
}

let toAbr = (brands, brandsAbrev) => {
  let abrevs = []
  for (let brand of brands) {
      abrevs = abrevs.concat(brandsAbrev[brand]);
  }
  return abrevs;
}

export {splitBrands, updateAbrv, toAbr, fixDate, bool2X};