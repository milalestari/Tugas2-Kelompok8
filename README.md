# Tugas Praktikum: Sistem Database Sederhana

## **Anggota Kelompok 8**
1. Mila Lestari (2208107010002)
2. Pryta Rosela (2208107010046)
3. Widya Nurul Sukma (2208107010054)

# 📚 Perpustakaan Digital CLI

Perpustakaan Digital CLI adalah sistem manajemen buku sederhana berbasis Node.js yang menggunakan JSON sebagai database. Sistem ini memungkinkan pengguna untuk melihat daftar buku, menambahkan buku, mencari buku, menghapus buku, memperbarui informasi buku, serta menampilkan buku terbaru, tertua, dan rekomendasi acak.

---

## ✨ Fitur Utama
1. **Lihat Daftar Buku** – Menampilkan semua buku yang tersedia dalam database.
2. **Tambah Buku** – Menambahkan buku baru ke dalam database.
3. **Cari Buku** – Mencari buku berdasarkan judul.
4. **Hapus Buku** – Menghapus buku dari database berdasarkan nomor urutnya.
5. **Update Informasi Buku** – Mengubah judul, penulis, atau tahun terbit buku.
6. **Tampilkan Buku Terbaru** – Menampilkan buku dengan tahun terbit terbaru.
7. **Tampilkan Buku Tertua** – Menampilkan buku dengan tahun terbit paling lama.
8. **Hitung Jumlah Buku** – Menampilkan total jumlah buku dalam database.
9. **Rekomendasi Buku Acak** – Memberikan rekomendasi satu buku secara acak dari database.
10. **Keluar** – Mengakhiri program.

---

## 🛠 Instalasi dan Penggunaan

### 📥 1. Clone Repository
```bash
$ git clone https://github.com/milalestari/Tugas2-Kelompok8.git
$ cd Tugas2-Kelompok8
```

### 🔧 2. Instal Dependensi
```bash
$ npm install
```

### ▶️ 3. Jalankan Program
```bash
$ node index.js
```

---

## 📌 Cara Menggunakan

Saat menjalankan program, Anda akan disajikan dengan menu seperti berikut:
```
📚 PERPUSTAKAAN DIGITAL 📚
Pilih aksi:
1. Lihat daftar buku
2. Tambah buku
3. Cari buku berdasarkan judul
4. Hapus buku
5. Update informasi buku
6. Tampilkan buku terbaru
7. Tampilkan buku tertua
8. Hitung jumlah buku
9. Rekomendasi buku acak
10. Keluar
```

Cukup masukkan nomor aksi yang ingin dilakukan, lalu ikuti instruksi yang diberikan di terminal.

---

## 📂 Struktur Project
```
perpustakaan-cli/
│── books.json  # Database dalam format JSON
│── index.js    # File utama sistem CLI
│── package.json # File konfigurasi Node.js
└── README.md   # Dokumentasi proyek
```

---

## 📜 Contoh Data dalam `books.json`
```json
[
  {
    "title": "Laskar Pelangi",
    "author": "Andrea Hirata",
    "year": "2005"
  },
  {
    "title": "Bumi Manusia",
    "author": "Pramoedya Ananta Toer",
    "year": "1980"
  }
]
```

---

## 📦 Dependensi yang Digunakan
- [Node.js](https://nodejs.org/) – Runtime JavaScript
- [chalk](https://www.npmjs.com/package/chalk) – Pewarnaan teks di terminal
- [boxen](https://www.npmjs.com/package/boxen) – Membuat tampilan kotak dalam terminal
- [cli-table3](https://www.npmjs.com/package/cli-table3) – Menampilkan daftar buku dalam bentuk tabel
- [readline-sync](https://www.npmjs.com/package/readline-sync) – Input interaktif dari pengguna
