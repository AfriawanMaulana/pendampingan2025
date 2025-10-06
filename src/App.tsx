import './App.css'
import CircularGallery from './components/CircularGallery'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <section id='Home'>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <img 
            src="/logo.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className='w-56 md:w-80 h-auto mb-4' 
          />
          <div className='absolute hidden md:flex flex-col space-y-20 text-center w-full'>
            <div className='flex justify-between items-center px-20 space-x-96 w-full'>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Warna Biru</i></b> melambangkan persatuan dan kepercayaan diri, yang penting dalam membangun solidaritas di dalam kelompok untuk mencapai tujuan bersama.</p>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Warna Orange</i></b> memancarkan energi dan antusiasme yang tinggi. Ini melambangkan semangat yang tinggi seperti semboyan teknik yaitu dangbut, selain itu juga sebagai kreativitas dalam mencari solusi dan cara-cara baru untuk menyampaikan ide baru</p>
            </div>
            <div className='flex justify-between items-center px-20 space-x-96 w-full'>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Warna Abu-abu</i></b> warna ini mencerminkan sifat fleksibilitas dalam berpikir, kita harus bisa melihat situasi dan melihat segala macam solusi yang mungkin terjadi ketika kita mengambil suatu keputusan sehingga dapat mengambil keputusan yang tepat di waktu yang tepat.</p>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Lapisan-lapisan</i></b> yang harus berjalan beriringan/sejalan sehingga dapat tercapainya tujuan kelompok tersebut.</p>
            </div>
            <div className='flex justify-between items-center px-20 space-x-4 w-full'>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Warna Ungu</i></b> sendiri kekuatan, kreativitas yang ada di kelompok tor browser sendiri.</p>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm mt-20'><b><i>Lingkaran</i></b> sendiri sering kali melambangkan persatuan, hubungan mahasiswa satu dengan yang lain.</p>
              <p className='border rounded-lg p-4 shadow-lg shadow-black/50 max-w-96 text-sm'><b><i>Warna Putih</i></b> sendiri juga mewakili kesederhanaan seperti kelompok tor browser</p>
            </div>
          </div>
        </div>
      </section>

      <section id='Sejarah Tor'>
        <div className='flex flex-col items-center w-full h-auto space-y-8 p-20'>
          <h1 className='font-bold text-4xl mt-20'>Sejarah Tor Browser</h1>
          <div className='flex flex-col md:flex-row gap-8 md:gap-20 items-center text-justify'>
            <img src='/tor-browser.png' alt='Sejarah Tor Browser' width={600} height={400} className='w-80 md:w-96 h-auto mb-4'/>
            <div className='flex flex-col gap-4 items-center'>
              <p>Tor Browser dimulai pada pertengahan 1990-an di Laboratorium Penelitian Angkatan Laut AS (US Naval Research Laboratory), yang mengembangkan teknologi Onion Routing untuk melindungi komunikasi intelijen pemerintah. Pada tahun 2002, kode sumber Tor dirilis secara publik, dan pada tahun 2003, Proyek Onion Routing diluncurkan. Tor Browser pertama kali dirilis pada 2004 dan kemudian dikembangkan oleh organisasi nirlaba The Tor Project, Inc. sejak 2006 untuk menyediakan alat anonimitas online gratis bagi publik.</p>
              <p>Nama Tor Browser berasal dari "The Onion Router" (Perute Bawang), yang merujuk pada teknologi inti anonimitas yang digunakan oleh jaringan Tor, yaitu metode perutean berlapis yang mengenkripsi data secara berulang-ulang, mirip lapisan-lapisan kulit bawang, untuk menyembunyikan identitas pengguna dan lalu lintas internet mereka. </p>
            </div>
          </div>
        </div>
      </section>

      <section id='Konsep Pendampingan'>
        <div className='flex flex-col items-center w-full h-auto space-y-8 p-20'>
          <h1 className='font-bold text-4xl m-20'>Konsep Pendampingan</h1>
          <div className='flex justify-evenly w-full'>
            <div>
              <p className='text-4xl'><b>P</b>roductivity</p>
              <p className='text-4xl'><b>R</b>esponsibilty</p>
              <p className='text-4xl'><b>I</b>ntelegent</p>
              <p className='text-4xl'><b>N</b>asionalism</p>
              <p className='text-4xl'><b>T</b>eam work</p>
              <p className='text-4xl'><b>L</b>earning</p>
              <p className='text-4xl'><b>N</b>etworking</p>
            </div>
            <div>
              <p className='text-4xl'><b>V</b>-------</p>
              <p className='text-4xl'><b>I</b>-------</p>
              <p className='text-4xl'><b>V</b>-------</p>
              <p className='text-4xl'><b>A</b>-------</p>
              <p className='text-4xl'><b>T</b>-------</p>
            </div>
          </div>
        </div>
      </section>

      <section id='Anggota'>
        <div className='flex flex-col items-center w-full h-screen space-y-8 p-20'>
          <h1 className='font-bold text-4xl mt-20'>Anggota Kelompok</h1>
          <CircularGallery />
        </div>
      </section>

      <div className='flex flex-col md:flex-row w-full items-center justify-center gap-4 mb-20'>
        <a href="/seputar-web">Apa itu pemrograman web?</a>
        <a href="/pertempuran-10-november">Sejarah Pertempuran 10 November</a>
      </div>
    </>
  )
}

export default App
