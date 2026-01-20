# Website Perpisahan Kelas & Ucapan Kelulusan

Website perpisahan kelas yang mobile-first, elegan, dan emosional untuk menampilkan kenangan, kata-kata wali kelas, dan mengumpulkan ucapan kelulusan.

## Fitur

- **Halaman Utama**: Banner dan sambutan kelulusan
- **Kata-kata Wali Kelas**: Pesan khusus dari wali kelas
- **Galeri Foto**: Grid foto responsif dengan mode fullscreen
- **Video Kenangan**: Embed video YouTube atau video lokal
- **Form Ucapan**: Formulir untuk mengirim ucapan kelulusan
- **Daftar Ucapan**: Menampilkan semua ucapan yang dikirim
- **Responsive Design**: Tampilan optimal di semua perangkat

## Instalasi dan Setup

1. **Clone atau download repository ini**
2. **Siapkan file gambar dan video**:
   - Letakkan foto banner di `assets/images/banner.jpg`
   - Letakkan foto wali kelas di `assets/images/wali-kelas.jpg`
   - Tambahkan foto-foto kenangan di folder `assets/images/` (foto1.jpg, foto2.jpg, dst.)
   - Jika menggunakan video lokal, letakkan di `assets/videos/perpisahan.mp4`

3. **Kustomisasi konten**:
   - Edit file `index.html` untuk mengganti teks sesuai kebutuhan
   - Edit file `script.js` untuk mengkonfigurasi:
     - Nama wali kelas (variabel `CONFIG.waliKelas`)
     - Daftar foto galeri (variabel `CONFIG.galleryImages`)
     - ID video YouTube (variabel `CONFIG.youtubeVideoId`)

4. **Jalankan website**:
   - Buka file `index.html` di browser
   - Atau gunakan local server seperti Live Server di VS Code

## Deploy ke GitHub Pages

1. **Buat repository GitHub baru**
2. **Upload semua file** ke repository
3. **Pergi ke Settings > Pages**
4. **Pilih branch main** sebagai source
5. **Klik Save** - website akan live di `https://username.github.io/repository-name`

## Catatan Penting untuk GitHub Pages

⚠️ **GitHub Pages adalah static hosting**, jadi:
- Tidak ada backend server
- Form ucapan disimpan di **localStorage browser pengunjung**
- Ucapan tidak akan tersimpan secara permanen di server

### Solusi untuk Penyimpanan Ucapan Permanen

1. **Gunakan GitHub API** (lebih kompleks):
   - Membutuhkan GitHub Personal Access Token
   - Ucapan disimpan langsung ke file `messages.json` di repo
   - Perlu implementasi GitHub API di JavaScript

2. **Gunakan layanan form pihak ketiga** seperti:
   - Formspree
   - Netlify Forms
   - Google Forms

3. **Tetap gunakan localStorage** (sederhana):
   - Ucapan hanya tersimpan di browser pengunjung
   - Admin bisa ekspor data dari browser pengunjung

## Struktur File
