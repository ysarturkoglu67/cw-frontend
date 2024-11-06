// *************** DATA TYPES **********

//!--------------------------------------
//! PRIMITIVE DATA TYPES
//!--------------------------------------

//! *********** NUMBER DATA TYPES *******
// Number : Tamsayılar ve ondalıklı sayıları tutar.

const age=40
console.log(typeof age)

//? MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.

let pi=Math.PI
console.log(pi)

// Dairenin alanı
const r=8
console.log(pi*r*r)
console.log(pi*(r**2))
/* -------------------------------------------------------------------------- */
// Math pow metodu üs almak için kullanılır
console.log(pi*(Math.pow(r,2)))
console.log(Math.pow(3,5)) // 3ün 5. kuvvetini bulduran metod
console.log(2*pi*r)
let cevre=2*pi*r
/* -------------------------------------------------------------------------- */
// Decimal ( Ondalıklı) bir sayının ondalık kısımlarını yuvarlama işlemi

console.log(Math.round(cevre))

const num=34.67
console.log(Math.round(num))
// floor:en yakın küçük olan sayıya yuvarlar
console.log("floor:",Math.floor(num))
//ceil: en yakın büyük olan sayıya yuvarlar
const deger=34.1445345
console.log(Math.ceil(num))
console.log("ceil:",Math.ceil(deger))

// Math..trunc() Decimal sayıların sadece tam kısmını alır
console.log("trunc:",Math.trunc(deger))

//.toFixed() ile ondalıkla kısımdan kaç basamağın alınacağı belirtilir.Ama toFixed uygulanan sonra stringe dönüşür
console.log(deger.toFixed(4))

// Max: Bir sayı dizisindeki en büyüğü bulur.
console.log(Math.max(5,3,62,87,2343,5654,65.45,-34))
//Min: Bir sayı dizisindeki en küçüğü bulur
console.log(Math.min(5,3,62,87,2343,5654,65.45,-34))

// Random metodu rastgele bir sayı üretmek için kullanılır. 0-1 arasında bir sayı üretir.

console.log(Math.random()*10)

let rastgeleSayi=Math.trunc(Math.random()*100)
console.log(rastgeleSayi)

let sayi=(Math.random()*100).toFixed(2)
console.log(sayi)
