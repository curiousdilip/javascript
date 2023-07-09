// object destructuring

const band = {
    bandName: "zed Zepline",
    famousSong: "staiway to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong

const { bandName, famousSong, ...restProps } = band;

console.log(bandName, famousSong)
console.log(restProps)

