const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

export { rand,uniqueRand };
