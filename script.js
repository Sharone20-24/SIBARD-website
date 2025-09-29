document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTriggers = document.querySelectorAll('.donate-btn, .donate-btn-trigger, .volunteer-btn-trigger');

    // ONLY RUN MODAL CODE IF THE MODAL ELEMENTS EXIST ON THE PAGE
    if (contactModal && closeBtn) {
        
        // Function to open the modal
        function openModal(e) {
            e.preventDefault();
            contactModal.style.display = 'block';
        }

        // Attach event listeners to all modal-triggering buttons
        modalTriggers.forEach(button => {
            button.addEventListener('click', openModal);
        });

        // Close the modal when the close button is clicked
        closeBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });

        // Close the modal when the user clicks anywhere outside of it
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    // --- Smooth Scrolling Code (Runs on all pages) ---

    // Initial check for hash for direct link
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Event listener for all links starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Check if the href is not just '#' before trying to scroll
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});