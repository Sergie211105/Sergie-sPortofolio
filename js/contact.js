// Fungsionalitas Partikel (Diperlukan di semua halaman)
const particlesContainer = document.getElementById('particles');
const numParticles = 30; // Jumlah partikel yang diinginkan

if (particlesContainer) {
    function createParticles() {
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Atur posisi awal acak
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Atur durasi dan delay animasi acak
            const duration = 10 + Math.random() * 15;
            const delay = Math.random() * 20;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();
}

// Fungsionalitas Form Submission (Menggunakan Web3Forms)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('result');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            // Tampilkan pesan "Please wait..."
            result.innerHTML = "Mohon tunggu..." 
            result.style.display = "block"; // Pastikan elemen result terlihat

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let responseJson = await response.json();
                if (response.status === 200) {
                    result.innerHTML = responseJson.message || "Pesan berhasil dikirim!";
                } else {
                    console.error("Web3Forms Error:", response);
                    result.innerHTML = responseJson.message || "Terjadi kesalahan saat mengirim pesan.";
                }
            })
            .catch(error => {
                console.error("Fetch Error:", error);
                result.innerHTML = "Terjadi kesalahan! (Periksa koneksi atau console log)";
            })
            .finally(() => {
                // Reset formulir setelah berhasil/gagal
                form.reset();
                
                // Sembunyikan pesan hasil setelah 5 detik
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000); 
            });
        });
    }


    // Catatan: Fungsionalitas modal (openProjectModal) hanya akan berfungsi di projects.html
    // karena elemen modal tidak ada di contact.html.
});