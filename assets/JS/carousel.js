document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;
    let previousImageIndex = images.length - 1;

    // Inicialmente, a primeira imagem deve ser visível
    images[currentImageIndex].classList.add('active');

    function showNextImage() {
        images[previousImageIndex].classList.remove('previous');
        images[currentImageIndex].classList.remove('active');

        previousImageIndex = currentImageIndex;
        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[previousImageIndex].classList.add('previous');
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Muda a cada 3 segundos
});
