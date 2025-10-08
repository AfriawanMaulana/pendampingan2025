import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";


export default function NationalDay() {
    return (
        <div className="flex flex-col w-full h-auto md:h-screen bg-gradient-to-t from-red-700 via-white to-white p-4">
            <a href="/"><ArrowLeft /></a>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }} 
                        className="text-center md:text-start font-bold text-3xl mt-10 mb-4"
                    >
                        Pertempuran 10 November 1945
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }} 
                    >
                        Pertempuran 10 November 1945 merupakan salah satu peristiwa paling bersejarah dalam perjuangan bangsa Indonesia mempertahankan kemerdekaan. Pertempuran ini terjadi di Kota Surabaya, berawal dari kedatangan pasukan Sekutu yang diboncengi tentara Belanda (NICA) dengan tujuan merebut kembali kekuasaan setelah Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945. Ketegangan memuncak setelah tewasnya Brigadir Jenderal A. W. S. Mallaby pada 30 Oktober 1945, yang kemudian memicu serangan besar-besaran oleh pasukan Sekutu pada 10 November 1945. Rakyat Surabaya di bawah pimpinan tokoh-tokoh seperti Bung Tomo berjuang dengan semangat luar biasa meskipun hanya bersenjata sederhana. Pertempuran berlangsung sengit dan menelan banyak korban jiwa, namun semangat perjuangan rakyat Surabaya menjadi simbol keberanian dan pengorbanan bangsa Indonesia dalam mempertahankan kemerdekaan. Untuk mengenang jasa para pahlawan, tanggal 10 November diperingati setiap tahun sebagai Hari Pahlawan Nasional.
                    </motion.p>
                    {/* <p>Peristiwa 10 November 1945 yang sekarang dikenal sebagai Hari Pahlawan, merupakan satu peristiwa heroik segenap rakyat Indonesia, dalam mempertahankan kemerdekaan yang diproklamasikannya, pada 17 Agustus 1945.</p>
                    <p>Peristiwa bersejarah ini, dipicu oleh tewasnya Brigadir Jenderal Mallaby, dalam pertempuran di Surabaya, Jawa Timur. Dalam peperangan itu, Mallaby tewas terpanggang di dalam mobil yang ditumpanginya, diduga akibat terkena lemparan granat, saat melintas di depan Gedung Internatio.</p> */}
                </div>
                <motion.img 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }} 
                    src="/bung-tomo.png" 
                    alt="" 
                    width={550} 
                    height={550} 
                    className="w-96 md:w-auto h-auto"
                />
            </div>
        </div>
    )
}