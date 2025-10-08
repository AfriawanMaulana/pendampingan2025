import { motion } from 'motion/react'
import './App.css'
import CircularGallery from './components/CircularGallery'
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [showFilosofi, setShowFilosofi] = useState(false);

  return (
    <>
      <Navbar />
      <section id='Home'>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }} 
            src="/logo.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className='w-56 md:w-80 h-auto mb-4' 
          />
          <motion.button 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }} 
            onClick={() => setShowFilosofi(!showFilosofi)} 
            className='md:hidden py-2 px-4 rounded-md font-semibold bg-orange-400 hover:bg-orange-500 text-white cursor-pointer'
          >
            Filosofi Logo
          </motion.button>

          {/* Mobile View */}
          {showFilosofi && (
            <div className='fixed top-20 md:hidden w-full h-screen backdrop-blur-3xl'>
              <button onClick={() => setShowFilosofi(false)} className='absolute top-4 right-4 p-2 rounded-full bg-red-600 hover:bg-red-700 text-white cursor-pointer'>
                X
              </button>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> */}
              <div className='custom-scrollbar h-[75%] bg-white overflow-auto space-y-3 p-4 m-6 rounded-xl shadow-sm shadow-black/50'>
                <p><b><i>Warna Biru</i></b> melambangkan persatuan dan kepercayaan diri, yang penting dalam membangun solidaritas di dalam kelompok untuk mencapai tujuan bersama.</p>
                <p><b><i>Warna Orange</i></b> memancarkan energi dan antusiasme yang tinggi. Ini melambangkan semangat yang tinggi seperti semboyan teknik yaitu dangbut, selain itu juga sebagai kreativitas dalam mencari solusi dan cara-cara baru untuk menyampaikan ide baru</p>
                <p><b><i>Warna Abu-abu</i></b> warna ini mencerminkan sifat fleksibilitas dalam berpikir, kita harus bisa melihat situasi dan melihat segala macam solusi yang mungkin terjadi ketika kita mengambil suatu keputusan sehingga dapat mengambil keputusan yang tepat di waktu yang tepat.</p>
                <p><b><i>Lapisan-lapisan</i></b> yang harus berjalan beriringan/sejalan sehingga dapat tercapainya tujuan kelompok tersebut.</p>
                <p><b><i>Warna Ungu</i></b> sendiri kekuatan, kreativitas yang ada di kelompok tor browser sendiri.</p>
                <p><b><i>Lingkaran</i></b> sendiri sering kali melambangkan persatuan, hubungan mahasiswa satu dengan yang lain.</p>
                <p><b><i>Warna Putih</i></b> sendiri juga mewakili kesederhanaan seperti kelompok tor browser</p>
              </div>
            </div>
          )}

          {/* Desktop View */}
          <div className='absolute hidden md:flex flex-col space-y-20 text-center w-full'>
            <div className='flex justify-between items-center px-20 space-x-96 w-full'>
              <motion.p 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'
              >
                <b><i>Warna Biru</i></b> melambangkan persatuan dan kepercayaan diri, yang penting dalam membangun solidaritas di dalam kelompok untuk mencapai tujuan bersama.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40'
              >
                <b><i>Warna Orange</i></b> memancarkan energi dan antusiasme yang tinggi. Ini melambangkan semangat yang tinggi seperti semboyan teknik yaitu dangbut, selain itu juga sebagai kreativitas dalam mencari solusi dan cara-cara baru untuk menyampaikan ide baru.
              </motion.p>
            </div>
            <div className='flex justify-between items-center px-20 space-x-96 w-full'>
              <motion.p 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40'
              >
                <b><i>Warna Abu-abu</i></b> warna ini mencerminkan sifat fleksibilitas dalam berpikir, kita harus bisa melihat situasi dan melihat segala macam solusi yang mungkin terjadi ketika kita mengambil suatu keputusan sehingga dapat mengambil keputusan yang tepat di waktu yang tepat.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40'
              >
                <b><i>Lapisan-lapisan</i></b> yang harus berjalan beriringan/sejalan sehingga dapat tercapainya tujuan kelompok tersebut.
              </motion.p>
            </div>
            <div className='flex justify-between items-center px-20 space-x-4 w-full'>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40'
              >
                <b><i>Warna Ungu</i></b> sendiri kekuatan, kreativitas yang ada di kelompok tor browser sendiri.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40 mt-20'
              >
                <b><i>Lingkaran</i></b> sendiri sering kali melambangkan persatuan, hubungan mahasiswa satu dengan yang lain.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm bg-white/40'
              >
                <b><i>Warna Putih</i></b> sendiri juga mewakili kesederhanaan seperti kelompok tor browser.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section id='Sejarah Tor'>
        <div className='flex flex-col items-center w-full h-auto space-y-8 p-10 md:p-20'>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='font-black text-3xl md:text-4xl'
          >
            Sejarah Tor Browser
          </motion.h1>
          <div className='flex flex-col md:flex-row gap-8 md:gap-20 items-center text-justify'>
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src='/tor-browser.png' 
              alt='tor' 
              width={600} 
              height={400} 
              className='w-80 md:w-96 h-auto mb-4'
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className='flex flex-col gap-4 items-center'>
              <p>Tor Browser dimulai pada pertengahan 1990-an di Laboratorium Penelitian Angkatan Laut AS (US Naval Research Laboratory), yang mengembangkan teknologi Onion Routing untuk melindungi komunikasi intelijen pemerintah. Pada tahun 2002, kode sumber Tor dirilis secara publik, dan pada tahun 2003, Proyek Onion Routing diluncurkan. Tor Browser pertama kali dirilis pada 2004 dan kemudian dikembangkan oleh organisasi nirlaba The Tor Project, Inc. sejak 2006 untuk menyediakan alat anonimitas online gratis bagi publik.</p>
              <p>Nama Tor Browser berasal dari "The Onion Router" (Perute Bawang), yang merujuk pada teknologi inti anonimitas yang digunakan oleh jaringan Tor, yaitu metode perutean berlapis yang mengenkripsi data secara berulang-ulang, mirip lapisan-lapisan kulit bawang, untuk menyembunyikan identitas pengguna dan lalu lintas internet mereka. </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id='Konsep Pendampingan'>
        <div className='flex flex-col items-center w-full h-auto space-y-8 p-10 md:p-20'>
          <h1 className='font-black text-3xl md:text-4xl'>Konsep Pendampingan</h1>
          <div className='flex justify-evenly w-full'>
            <div className='text-2xl md:text-4xl'>
              <p><b>P</b>roductivity</p>
              <p><b>R</b>esponsibilty</p>
              <p><b>I</b>ntelegent</p>
              <p><b>N</b>asionalism</p>
              <p><b>T</b>eam work</p>
              <p><b>L</b>earning</p>
              <p><b>N</b>etworking</p>
            </div>
            <div className='text-2xl md:text-4xl'>
              <p>Veritas (Kebenaran)</p>
              <p>Probitas (Kejujuran)</p>
              <p>Iustitia (Keadilan)</p>
            </div>
          </div>
        </div>
      </section>

      <section id='Anggota'>
        <div className='flex flex-col items-center w-full h-screen space-y-8 p-20'>
          <h1 className='font-black text-3xl md:text-4xl mt-20'>Anggota Kelompok</h1>
          <CircularGallery />
        </div>
        <div className='flex flex-col md:flex-row w-full items-center justify-center gap-4 mb-20 font-bold text-xl'>
          <a href="/about-web">Apa itu pemrograman web?</a>
          <a href="/national-day">Sejarah Pertempuran 10 November</a>
        </div>
      </section>

    </>
  )
}

export default App
