import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";


export default function NationalDay() {
    return (
        <div className="flex flex-col w-full h-auto md:h-screen bg-gradient-to-t from-red-900 via-white to-white p-4">
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
                        Hari Kartini
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }} 
                    >
                        Sejarah Hari Kartini adalah penetapan 21 April sebagai Hari Kartini dan pengakuan R.A. Kartini sebagai Pahlawan Kemerdekaan Nasional oleh Presiden Soekarno melalui Keppres No. 108 Tahun 1964. Peringatan ini bertujuan menghormati R.A. Kartini, pionir kebangkitan perempuan dan kesetaraan gender di Indonesia, yang pemikirannya tertuang dalam buku Habis Gelap Terbitlah Terang. 
                    </motion.p>
                </div>
                <motion.img 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }} 
                    src="/kartini.png" 
                    alt="" 
                    width={350} 
                    height={350} 
                    className="w-96 h-auto"
                />
            </div>
        </div>
    )
}