// Konfigurasi Website
const CONFIG = {
    // Nama wali kelas (bisa diganti)
    waliKelas: "Ibu/Bapak [Nama Wali Kelas]",
    
    // Daftar foto untuk galeri (gunakan foto di folder assets/images/)
    galleryImages: [
        { src: "assets/images/foto1.jpg", caption: "" },
        { src: "assets/images/foto2.jpg", caption: "" },
        { src: "assets/images/foto3.jpg", caption: "" },
        { src: "assets/images/foto4.JPG", caption: "" },
        { src: "assets/images/foto5.JPG", caption: "" },
        { src: "assets/images/foto6.jpg", caption: "" },
        { src: "assets/images/foto10.jpg", caption: "" },
        { src: "assets/images/foto11.jpg", caption: "" },
        { src: "assets/images/foto12.jpg", caption: "" },
        { src: "assets/images/foto13.jpg", caption: "" },
        { src: "assets/images/foto14.jpg", caption: "" },
        { src: "assets/images/foto15.jpg", caption: "" },
        { src: "assets/images/foto16.jpg", caption: "" },
        { src: "assets/images/foto17.jpg", caption: "" },
        { src: "assets/images/foto18.jpg", caption: "" },
        { src: "assets/images/foto19.jpg", caption: "" },
        { src: "assets/images/foto20.jpg", caption: "" },
        { src: "assets/images/foto21.jpg", caption: "" },
        { src: "assets/images/foto22.jpg", caption: "" },
        { src: "assets/images/foto23.jpg", caption: "" },
        { src: "assets/images/foto24.jpg", caption: "" },
        { src: "assets/images/foto25.JPG", caption: "" },
        { src: "assets/images/foto26.JPG", caption: "" },
        { src: "assets/images/foto27.JPG", caption: "" },
        { src: "assets/images/foto28.JPG", caption: "" },
        { src: "assets/images/foto29.jpg", caption: "" },
        { src: "assets/images/foto30.jpeg", caption: "" },
        { src: "assets/images/foto31.jpg", caption: "" },
        { src: "assets/images/foto32.jpg", caption: "" },
        { src: "assets/images/foto33.jpg", caption: "" },
        { src: "assets/images/foto34.JPG", caption: "" },
        { src: "assets/images/foto35.JPG", caption: "" },
        { src: "assets/images/foto36.jpg", caption: "" },
        { src: "assets/images/foto37.jpg", caption: "" },
        { src: "assets/images/foto38.jpg", caption: "" },
        { src: "assets/images/foto39.jpg", caption: "" },
        { src: "assets/images/foto40.jpg", caption: "" },
        { src: "assets/images/foto41.jpg", caption: "" },
        { src: "assets/images/foto43.jpg", caption: "" },
        { src: "assets/images/foto44.jpg", caption: "" }],
    
    // ID video YouTube (ganti dengan video yang sesuai)
    youtubeVideoId: "dQw4w9WgXcQ",
    
    // Nama file untuk menyimpan ucapan (untuk GitHub Pages, bisa menggunakan GitHub API atau file JSON)
    messagesFile: "messages.json"
};

// Inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigasi mobile
    setupMobileNav();
    
    // Load data
    loadGalleryImages();
    loadMessages();
    
    // Setup form
    setupUcapanForm();
    
    // Setup modal untuk galeri
    setupImageModal();
    
    // Setup back to top button
    setupBackToTop();
    
    // Setup animasi scroll
    setupScrollAnimations();
    
    // Setup tahun di footer
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} Five D. Selamat berjuang di masa depan!`;
});

// Setup navigasi mobile
function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Load gambar galeri
function loadGalleryImages() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Jika tidak ada gambar di CONFIG, gunakan gambar default
    const images = CONFIG.galleryImages.length > 0 
        ? CONFIG.galleryImages 
        : [
            { src: "assets/images/foto1.jpg", caption: "Kenangan 1" },
            { src: "assets/images/foto2.jpg", caption: "Kenangan 2" },
            { src: "assets/images/foto3.jpg", caption: "Kenangan 3" }
        ];
    
    galleryGrid.innerHTML = '';
    
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" data-caption="${image.caption}">
        `;
        
        galleryItem.addEventListener('click', function() {
            openImageModal(image.src, image.caption);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup modal untuk gambar galeri
function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    
    // Tutup modal saat tombol close diklik
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Tutup modal saat klik di luar gambar
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Tutup modal dengan tombol ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
}

// Buka modal gambar
function openImageModal(src, caption) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImage.src = src;
    modalCaption.textContent = caption;
    modal.style.display = 'flex';
}

// Setup form ucapan
function setupUcapanForm() {
    const form = document.getElementById('ucapanForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value.trim();
        const pesan = document.getElementById('pesan').value.trim();
        
        if (!nama || !pesan) {
            alert('Harap isi nama dan pesan!');
            return;
        }
        
        // Buat objek ucapan baru
        const ucapan = {
            id: Date.now(),
            nama: nama,
            pesan: pesan,
            tanggal: new Date().toISOString(),
            tanggalTampil: new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        
        // Simpan ucapan
        saveUcapan(ucapan);
        
        // Reset form
        form.reset();
        
        // Tampilkan ucapan baru
        addUcapanToList(ucapan);
        
        // Tampilkan konfirmasi
        alert('Terima kasih! Ucapan kamu telah dikirim.');
    });
}

// Simpan ucapan (untuk GitHub Pages, ini akan menyimpan di localStorage sebagai fallback)
function saveUcapan(ucapan) {
    // Coba ambil ucapan yang ada dari localStorage
    let messages = JSON.parse(localStorage.getItem('kelulusanMessages')) || [];
    
    // Tambahkan ucapan baru
    messages.unshift(ucapan); // Tambahkan di awal array
    
    // Simpan ke localStorage
    localStorage.setItem('kelulusanMessages', JSON.stringify(messages));
    
    // Catatan: Di GitHub Pages, kita tidak bisa menyimpan ke file .json secara langsung
    // Solusi alternatif: Gunakan GitHub API jika ingin menyimpan ke repo
    // Untuk sekarang, kita gunakan localStorage sebagai solusi sementara
    console.log('Ucapan disimpan ke localStorage. Untuk penyimpanan permanen, pertimbangkan menggunakan GitHub API.');
}

// Load ucapan dari localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('kelulusanMessages')) || [];
    const ucapanList = document.getElementById('ucapanList');
    
    if (messages.length === 0) {
        // Tampilkan pesan default jika tidak ada ucapan
        ucapanList.innerHTML = `
            <div class="ucapan-item">
                <div class="ucapan-header">
                    <div class="ucapan-nama"><i class="fas fa-user"></i> Wali Kelas</div>
                    <div class="ucapan-tanggal">Hari ini</div>
                </div>
                <div class="ucapan-pesan">
                    Jadilah yang pertama mengirim ucapan! Klik "Kirim Ucapan" di atas.
                </div>
            </div>
        `;
        return;
    }
    
    // Kosongkan daftar ucapan
    ucapanList.innerHTML = '';
    
    // Tampilkan semua ucapan
    messages.forEach(message => {
        addUcapanToList(message);
    });
}

// Tambahkan ucapan ke daftar
function addUcapanToList(ucapan) {
    const ucapanList = document.getElementById('ucapanList');
    
    const ucapanItem = document.createElement('div');
    ucapanItem.className = 'ucapan-item';
    ucapanItem.innerHTML = `
        <div class="ucapan-header">
            <div class="ucapan-nama"><i class="fas fa-user"></i> ${ucapan.nama}</div>
            <div class="ucapan-tanggal"><i class="far fa-clock"></i> ${ucapan.tanggalTampil}</div>
        </div>
        <div class="ucapan-pesan">${ucapan.pesan}</div>
    `;
    
    // Tambahkan di awal daftar
    if (ucapanList.firstChild) {
        ucapanList.insertBefore(ucapanItem, ucapanList.firstChild);
    } else {
        ucapanList.appendChild(ucapanItem);
    }
}

// Setup back to top button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // Tampilkan/sembunyikan button saat scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll ke atas saat button diklik
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup animasi saat scroll
function setupScrollAnimations() {
    // Buat observer untuk animasi saat elemen terlihat
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Amati semua elemen dengan kelas 'animate-on-scroll'
    document.querySelectorAll('.wali-kelas-card, .gallery-item, .video-container, .form-container').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Fungsi untuk ekspor data ucapan ke JSON (untuk backup)
function exportMessagesToJSON() {
    const messages = JSON.parse(localStorage.getItem('kelulusanMessages')) || [];
    const dataStr = JSON.stringify(messages, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'ucapan-kelulusan.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Fungsi untuk import data ucapan dari JSON
function importMessagesFromJSON(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const messages = JSON.parse(e.target.result);
            localStorage.setItem('kelulusanMessages', JSON.stringify(messages));
            loadMessages();
            alert('Data ucapan berhasil diimpor!');
        } catch (error) {
            alert('Error: File JSON tidak valid!');
            console.error(error);
        }
    };
    
    reader.readAsText(file);
}

// Tambahkan tombol ekspor/impor untuk admin (opsional)
// Hapus komentar di bawah jika ingin menambahkan fitur admin
/*
function setupAdminTools() {
    // Tambahkan tombol admin di footer
    const footerBottom = document.querySelector('.footer-bottom');
    const adminDiv = document.createElement('div');
    adminDiv.innerHTML = `
        <button id="exportBtn" class="btn btn-secondary" style="margin: 5px; padding: 5px 10px; font-size: 0.8rem;">
            <i class="fas fa-download"></i> Ekspor Ucapan
        </button>
        <input type="file" id="importFile" accept=".json" style="display: none;">
        <button id="importBtn" class="btn btn-secondary" style="margin: 5px; padding: 5px 10px; font-size: 0.8rem;">
            <i class="fas fa-upload"></i> Impor Ucapan
        </button>
    `;
    footerBottom.appendChild(adminDiv);
    
    document.getElementById('exportBtn').addEventListener('click', exportMessagesToJSON);
    document.getElementById('importBtn').addEventListener('click', function() {
        document.getElementById('importFile').click();
    });
    
    document.getElementById('importFile').addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            importMessagesFromJSON(e.target.files[0]);
        }
    });
}

// Panggil fungsi admin jika diperlukan
// setupAdminTools();
*/


const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfb8T8A8yAt-XxPMOwe-2vlEt-JSBQzBLuSBCS3JrX6le6oqhw1w7B_oZslSc_XjeC/exec';
const ucapanForm = document.getElementById('ucapanForm');
const ucapanList = document.getElementById('ucapanList');
const statusPesan = document.getElementById('formStatus');

// 1. Fungsi Ambil Data (GET)
async function muatUcapan() {
    try {
        const response = await fetch(SCRIPT_URL);
        const data = await response.json();
        
        ucapanList.innerHTML = ''; // Bersihkan list
        
        if (data.length === 0) {
            ucapanList.innerHTML = '<p>Belum ada ucapan. Jadilah yang pertama!</p>';
            return;
        }

        data.reverse().forEach(item => { // Balik agar ucapan terbaru di atas
            const card = document.createElement('div');
            card.className = 'ucapan-item'; // Tambahkan styling CSS untuk class ini
            card.innerHTML = `
                <div class="ucapan-header">
                    <strong>${item.nama}</strong>
                    <small>${item.tanggal}</small>
                </div>
                <p>${item.pesan}</p>
                <hr style="border: 0.5px solid #eee; margin: 10px 0;">
            `;
            ucapanList.appendChild(card);
        });
    } catch (e) {
        ucapanList.innerHTML = '<p>Gagal memuat ucapan.</p>';
    }
}

// 2. Fungsi Kirim Data (POST)
ucapanForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = 'Mengirim...';
    
    statusPesan.style.display = 'block';
    statusPesan.textContent = 'Sedang mengirim pesan...';

    const payload = {
        nama: document.getElementById('nama').value,
        pesan: document.getElementById('pesan').value
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(res => {
        statusPesan.textContent = 'Ucapan berhasil terkirim!';
        statusPesan.style.color = 'green';
        ucapanForm.reset();
        muatUcapan(); // Refresh daftar ucapan
    })
    .catch(err => {
        statusPesan.textContent = 'Waduh, gagal mengirim ucapan.';
        statusPesan.style.color = 'red';
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Ucapan';
    });
});

// Jalankan saat halaman dibuka
document.addEventListener('DOMContentLoaded', muatUcapan);
