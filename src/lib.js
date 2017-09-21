let splitBrands = (brands) => {
  return brands.replace(/,\s/g, ',').split(',');
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

export {splitBrands, updateAbrv, toAbr};