// Object Destructuring

const band = {
  bandName: "led zeplin",
  famousSong: "hello",
  year: 1945,
  anothersong: "kyakrun",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

const { bandName, famousSong, ...restProps } = band;

console.log(bandName, famousSong);
console.log(restProps);
// destructuring
