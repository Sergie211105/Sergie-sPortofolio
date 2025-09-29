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

// Project Data
const projects = {
    project1: {
        title: "E-Commerce Platform",
        description: "Modern e-commerce platform yang dibangun dengan focus pada user experience dan conversion optimization.",
        features: [
            "🎨 Responsive design untuk semua devices",
            "⚡ Fast loading dengan optimized performance",
            "🛒 Intuitive shopping cart dan checkout process",
            "📊 Integrated analytics untuk tracking user behavior",
            "💳 Multiple payment gateway integration",
            "📱 Progressive Web App (PWA) capabilities",
            "🔍 Advanced search dan filtering system"
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Google Analytics"],
        challenges: "Mengoptimalkan conversion rate melalui A/B testing dan user behavior analysis. Implementasi advanced filtering system untuk meningkatkan user experience.",
        results: "• 35% increase in conversion rate\n• 50% improvement in page load speed\n• 25% increase in average order value\n• 90+ PageSpeed Insights score"
    },
    project2: {
        title: "Mobile Banking App UI",
        description: "Clean dan intuitive mobile banking interface dengan focus pada user experience dan accessibility.",
        features: [
            "🎨 Modern dan clean interface design",
            "👆 Intuitive navigation dan user flow",
            "🔒 Security-focused design elements",
            "📱 Mobile-first responsive design",
            "♿ Accessibility compliance (WCAG 2.1)",
            "🎯 User-centered design approach",
            "📊 Data visualization untuk financial insights"
        ],
        technologies: ["Figma", "Adobe XD", "Principle", "InVision", "Sketch"],
        challenges: "Balancing security requirements dengan user-friendly interface. Ensuring accessibility compliance sambil maintaining modern aesthetic.",
        results: "• 4.8/5 user satisfaction rating\n• 40% reduction in support tickets\n• 60% increase in feature adoption\n• 95% accessibility compliance score"
    },
    project3: {
        title: "Marketing Dashboard",
        description: "Comprehensive marketing analytics dashboard untuk tracking campaign performance dan ROI analysis.",
        features: [
            "📊 Real-time campaign performance tracking",
            "💰 ROI analysis dan cost optimization",
            "🎯 Customer segmentation dan targeting",
            "📈 Conversion funnel visualization",
            "📱 Multi-channel campaign management",
            "🔄 Automated reporting dan alerts",
            "🎨 Customizable dashboard layouts"
        ],
        technologies: ["Vue.js", "Chart.js", "Google Analytics API", "Facebook Ads API", "D3.js"],
        challenges: "Integrating multiple marketing platforms dalam satu dashboard. Real-time data processing dan visualization untuk large datasets.",
        results: "• 45% improvement in campaign ROI\n• 30% reduction in manual reporting time\n• 25% increase in marketing efficiency\n• 90% user adoption rate"
    },
    project4: {
        title: "Design System",
        description: "Comprehensive design system untuk maintaining consistency across multiple projects dan teams.",
        features: [
            "🎨 Reusable component library",
            "📚 Comprehensive documentation",
            "🔧 Developer-friendly implementation",
            "🎯 Brand consistency guidelines",
            "📱 Responsive design tokens",
            "♿ Accessibility standards built-in",
            "🔄 Version control dan updates"
        ],
        technologies: ["Storybook", "Styled Components", "TypeScript", "Figma", "Chromatic"],
        challenges: "Creating scalable design system yang dapat digunakan across different projects. Ensuring consistency sambil allowing flexibility.",
        results: "• 60% faster development time\n• 95% design consistency score\n• 80% reduction in design debt\n• 100% team adoption rate"
    },
    project5: {
        title: "Landing Page Optimizer",
        description: "A/B testing platform untuk optimizing landing pages dengan focus pada conversion rate optimization.",
        features: [
            "🧪 A/B testing framework",
            "📊 Conversion rate tracking",
            "🎯 User behavior analysis",
            "📱 Mobile optimization tools",
            "⚡ Performance optimization",
            "🔄 Automated testing workflows",
            "📈 Statistical significance calculator"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Google Optimize", "Hotjar"],
        challenges: "Building statistical significance calculator dan ensuring accurate A/B test results. Implementing real-time performance monitoring.",
        results: "• Currently in development\n• Beta testing with 5 clients\n• 25% average conversion improvement\n• 90% user satisfaction in beta"
    },
    project6: {
        title: "Social Media Campaign",
        description: "Integrated social media marketing campaign dengan custom landing pages dan email automation.",
        features: [
            "📱 Multi-platform social media strategy",
            "🎯 Targeted advertising campaigns",
            "📧 Email marketing automation",
            "📊 Performance tracking dan analytics",
            "🎨 Custom creative assets",
            "🔄 Retargeting campaigns",
            "📈 Conversion optimization"
        ],
        technologies: ["Facebook Ads", "Google Ads", "Mailchimp", "Canva", "Hootsuite"],
        challenges: "Coordinating multi-platform campaigns dengan consistent messaging. Optimizing ad spend across different channels untuk maximum ROI.",
        results: "• 150% increase in brand awareness\n• 85% improvement in engagement rate\n• 40% increase in qualified leads\n• 3.2x return on ad spend (ROAS)"
    }
};

// Modal Functions
function openProjectModal(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = project.title;
    
    modalBody.innerHTML = `
        <div style="color: #a1a1aa; line-height: 1.6;">
            <h3 style="color: #ffffff; margin-bottom: 1rem;">Project Overview</h3>
            <p style="margin-bottom: 2rem;">${project.description}</p>
            
            <h3 style="color: #ffffff; margin-bottom: 1rem;">Key Features</h3>
            <ul style="margin-bottom: 2rem; line-height: 1.8;">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3 style="color: #ffffff; margin-bottom: 1rem;">Technologies Used</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <h3 style="color: #ffffff; margin-bottom: 1rem;">Challenges & Solutions</h3>
            <p style="margin-bottom: 2rem;">${project.challenges}</p>
            
            <h3 style="color: #ffffff; margin-bottom: 1rem;">Results & Impact</h3>
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 8px; border-left: 3px solid #10b981;">
                <pre style="margin: 0; color: #10b981; font-family: inherit;">${project.results}</pre>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Prevent external navigation
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A' && target.href && target.href.startsWith('http')) {
        event.preventDefault();
        window.open(target.href, '_blank', 'noopener,noreferrer');
    }
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Add animation to project cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});