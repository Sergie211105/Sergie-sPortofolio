// Create Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Set active navigation link (LOGIKA BARU)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href').split('/').pop();
        const currentPageName = currentPath.split('/').pop();
        
        // Kasus spesial untuk halaman index (karena bisa jadi path hanya '/')
        if (currentPageName === "" || currentPageName === "index.html") {
            // Jika di halaman utama, pastikan link Home yang aktif
            if (linkHref === "index.html") {
                 link.classList.add('active');
            }
        } else if (linkHref === currentPageName) {
            link.classList.add('active');
        }
    });
});