// Inisialisasi string
var str = 'I have completed my studies, and completed ServiceNow course and completed some other trainings';

// ====================
// 🔸 Metode String
// ====================

// Mengecek apakah string diawali dengan 'I have'
console.log(str.startsWith('I have')); 
// Mengecek apakah string diakhiri dengan 'trainings'
console.log(str.endsWith('trainings'));

// Mengukur panjang karakter string
console.log(str.length); //jumlah karakter

// Mengubah semua huruf menjadi huruf kecil
console.log(str.toLowerCase()); 

// Mengubah semua huruf menjadi huruf besar
console.log(str.toUpperCase());

// Mengecek apakah string mengandung kata 'completed'
console.log(str.includes('completed'));

// Memecah string berdasarkan kata 'ServiceNow'
console.log(str.split('ServiceNow')); //hasil: array [sebelum, sesudah]

// Membalik seluruh karakter string
console.log(str.split('').reverse().join('')); //dibalik semua karakter

// Membalik lalu trim (hapus spasi diawal dan akhir)
console.log(str.split('').reverse().join('').trim()); //sama seperti atas, tapi tanpa spasi depan/belakang

// Menampilkan karakter di indeks ke-5 (dihitung dari 0)
console.log(str.trim().charAt(5));

// Mendapatkan kode ASCII dari karakter di indeks ke-5
console.log(str.trim().charCodeAt(5)); //hasil angka

// ====================
// 🔸 Pencarian Index
// ====================

// Posisi pertama 'completed'
console.log(str.indexOf('completed')); //hasil angka (indeks pertama ditemukan)

// Posisi terakhir 'completed'
console.log(str.lastIndexOf('completed')); //hasil angka (indeks terakhir ditemukan)

// ====================
// 🔸 Penghapusan Spasi
// ====================

// Menghapus spasi depan & belakang
console.log(str.trim()); //string bersih tanpa spasi luar

// Hanya hapus spasi di depan
console.log(str.trimStart()); //

// Hanya hapus spasi di belakang
console.log(str.trimEnd()); //

// ====================
// 🔸 Mengganti Kata
// ====================

// Mengganti 'completed' pertama dengan 'finished'
console.log(str.replace('completed', 'finished')); //hanya yang pertama

// Mengganti semua 'completed' dengan 'finished'
console.log(str.replaceAll('completed', 'finished')); //semua kata

// ====================
// 🔸 Slice, Substr, Substring
// ====================

// Simpan string yang sudah di-trim
var newStr = str.trim();

// Mengambil substring dari indeks 0 sampai sebelum 28
console.log(newStr.slice(0, 28)); //karakter ke-0 sampai ke-27

// Mengambil 5 karakter mulai dari indeks ke-0
console.log(newStr.substr(0, 5)); //5 karakter dari depan

// Mengambil substring dari 0 ke 27 (urutan terbalik diabaikan)
console.log(newStr.substring(0, 27)); //sama dengan slice(0,27)