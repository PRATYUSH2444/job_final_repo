window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3 seconds delay
});


const toggleSwitch = document.querySelector('#theme-toggle');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

function setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }
}

setTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);
document.querySelector('.scroll-to-about').addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about1');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.scroll-to-contact').addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact1');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            gsap.to(this, {
                opacity: 0.5,
                duration: 0.3,
                onComplete: () => {
                    // Show success message
                    this.innerHTML = '<h3>Thank you for your message!</h3>';
                    gsap.to(this, {opacity: 1, duration: 0.3});
                }
            });
        });

        // New script to handle loader
        window.addEventListener('load', function() {
            setTimeout(function() {
                const loader = document.getElementById('loader');
                loader.style.display = 'none';
            }, 2000); // Hide loader after 2 seconds
        });
