// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "id",
  brandName: "Unstable Studio",
};

export const downloadUrl = "https://github.com/abayDahln/UnstableStudio/releases/download/v0.1.0-beta/UnstableStudio.apk";
export const githubUrl = "https://github.com/abayDahln/UnstableStudio";

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Fitur", href: "#curriculum" },
    { label: "Teknologi", href: "#cinematic" },
    { label: "Seluruh Fitur", href: "#alumni" },
    { label: "Kontak", href: "#footer" },
  ],
  ctaText: "Unduh (Beta)",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Unstable Studio",
  subtitleLine1: "IDE modern berbasis Flutter untuk Android dan Desktop. Cepat, estetik, dan fungsional.",
  subtitleLine2: "Pengalaman coding profesional di perangkatmu.",
  ctaText: "Unduh Sekarang (Beta)",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "FITUR UTAMA",
  items: [
    {
      title: "Code Editor",
      slug: "code-editor",
      description: "Syntax highlighting untuk 20+ bahasa, Emmet engine untuk ekspansi cepat, dan sistem undo/redo berbasis transaksi. Performa tinggi untuk file berukuran besar.",
      image: "images/capability-2.jpg",
    },
    {
      title: "AI Agent",
      slug: "ai-agent",
      description: "Integrasi Google Gemini langsung di sidebar IDE. AI dapat membaca, menulis, mengedit, dan menghapus file secara kontekstual berdasarkan struktur proyekmu.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Terminal",
      slug: "terminal",
      description: "Terminal terintegrasi dengan xterm.dart dan flutter_pty. Dukungan Proot di Android untuk menjalankan binary Linux tanpa root access.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Fitur",
  backLinkText: "Kembali ke beranda",
  prevLabel: "Sebelumnya",
  nextLabel: "Selanjutnya",
  notFoundText: "Fitur tidak ditemukan.",
  capabilities: {
    "file-explorer": {
      title: "File Explorer",
      subtitle: "Kelola proyek dengan kecepatan tinggi.",
      paragraphs: [
        "File Explorer di Unstable Studio dirancang untuk menangani proyek dengan skala besar. Menggunakan algoritma Tree Flattening yang inovatif, sistem ini mampu menavigasi dan menampilkan ribuan file secara real-time tanpa menghambat performa aplikasi.",
        "Semua operasi file tersedia dalam satu sentuhan: buat file atau folder baru, ubah nama, hapus, pindahkan, dan gunakan drag & drop untuk mengatur ulang struktur proyek dengan intuitif. Sistem dirty state pada tab memberikan indikator visual jika ada perubahan yang belum disimpan.",
        "Fitur Global Search memungkinkanmu mencari teks di seluruh folder proyek secara instan. Pencarian ini dioptimalkan untuk bekerja cepat bahkan pada direktori dengan ribuan file, sehingga kamu tidak perlu menunggu lama untuk menemukan kode yang dicari.",
      ],
    },
    "code-editor": {
      title: "Code Editor",
      subtitle: "Editor kode performa tinggi dengan fitur modern.",
      paragraphs: [
        "Unstable Studio menggunakan re_editor sebagai core engine editor, memberikan pengalaman mengetik yang responsif dan lancar. Syntax highlighting mendukung lebih dari 20 bahasa pemrograman termasuk Dart, Kotlin, HTML, CSS, dan JavaScript dengan skema warna yang konsisten.",
        "Emmet Engine terintegrasi memungkinkan ekspansi singkatan untuk HTML, CSS, dan JS sehingga kamu bisa menulis kode lebih sedikit dengan hasil lebih banyak. Accessory bar khusus memudahkan pengetikan simbol coding yang sering digunakan seperti brackets, quotes, dan operators.",
        "Sistem undo/redo berbasis transaksi memastikan setiap perubahan tercatat dengan aman. Fitur Find & Replace dengan UI yang canggih memungkinkan pencarian dan penggantian teks dengan regex support, sedangkan persistensi posisi kursor memastikan kamu kembali ke tempat terakhir mengedit setiap kali membuka file.",
      ],
    },
    "ai-agent": {
      title: "AI Agent",
      subtitle: "Asisten pintar yang memahami proyekmu.",
      paragraphs: [
        "Unstable Studio mengintegrasikan Google Generative AI (Gemini) langsung ke dalam sidebar IDE. Chat dengan asisten pintar tanpa perlu meninggalkan editor, sehingga alur kerja coding tetap fokus dan produktif.",
        "AI Agent dilengkapi dengan Agentic Tools yang memungkinkan AI tidak hanya memberikan saran, tetapi juga melakukan aksi langsung: membaca isi file, menulis kode baru, mengedit file yang ada, dan menghapus file sesuai instruksimu. Semua operasi ini dilakukan dengan persetujuan pengguna.",
        "Kemampuan kontekstual AI memahami struktur folder dan isi file proyekmu secara keseluruhan. Ini berarti AI dapat memberikan saran yang relevan berdasarkan codebase yang sedang kamu kerjakan, bukan hanya jawaban umum dari model bahasa.",
      ],
    },
    terminal: {
      title: "Terminal",
      subtitle: "Terminal terintegrasi untuk eksekusi langsung.",
      paragraphs: [
        "Terminal terintegrasi di Unstable Studio dibangun di atas xterm.dart dan flutter_pty, memberikan pengalaman terminal yang responsif dan penuh fitur langsung di dalam IDE. Tidak perlu lagi beralih aplikasi untuk menjalankan perintah command line.",
        "Di platform Android, terminal dilengkapi dengan Proot Integration yang memungkinkan menjalankan binary Linux di dalam perangkat Android tanpa memerlukan akses root. Ini membuka kemungkinan menjalankan berbagai toolchain pengembangan langsung dari perangkat mobile.",
        "Task Runner terintegrasi memungkinkan kamu menjalankan file aktif dengan satu klik. Baik untuk kompilasi, testing, atau menjalankan skrip, semua dapat dilakukan langsung dari editor tanpa perlu mengetik perintah secara manual setiap kali.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "TEKNOLOGI",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Dibangun dengan Flutter & Dart untuk Performa Maksimal",
  description: "Unstable Studio menggunakan arsitektur modular berbasis fitur dengan Riverpod untuk state management dan GoRouter untuk navigasi. Material 3 dengan Dynamic Color memastikan UI yang konsisten dan modern di setiap platform.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "SELURUH FITUR",
  projects: [
    {
      title: "Project Initialization",
      discipline: "Foundation",
      image: "images/research-1.jpg",
    },
    {
      title: "Workbench Layout",
      discipline: "Design System",
      image: "images/research-2.jpg",
    },
    {
      title: "File Explorer",
      discipline: "Core Feature",
      image: "images/research-3.jpg",
    },
    {
      title: "Tab Management",
      discipline: "Core Feature",
      image: "images/research-4.jpg",
    },
    {
      title: "Code Editor",
      discipline: "Core Feature",
      image: "images/research-1.jpg",
    },
    {
      title: "AI Agent Gemini",
      discipline: "AI Integration",
      image: "images/research-3.jpg",
    },
    {
      title: "LSP Client",
      discipline: "Intelligence",
      image: "images/research-4.jpg",
    },
    {
      title: "Terminal Engine",
      discipline: "Runtime",
      image: "images/research-2.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Mulai Coding",
  columns: [
    {
      title: "PRODUK",
      links: [
        { label: "Unduh", href: downloadUrl },
        { label: "Changelog", href: "#" },
        { label: "Dokumentasi", href: "#" },
      ],
    },
    {
      title: "KOMUNITAS",
      links: [
        { label: "GitHub", href: githubUrl },
        { label: "Kontak", href: "#footer" },
      ],
    },
  ],
  copyright: "\u00A9 2026 Unstable Studio Team. All rights reserved.",
  bottomLinks: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat Penggunaan", href: "#" },
  ],
};
