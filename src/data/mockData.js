/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SAMPLE_MEAL_SLOTS = [
  {
    slotId: 'pagi',
    label: 'Sarapan Pagi',
    timeRange: '07:00 - 09:00',
    selectedOptionIndex: 0,
    options: [
      {
        id: 'sarapan-1',
        title: 'Nasi Orak-Arik Telur Buncis',
        subtitle: 'Praktis, tinggi serat & protein dalam 10 menit',
        estimatedCost: 12000,
        cookTimeMinutes: 10,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Telur Ayam (2 butir)', quantity: '2 butir', cost: 4500, defaultOwned: false },
          { name: 'Buncis iris tipis', quantity: '100g', cost: 3500, defaultOwned: false },
          { name: 'Bawang merah & putih', quantity: '3 siung', cost: 2000, defaultOwned: true },
          { name: 'Kecap asin & merica', quantity: '1 sdm', cost: 1000, defaultOwned: true },
          { name: 'Nasi putih (hangat)', quantity: '1 porsi', cost: 1000, defaultOwned: true },
        ],
        tags: ['Cepat', 'Tinggi Protein', 'Hemat Bumbu'],
      },
      {
        id: 'sarapan-2',
        title: 'Tahu Tumis Tauge Saus Tiram',
        subtitle: 'Segar dan renyah, minim minyak goreng',
        estimatedCost: 9500,
        cookTimeMinutes: 8,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Tahu putih kotak', quantity: '2 buah', cost: 3500, defaultOwned: false },
          { name: 'Tauge segar', quantity: '150g', cost: 3000, defaultOwned: false },
          { name: 'Saus tiram sachet', quantity: '1 bungkus', cost: 2000, defaultOwned: true },
          { name: 'Cabai rawit iris', quantity: '3 biji', cost: 1000, defaultOwned: false },
        ],
        tags: ['Budget Friendly', 'Kurang dari 10 Menit'],
      },
      {
        id: 'sarapan-3',
        title: 'Oatmeal Gurih Telur Rebus & Abon',
        subtitle: 'Cukup seduh air panas rice cooker, tanpa kompor',
        estimatedCost: 11000,
        cookTimeMinutes: 5,
        equipment: 'Rice Cooker',
        ingredients: [
          { name: 'Quick Oat instant', quantity: '4 sdm', cost: 3500, defaultOwned: true },
          { name: 'Telur rebus setengah matang', quantity: '1 butir', cost: 2500, defaultOwned: false },
          { name: 'Abon sapi / ayam kos', quantity: '1 sdm', cost: 3000, defaultOwned: true },
          { name: 'Kecap asin & minyak wijen', quantity: '1 sdt', cost: 2000, defaultOwned: true },
        ],
        tags: ['Tanpa Kompor', 'Super Kilat'],
      },
    ],
  },
  {
    slotId: 'siang',
    label: 'Makan Siang',
    timeRange: '12:00 - 13:30',
    selectedOptionIndex: 0,
    options: [
      {
        id: 'siang-1',
        title: 'Tempe Mendoan Pedas Manis + Tumis Kangkung',
        subtitle: 'Menu andalan warteg versi hemat rumahan',
        estimatedCost: 15500,
        cookTimeMinutes: 18,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Tempe papan (setengah)', quantity: '150g', cost: 4000, defaultOwned: false },
          { name: 'Kangkung ikat segar', quantity: '1 ikat', cost: 3500, defaultOwned: false },
          { name: 'Cabai merah & rawit', quantity: '5 buah', cost: 3000, defaultOwned: false },
          { name: 'Bawang merah & putih', quantity: '4 siung', cost: 2500, defaultOwned: true },
          { name: 'Minyak goreng & garam', quantity: 'Secukupnya', cost: 2500, defaultOwned: true },
        ],
        tags: ['Favorit Anak Kos', 'Kenyang Maksimal'],
      },
      {
        id: 'siang-2',
        title: 'Ayam Suwir Balado Rice Cooker',
        subtitle: 'Matang sempurna sekalian masak nasi di rice cooker',
        estimatedCost: 22000,
        cookTimeMinutes: 25,
        equipment: 'Rice Cooker',
        ingredients: [
          { name: 'Dada ayam fillet', quantity: '150g', cost: 11000, defaultOwned: false },
          { name: 'Sambal balado instan', quantity: '1 sachet', cost: 3500, defaultOwned: true },
          { name: 'Tomat merah kecil', quantity: '1 buah', cost: 2000, defaultOwned: false },
          { name: 'Beras kosan', quantity: '1 cup', cost: 3500, defaultOwned: true },
          { name: 'Minyak & daun jeruk', quantity: '1 lembar', cost: 2000, defaultOwned: true },
        ],
        tags: ['High Protein', 'Rice Cooker Only'],
      },
      {
        id: 'siang-3',
        title: 'Sop Bening Sayur Telur Puyuh',
        subtitle: 'Segar menghangatkan, ramah pencernaan',
        estimatedCost: 17000,
        cookTimeMinutes: 15,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Paket sayur sop (wortel, kol, seledri)', quantity: '1 bungkus', cost: 5000, defaultOwned: false },
          { name: 'Telur puyuh matang', quantity: '6 butir', cost: 6000, defaultOwned: false },
          { name: 'Bawang putih geprek', quantity: '2 siung', cost: 1500, defaultOwned: true },
          { name: 'Bumbu kaldu bubuk & lada', quantity: '1 sdt', cost: 2000, defaultOwned: true },
          { name: 'Bawang goreng tabur', quantity: '1 sdm', cost: 2500, defaultOwned: true },
        ],
        tags: ['Segar Berkuah', 'Anti Begah'],
      },
    ],
  },
  {
    slotId: 'malam',
    label: 'Makan Malam',
    timeRange: '18:30 - 20:30',
    selectedOptionIndex: 0,
    options: [
      {
        id: 'malam-1',
        title: 'Tahu Balado Kemangi Wangi',
        subtitle: 'Aroma rempah kemangi yang menggugah selera',
        estimatedCost: 11500,
        cookTimeMinutes: 14,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Tahu sutra / kuning', quantity: '3 potong', cost: 4500, defaultOwned: false },
          { name: 'Daun kemangi segar', quantity: '1 ikat kecil', cost: 2500, defaultOwned: false },
          { name: 'Sambal terasi sachet', quantity: '1 bungkus', cost: 2000, defaultOwned: true },
          { name: 'Bawang merah & tomat', quantity: '2 siung', cost: 2500, defaultOwned: true },
        ],
        tags: ['Rendah Lemak', 'Wangi & Nikmat'],
      },
      {
        id: 'malam-2',
        title: 'Tumis Buncis Jagung Manis Pipil',
        subtitle: 'Manis renyah alami, mengenyangkan di malam hari',
        estimatedCost: 10000,
        cookTimeMinutes: 12,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Buncis segar', quantity: '100g', cost: 3500, defaultOwned: false },
          { name: 'Jagung manis pipil', quantity: '1 bonggol kecil', cost: 3500, defaultOwned: false },
          { name: 'Bawang putih & cabai rawit', quantity: 'Secukupnya', cost: 2000, defaultOwned: true },
          { name: 'Minyak kelapa kosan', quantity: '1 sdm', cost: 1000, defaultOwned: true },
        ],
        tags: ['Serat Tinggi', 'Cocok Buat Diet'],
      },
      {
        id: 'malam-3',
        title: 'Mie Nyemek Sayur Sawi & Telur Ceplok',
        subtitle: 'Versi upgrade mie instan biasa dengan nutrisi seimbang',
        estimatedCost: 8500,
        cookTimeMinutes: 9,
        equipment: 'Kompor 1 Tungku',
        ingredients: [
          { name: 'Mie instan kuah/goreng', quantity: '1 bungkus', cost: 3500, defaultOwned: true },
          { name: 'Telur ayam', quantity: '1 butir', cost: 2500, defaultOwned: false },
          { name: 'Sawi hijau iris', quantity: '3 lembar', cost: 1500, defaultOwned: false },
          { name: 'Cabai rawit geprek', quantity: '3 biji', cost: 1000, defaultOwned: false },
        ],
        tags: ['Comfort Food', 'Super Irit'],
      },
    ],
  },
];

export const CORE_FEATURES_LIST = [
  {
    number: '01',
    title: 'Generator AI 3 Pilihan Menu',
    summary: '3 alternatif resep terkurasi per slot makan',
    description:
      'Sistem memberikan tiga pilihan menu yang divalidasi backend untuk setiap slot makan (sarapan, makan siang, makan malam). Seluruh resep telah disesuaikan dengan peralatan kos (1 tungku / rice cooker) dan batasan waktu memasak di bawah 20 menit.',
    benefit: 'Bebas dari kebingungan mikir menu tanpa risiko resep yang ribet atau mustahil dimasak di kos.',
  },
  {
    number: '02',
    title: 'Estimasi Uang Belanja Otomatis',
    summary: 'Kalkulasi presisi sebelum melangkah ke pasar',
    description:
      'Fitur kalkulasi otomatis menghitung total uang yang perlu disiapkan berdasarkan kombinasi resep yang kamu pilih dan basis data harga bahan referensi di pasar tradisional maupun supermarket lokal terdekat.',
    benefit: 'Uang makan bulanan tetap terkontrol rapi tanpa kaget saat membayar di kasir atau lapak sayur.',
  },
  {
    number: '03',
    title: 'Rekapitulasi Daftar Belanja Cerdas',
    summary: 'Konsolidasi bahan & eliminasi bumbu yang sudah dimiliki',
    description:
      'Daftar belanja cerdas secara otomatis menggabungkan bahan yang sama di antara beberapa menu dan mengabaikan bumbu atau bahan yang sebelumnya telah kamu tandai sebagai "sudah ada di kos".',
    benefit: 'Mencegah belanja dobel, mengurangi sisa bahan terbuang (food waste), dan belanja jadi lebih cepat.',
  },
  {
    number: '04',
    title: 'Perencanaan Fleksibel (Single-Slot Swap)',
    summary: 'Ganti satu resep tanpa merombak jadwal slot lain',
    description:
      'Ingin mengganti menu makan siang karena mendadak ingin makan berkuah? Kamu bisa menukar resep pada satu slot spesifik secara instan. Sistem akan memperbarui daftar belanja dan estimasi biaya secara otomatis tanpa mengubah slot menu lainnya.',
    benefit: 'Fleksibilitas penuh mengikuti mood harian tanpa perlu mengulang perencanaan dari nol.',
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote:
      'Dulu tiap akhir pekan pusing banget mau masak apa, ujung-ujungnya beli ojol dan seminggu bisa tembus 350 ribu cuma buat makan sendiri. Sejak pakai DapurPintar AI, aku dapat menu variasi baru kayak tumis tahu jamur dan telur puyuh kecap. Pengeluaran turun ke 145 ribu per minggu tanpa pernah sekalipun over-budget!',
    author: 'Rian Pratama',
    role: 'Mahasiswa Arsitektur (Semester 6)',
    location: 'Kos Daerah Sekeloa, Bandung',
    savingsMetric: 'Hemat Rp 820.000 / bulan',
  },
  {
    quote:
      'Fitur rekap daftar belanja yang otomatis nyoret bumbu kosan itu penyelamat hidup banget. Biasanya kalau ke pasar tradisional suka kalap beli sayur kebanyakan sampai akhirnya membusuk di lemari kos. Sekarang belanja tinggal centang checklist di HP, 15 menit selesai dan nggak ada bahan yang terbuang percuma.',
    author: 'Nabila Kusuma',
    role: 'Junior Copywriter & Freelancer',
    location: 'Kos Daerah Kuningan, Jakarta Selatan',
    savingsMetric: '0% Bahan Sayur Terbuang',
  },
];

export const PROBLEM_METRICS = [
  {
    metric: '45 Menit',
    title: 'Waktu Terbuang Setiap Hari',
    detail: 'Anak kos rata-rata menghabiskan waktu berharga hanya untuk scroll aplikasi makanan karena bingung menentukan menu.',
  },
  {
    metric: '4x Seminggu',
    title: 'Menu Monoton Berulang',
    detail: 'Ketiadaan panduan resep membuat pilihan makan berputar pada mie instan atau telur ceplok yang membosankan.',
  },
  {
    metric: '+35%',
    title: 'Pembengkakan Biaya Belanja',
    detail: 'Belanja tanpa rencana estimasi membuat pengeluaran membengkak drastis akibat beli bahan impulsif.',
  },
  {
    metric: '30% Bahan',
    title: 'Sayur & Bumbu Membusuk',
    detail: 'Tingginya risiko membeli porsi sayuran berlebih yang akhirnya rusak karena tidak terpakai dalam rencana masakan.',
  },
];

export const SOLUTION_POINTS = [
  {
    title: 'Rekomendasi Terkurasi AI Khusus Anak Kos',
    desc: 'Semua resep dirancang untuk peralatan dapur kos (kompor 1 tungku / rice cooker) dengan waktu olah 10–20 menit.',
  },
  {
    title: 'Estimasi Pengeluaran Otomatis & Transparan',
    desc: 'Ketahui perkiraan total uang yang harus dikeluarkan hingga satuan rupiah terkecil sebelum berangkat berbelanja.',
  },
  {
    title: 'Daftar Belanja Cerdas Bebas Sampah',
    desc: 'Sistem mengelompokkan bahan dan mencoret bumbu yang sudah kamu punya di kos, memangkas biaya dan sisa makanan.',
  },
  {
    title: 'Kontrol Anggaran Ketat Sesuai Kantong',
    desc: 'Cukup masukkan batas rupiah harian/mingguanmu, AI akan mengunci kombinasi menu agar tidak melebihi anggaran.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Input Anggaran & Preferensi',
    summary: 'Tentukan batasan dan kebutuhan personal kosmu',
    description:
      'Pengguna memasukkan anggaran belanja, jumlah orang, slot makan (pagi, siang, malam), serta pantangan makan atau alergi yang dimiliki.',
  },
  {
    step: '02',
    title: 'AI Menghasilkan 3 Pilihan Terkurasi',
    summary: 'Variasi resep valid tanpa perlu berpikir keras',
    description:
      'Generator AI memproses data preferensi dan menghasilkan tiga opsi masakan bergizi yang terverifikasi untuk setiap slot makan harian.',
  },
  {
    step: '03',
    title: 'Pilih Menu & Dapatkan Rekap Belanja',
    summary: 'Estimasi biaya instan dan checklist belanja siap pakai',
    description:
      'Pengguna memilih menu favorit, lalu sistem langsung menghitung estimasi uang belanja dan menyusun daftar bahan yang perlu dibeli di pasar.',
  },
];
