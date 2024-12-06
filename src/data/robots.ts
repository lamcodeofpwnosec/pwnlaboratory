import { Robot } from '../types/robot';

export const robots: Robot[] = [
  {
    id: 'atlas-explorer',
    name: 'Badan Kepegawaian Negara Republik Indonesia',
    image:
      'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/11/02/3556093933.png',
    creator: 'PT. PWNOSEC TECHNOLOGIES LTD',
    likes: 1337,
    description: `PWNSSCASN adalah alat inovatif yang dirancang untuk mendukung kebutuhan strategis nasional Republik Indonesia. Alat ini secara khusus digunakan oleh pemerintah pusat untuk mempermudah verifikasi data kepegawaian resmi yang terdaftar pada Badan Kepegawaian Negara Republik Indonesia (BKN RI). Dengan teknologi canggih, PWNSSCASN memungkinkan akses cepat dan akurat terhadap informasi identitas, termasuk data camat, Pegawai Negeri Sipil (PNS), dan aparatur negara lainnya. Melalui integrasi dengan data Sistem Seleksi Calon Aparatur Sipil Negara (SSCASN), alat ini dapat memeriksa dan memvalidasi berbagai informasi kepegawaian, seperti Nomor Registrasi Kepegawaian (NRK), serta data yang terkait dengan nomor telepon yang digunakan dalam proses SSCASN. Proses ini memastikan bahwa informasi yang diperoleh tidak hanya relevan tetapi juga sesuai dengan standar keamanan dan privasi nasional.`,
    specs: {
      Server: 't.me/pwn_sscasn',
      Licensed: '95',
      speed: '50mbps/h',
      Status: 'Online',
    },
    features: [
      'Otomatisasi Pencarian Data',
      'Akses Layanan Administratif',
      'Keamanan dan Efisiensi Tinggi',
      'Kemudahan Integrasi',
      'Dukungan Lengkap untuk Data Pribadi',
      'Identifikasi Operator Secara Real-Time',
      'Integrasi Database SSCASN Lengkap',
      'Kompatibilitas dengan Berbagai Operator',
      'Keamanan Data dan Keandalan',
      'Akses Mudah dan Antarmuka yang Ramah Pengguna',
      'Fleksibilitas dalam Penggunaan',
      'Cetak Identitas Kebangsaan (NIK)',
      'Cetak Unit Kerja',
      'Cetak Informasi Alamat',
      'Cetak Perangkat',
      'Cetak Nomor Identitas Pegawai Negeri Sipil (NIP)',
      'Cetak Nama Lengkap',
      'Cetak Data Periode (THBL)',
    ],
    codeExample: {
      language: 'python',
      code: `import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, MessageHandler, filters
from handlers import start_handler, check_handler,  help_handler, button_handler, message_handler
from config import TOKEN

# Logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

def main():
    application = Application.builder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start_handler)) # start handler
    application.add_handler(CommandHandler("help", help_handler))  # help handler
    application.add_handler(CallbackQueryHandler(button_handler))  # handler untuk button
    application.add_handler(CommandHandler("cek", check_handler)) # cek handler
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, message_handler)) # "Bagaimana cara menggunakan bot ini?" handle

    # Running bot
    application.run_polling()

if __name__ == "__main__":
    main()`,
    },
  },
  {
    id: 'nexus-guardian',
    name: 'Telekomunikasi Kependudukan Operasional (DUKCAPIL)',
    image:
      'https://i.ibb.co.com/344b6WP/Copy-of-Black-and-Purple-Modern-Cyber-Security-Presentation-1.png',
    creator: 'PT. PWNOSEC TECHNOLOGIES LTD',
    likes: 337,
    description: `Automation PWNDUKCAP adalah alat canggih yang dirancang khusus untuk mendukung tugas dan kebutuhan administratif pejabat negara, khususnya Pejabat Eselon I/V dan Presiden Republik Indonesia. alat ini mempermudah verifikasi identitas kependudukan melalui integrasi dengan data telekomunikasi nasional, termasuk operator utama seperti Telkomsel, XL, dan operator telekomunikasi lainnya di Indonesia. Dengan kemampuan akses real-time, PWNDUKCAP memberikan solusi efisien untuk memeriksa dan memastikan keabsahan data kependudukan, seperti nama, NIK, alamat, jenis kelamin, hingga informasi personal lainnya yang terdaftar di database nasional. Melalui hanya satu langkah sederhana memasukkan nomor telepon alat ini dapat menampilkan informasi secara lengkap dan terintegrasi dengan berbagai sumber data resmi di Indonesia.`,
    description2: `PWNDUKCAP memungkinkan pejabat negara untuk memverifikasi data kependudukan atau identitas resmi hanya dengan memasukkan nomor telepon yang terdaftar. Dengan cara ini, data terkait identitas kependudukan, seperti Nomor Induk Kependudukan (NIK), nama, alamat, pekerjaan, status perkawinan, dan informasi lainnya dapat langsung diakses melalui jaringan telekomunikasi yang terhubung.`,
    specs: {
      server: 't.me/pwn_dukcap',
      licensed: '6',
      speed: '50mbps/h',
      status: 'Online',
    },
    features: [
      'MSISDN dan Penyedia Layanan',
      'MSISDN',
      'Penyedia Layanan',
      'Check POS Localtion',
      'Cetak Identitas Nasional Kependudukan (NIK)',
      'Nama Lengkap',
      'Tempat Lahir',
      'Tanggal Lahir',
      'Jenis Kelamin',
      'Golongan Darah',
      'Alamat',
      'RT/RW',
      'Kelurahan',
      'Kecamatan',
      'Kabupaten/Kota',
      'Provinsi',
      'Kode Pos',
      'Agama',
      'Status Kawin',
      'Pekerjaan',
      'Pendidikan',
      'Kewarganegaraan',
      'Nama Ibu',
      'Nama Ayah',
    ],
    codeExample: {
      language: 'python',
      code: `import requests
      import json
      import subprocess
      import os
      
      # URL API untuk cek nomor HP
      url = 'https://private-api-dukcapil.kemendagri.go.id/site/data-telekomunikasi',
      api_key = '',
      # Membuat folder output jika belum ada
      if not os.path.exists('output/data'):
          os.makedirs('output/data')
      
      # Daftar nomor HP yang ingin diperiksa (misal, dari 08000000 / 6280000000000)
      for i in range(100):  
          nomor_hp_input = f"62800{str(i).zfill(12)}"  
          payload = {'nomor_hp': nomor_hp_input}
      
          # Melakukan permintaan POST ke API
          response = requests.post(url, data=payload)
      
          # Memeriksa apakah permintaan berhasil (status code 200)
          if response.status_code == 200:
              formatted_response = json.loads(response.text)
              formatted_response_str = json.dumps(formatted_response, indent=2)
      
              # Menyimpan hasil ke file dengan nama nomor HP
              output_file_path = f'output/data/{nomor_hp_input}.json'
              with open(output_file_path, 'w') as file:
                  file.write(formatted_response_str)
      
              # Menampilkan hasil respons menggunakan jq (jika ingin ditampilkan di terminal)
              jq_process = subprocess.Popen(['jq', '.'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
              jq_output, _ = jq_process.communicate(input=formatted_response_str)
              print(f"Hasil untuk Nomor HP {nomor_hp_input} berhasil dimuat, berikut adalah data identitas nomor.")
          else:
              print(f"Permintaan untuk Nomor HP {nomor_hp_input} tidak berhasil nomor telefon tidak ter'registrasi pada (SIM) Identity.")`,
    },
  },
  {
    id: 'quantum-scout',
    name: 'Private Trainee Cybersecurity Experts',
    image:
      'https://i.ibb.co.com/Mf9KJ9P/Black-and-Purple-Modern-Cyber-Security-Presentation-3.png',
    creator: 'PT. PWNOSEC TECHNOLOGIES LTD',
    likes: 1337,
    description:
      'A lightweight reconnaissance robot built for speed and agility. The Quantum Scout excels in rapid data collection and environmental monitoring, making it ideal for scientific research and exploration.',
    specs: {
      height: '1.2m',
      weight: '45kg',
      speed: '15km/h',
      battery: '6 hours',
    },
    features: [
      'High-speed mobility',
      'Compact design',
      'Advanced sensors',
      'Wireless data transmission',
    ],
    codeExample: {
      language: 'python',
      code: `# Example code will be added here`,
    },
  },
];
