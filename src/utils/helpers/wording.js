const makePascal = (word) =>
  word.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());

export { makePascal };
