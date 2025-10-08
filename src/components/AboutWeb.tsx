import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";


export default function AboutWeb() {
    return (
        <div className="flex flex-col w-full h-auto md:h-screen bg-gradient-to-t from-purple-400 via-white to-white p-4">
            <a href="/"><ArrowLeft /></a>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    viewport={{ once: true }} 
                    src="/www.png" 
                    alt="" 
                    width={550} 
                    height={550} 
                />
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }} 
                        className="font-bold text-3xl"
                    >
                        Apa itu pemrograman web?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }} 
                    >
                        Pemrograman web adalah proses pembuatan dan pengembangan aplikasi atau situs web yang dapat diakses melalui internet. Ini melibatkan penggunaan berbagai bahasa pemrograman, kerangka kerja, dan teknologi untuk membangun antarmuka pengguna, mengelola data, dan menghubungkan aplikasi dengan server. Pemrograman web mencakup dua aspek utama: pengembangan front-end (bagian yang dilihat dan berinteraksi oleh pengguna) dan pengembangan back-end (bagian yang menangani logika bisnis, basis data, dan server). Beberapa bahasa pemrograman yang umum digunakan dalam pemrograman web termasuk HTML, CSS, JavaScript untuk front-end, serta Python, Ruby, PHP, dan Node.js untuk back-end.
                    </motion.p>
                </div>
            </div>

            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }} 
                className="text-center font-bold text-2xl mt-10 mb-4"
            >
                Jenis-jenis website
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }} 
                    className="w-full h-40 bg-white/70 backdrop-blur-lg rounded-lg flex flex-col items-center p-4 shadow-lg shadow-black/50"
                >
                    <h1 className="font-bold text-xl">Website Statis</h1>
                    <p className="text-sm">Website statis adalah jenis situs web dengan konten tetap yang tidak berubah secara dinamis untuk setiap pengguna atau kunjungan.</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }} 
                    className="w-full h-40 bg-white/70 backdrop-blur-lg rounded-lg flex flex-col items-center p-4 shadow-lg shadow-black/50"
                >
                    <h1 className="font-bold text-xl">Website Dinamis</h1>
                    <p className="text-sm">Website dinamis adalah sebuah situs web yang kontennya dapat berubah dan diperbarui secara otomatis dan fleksibel, tidak hanya berdasarkan interaksi pengguna, tetapi juga dipengaruhi oleh faktor lain seperti waktu, lokasi, atau data dari database.</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }} 
                    className="w-full h-40 bg-white/70 backdrop-blur-lg rounded-lg flex flex-col items-center p-4 shadow-lg shadow-black/50"
                >
                    <h1 className="font-bold text-xl">Website Interaktif</h1>
                    <p className="text-sm">Website interaktif adalah situs web yang dirancang agar pengguna dapat berinteraksi secara aktif dengan konten dan fitur, bukan hanya sebagai penonton pasif.</p>
                </motion.div>
            </div>
        </div>
    )
}