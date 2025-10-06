

export default function Navbar() {

    const navLinks = ["Home", "Sejarah Tor", "Konsep Pendampingan", "Anggota"]

    const scrollToSection = (id: string) => {
        const elementId = document.getElementById(id);
        if (elementId) elementId.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="sticky top-0 left-0 z-50 backdrop-blur-2xl flex w-full items-center justify-center p-4">
            <div className="flex gap-20">
                {navLinks.map((item, index) => (
                    <button 
                        key={index}
                        onClick={() => scrollToSection(item)} 
                        className="font-semibold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-black/50"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    )
}