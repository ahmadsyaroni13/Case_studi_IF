// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * 1. Jika [nama] bersifat falsy, maka tampilkan [Error]
 * 2. Jika [dungeon] bersifat falsy, maka tampilkan [Error]
 * 3. Jika [level] kurang dari 1 dan lebih dari 100, maka tampilkan [Error]
 * Ada 2 tipe dungeon: [Aqua] dan [Dragon]
 * 4. Jika tidak ada yang memenuhi, maka tampilkan [Dungeon yang diinput salah]
 * 5. Jika [Aqua], maka membutuhkan [level] minimal 25.
 *    a. Jika memenuhi, maka tampilkan [Anda akan mendapat 2000 exp. Bersiaplah!]
 *    b. Jika tidak memenuhi, maka tampilkan [Level anda kurang]
 * 6. Jika [Dragon], maka membutuhkan [level] minimal 75.
 *    a. Jika memenuhi, maka tampilkan [Anda akan mendapat 10000 exp. Bersiaplah!]
 *    b. Jika tidak memenuhi, maka tampilkan [Level anda kurang]
 */

// Your Code Here
let nama = "acep";
let dungeon = "dragon";
let level = "80";

if (!nama || !dungeon || level < 1 || level > 100) {
  console.log(`Error`);
} else {
  if (dungeon.toUpperCase() == "AQUA") {
    if (level >= 25) {
      console.log(`${nama.toUpperCase()} Anda mendapatkan 2000 exp.Bersiaplah`);
    } else {
      console.log(`${nama.toUpperCase()} Level anda kurang`);
    }
  } else if (dungeon.toUpperCase() == "DRAGON") {
    if (level >= 75) {
      console.log(
        `${nama.toUpperCase()} Anda mendapatkan 10000 exp.Bersiaplah`
      );
    } else {
      console.log(` ${nama.toUpperCase()} Level anda kurang`);
    }
  } else {
    console.log(`Dungeon yang anda inputkan salah`);
  }
}
