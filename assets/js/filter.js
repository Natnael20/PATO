document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-wrapper .btn');
    const wrappers = document.querySelectorAll('.img-wrapper');

    // Initialize wrappers
    wrappers.forEach(wrapper => {
        wrapper.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'scale(1)';
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update button styles
            buttons.forEach(btn => {
                btn.style.backgroundColor = ''; // reset
                btn.style.color = '';           // reset
            });
            button.style.backgroundColor = 'black';
            button.style.color = 'white';

            // Filter images
            wrappers.forEach(wrapper => {
                const img = wrapper.querySelector('img');
                const categories = img.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    // Show wrapper smoothly
                    wrapper.style.display = 'block';
                    requestAnimationFrame(() => {
                        wrapper.style.opacity = '1';
                        wrapper.style.transform = 'scale(1)';
                    });
                } else {
                    // Hide wrapper smoothly
                    wrapper.style.opacity = '0';
                    wrapper.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        wrapper.style.display = 'none';
                    }, 600); // match transition duration
                }
            });
        });
    });
});
