// Data nilai siswa

// 1. Data awal
let nilaiSiswa = [75, 80, 90, 85, 70];

// 2. Tambah nilai baru ke akhir array
nilaiSiswa.push(95); 
console.log("Setelah push:", nilaiSiswa); // [75, 80, 90, 85, 70, 95]

// 3. Hapus nilai terakhir
nilaiSiswa.pop();
console.log("Setelah pop:", nilaiSiswa); // [75, 80, 90, 85, 70]

// 4. Tambah nilai di awal array
nilaiSiswa.unshift(65);
console.log("Setelah unshift:", nilaiSiswa); // [65, 75, 80, 90, 85, 70]

// 5. Hapus nilai pertama
nilaiSiswa.shift();
console.log("Setelah shift:", nilaiSiswa); // [75, 80, 90, 85, 70]

// 6. Urutkan nilai dari kecil ke besar
nilaiSiswa.sort((a, b) => a - b);
console.log("Setelah sort:", nilaiSiswa); // [70, 75, 80, 85, 90]

// 7. Ambil 3 nilai tertinggi (pakai slice setelah sort)
let nilaiTertinggi = nilaiSiswa.slice(-3);
console.log("3 Nilai Tertinggi:", nilaiTertinggi); // [80, 85, 90]

// 8. Gabungkan dengan nilai siswa lain
let nilaiLain = [60, 78];
let semuaNilai = nilaiSiswa.concat(nilaiLain);
console.log("Semua nilai:", semuaNilai);

// 9. Ubah ke string
console.log("Semua nilai (string):", semuaNilai.join(', '));
