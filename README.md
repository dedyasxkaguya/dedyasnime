# DedyasNime

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-4.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

**DedyasNime** adalah aplikasi web single-page (SPA) yang responsif dan modern untuk menjelajahi dunia anime. Dengan antarmuka yang intuitif dan performa optimal, pengguna dapat menemukan informasi lengkap tentang berbagai anime, karakter, dan detail terkait.

## ✨ Fitur Utama

### 🎬 Penjelajahan Konten
- **Katalog Anime** - Jelajahi koleksi anime dengan tata letak grid yang menarik
- **Pencarian Lanjutan** - Temukan anime favorit dengan sistem pencarian yang efisien
- **Filter & Kategori** - Filter berdasarkan genre, tahun rilis, rating, dan lainnya

### 🎨 Pengalaman Pengguna
- **Desain Responsif** - Optimal di semua perangkat (desktop, tablet, mobile)
- **Animasi Halus** - Menggunakan Aos (Animate On Scroll) untuk transisi yang menarik
- **Dark/Light Mode** - Tema yang dapat disesuaikan dengan preferensi pengguna
- **Loading Animation** - Animasi loading kustom yang menarik

### 🔧 Fitur Teknis
- **Single Page Application** - Navigasi cepat tanpa reload halaman
- **State Management** - Manajemen state yang efisien dengan React
- **Pemberitahuan Interaktif** - Notifikasi menggunakan SweetAlert2
- **Optimasi Performa** - Dibangun dengan Vite untuk build time yang cepat

## 🛠️ Tech Stack

### Frontend Framework
- **[React 18.2.0](https://reactjs.org/)** - Library UI modern dengan hooks
- **[Vite 4.0.0](https://vitejs.dev/)** - Build tool dan development server

### Styling & UI
- **[Bootstrap 5.3.0](https://getbootstrap.com/)** - CSS framework responsif
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** - Set ikon yang konsisten
- **CSS3 Modern** - Custom properties, Grid, Flexbox, Animations

### Enhanced User Experience
- **[Aos](https://michalsnik.github.io/aos/)** - Animate On Scroll library
- **[SweetAlert2](https://sweetalert2.github.io/)** - Modal dan notifikasi yang beautiful

### Typography
- **[Google Fonts](https://fonts.google.com/)** - Raleway, Montserrat, M PLUS Rounded 1c

## 🚀 Quick Start

### Prerequisites
Pastikan Anda memiliki:
- **Node.js** (versi 18.0 atau lebih tinggi)
- **npm** atau **yarn** sebagai package manager

### Installation & Development

1. **Clone Repository**
   ```bash
   git clone https://github.com/dedyas/dedyasnime.git
   cd dedyasnime
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Environment Setup** (Jika diperlukan)
   ```bash
   # Copy environment example
   cp .env.example .env
   # Edit file .env dengan konfigurasi yang diperlukan
   ```

4. **Jalankan Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. **Buka di Browser**
   ```
   http://localhost:5173
   ```

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Preview build production
npm run preview
```

## 📁 Project Structure

```
dedyasnime/
├── public/                 # Static assets
│   ├── images/            # Gambar dan ikon
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Komponen React
│   │   ├── Layout/        # Komponen layout (Navbar, Sidebar)
│   │   ├── Anime/         # Komponen terkait anime
│   │   ├── Common/        # Komponen umum (Loading, Modal)
│   │   └── UI/            # Komponen UI kecil
│   ├── pages/             # Halaman aplikasi
│   │   ├── Home/          # Halaman beranda
│   │   ├── AnimeDetail/   # Detail anime
│   │   └── Search/        # Halaman pencarian
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # File CSS dan styling
│   ├── App.jsx            # Komponen utama
│   └── main.jsx           # Entry point
├── package.json
├── vite.config.js         # Konfigurasi Vite
└── README.md
```

## 🎯 Fitur Detail

### Navigation System
- **Dual Navigation** - Navbar berbeda untuk desktop (`#nav0`) dan mobile (`#nav1`)
- **Sidebar** - Menu samping untuk navigasi tambahan (`#sideBar`)
- **Responsive Menu** - Adaptif untuk semua ukuran layar

### Anime Display
- **Grid Layout** - Presentasi anime yang terorganisir
- **Character Grid** - Tampilan karakter dalam grid (`#charGrid`)
- **Detail Information** - Informasi lengkap setiap anime

### Performance Features
- **Lazy Loading** - Optimasi loading gambar dan konten
- **Code Splitting** - Pembagian bundle yang optimal
- **Efficient Rendering** - Optimasi re-render komponen

## 🤝 Contributing

Kami menyambang kontribusi! Silakan ikuti langkah-langkah berikut:

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Development Guidelines
- Gunakan consistent coding style
- Tulis komentar yang jelas untuk kode kompleks
- Test di multiple browser sebelum commit
- Update dokumentasi jika diperlukan

## 📝 Scripts Available

```bash
npm run dev          # Development server
npm run build        # Build production
npm run preview      # Preview production build
npm run lint         # Linting code
```

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅     |
| Firefox | 88+     | ✅     |
| Safari  | 14+     | ✅     |
| Edge    | 90+     | ✅     |

## 📄 License

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 🙏 Acknowledgments

- Data anime mungkin berasal dari [Jikan API](https://jikan.moe/) atau sumber lainnya
- Icons oleh [Bootstrap Icons](https://icons.getbootstrap.com/)
- Font oleh [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**Dibuat dengan ❤️ menggunakan React & Vite**

[📖 Dokumentasi](https://github.com/dedyas/dedyasnime/wiki) • 
[🐛 Laporkan Bug](https://github.com/dedyas/dedyasnime/issues) • 
[💬 Diskusi](https://github.com/dedyas/dedyasnime/discussions)

</div>