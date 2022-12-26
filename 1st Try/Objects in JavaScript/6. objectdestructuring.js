// object destructuring
const band = {
  bandName: "yeshua ministries",
  famouseSong: "Le chal Mujhe",
};

// const bandName = band.bandName;
// const famouseSong = band.famouseSong;
// console.log(bandName, famouseSong);

const { bandName: lol1, famouseSong } = band;
console.log(lol1);
