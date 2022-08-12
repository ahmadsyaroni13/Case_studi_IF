// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * 1. Jika [nama] bersifat falsy, maka tampilkan [Error]
 * 2. Dapatkan sebuah bilangan bulat acak dari 1 sampai jumlah karakter [nama]
 * [guess] adalah sebuah kata misteri yang didapat dari skema berikut
 * 3. Jika:
 *    a. Hasil pekalian jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [BA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AB]
 *    b. Hasil pembagian jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [CA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AC]
 *    c. Hasil penjumlahan jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [DA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AD]
 *    d. Hasil pengurangan jumlah karakter [nama] dan bilangan bulat acak yang didapat:
 *       1) Jika hasilnya genap, maka [guess] ditambahkan [EA]
 *       2) Jika hasilnya ganjil, maka [guess] ditambahkan [AE]
 * 4. Tambilkan [guess] yang di dapat
 *
 * Note:
 * 1. Hasil operasi harus selalu bilangan bulat
 * 2. Contoh Jawaban ABACADAE, ABCAADEA, BAACDAAE, dll
 *
 */

// Your Code Here
let nama = "acep";
let guess = "";
let bl = Math.round(Math.random() * nama.length);
if (!nama) {
  console.log(`Error`);
} else {
  let pk = nama.length * bl;
  let pmbg = Math.round(nama.length / bl);
  let jml = nama.length + bl;
  let png = nama.length - bl;
  if (pk % 2 == 0) {
    guess = guess + "AB";
  } else {
    guess = guess + "BA";
  }

  if (pmbg % 2 == 0) {
    guess = guess + "CA";
  } else {
    guess = guess + "AC";
  }

  if (png % 2 == 0) {
    guess = guess + "DA";
  } else {
    guess = guess + "AD";
  }

  if (jml % 2 == 0) {
    guess = guess + "EA";
  } else {
    guess = guess + "AE";
  }
}
console.log(guess);
