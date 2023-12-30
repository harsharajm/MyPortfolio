document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    document.addEventListener('mousemove', function (e) {
        targetMouseX = e.clientX;
        targetMouseY = e.clientY;
    });

    function updatePosition() {
        const deltaX = targetMouseX - currentMouseX;
        const deltaY = targetMouseY - currentMouseY;

        // Set a constant speed (adjust this value as needed)
        const speed = 0.02;

        // Calculate the new position based on constant speed
        currentMouseX += deltaX * speed;
        currentMouseY += deltaY * speed;

        const offsetX = currentMouseX / window.innerWidth;
        const offsetY = currentMouseY / window.innerHeight;

        // Make the gradient much smaller
        const gradient = `radial-gradient(circle at ${offsetX * 100}% ${offsetY * 100}%, rgba(128, 0, 128, 0.2) 0%, rgba(128, 0, 128, 0) 30%)`;

        body.style.backgroundImage = gradient;

        // Request the next animation frame
        requestAnimationFrame(updatePosition);
    }

    // Start the animation loop
    updatePosition();

    document.addEventListener('mouseleave', function () {
        body.style.backgroundImage = 'none';
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
