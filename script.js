document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentImgIndex = 0;

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            const img = card.querySelector('img');
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            currentImgIndex = index;
        });

        card.addEventListener('mouseover', () => {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.filter = 'blur(5px)';
                }
            });
        });

        card.addEventListener('mouseout', () => {
            cards.forEach(otherCard => {
                otherCard.style.filter = 'none';
            });
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prev.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex === 0) ? cards.length - 1 : currentImgIndex - 1;
        const img = cards[currentImgIndex].querySelector('img');
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });

    next.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex === cards.length - 1) ? 0 : currentImgIndex + 1;
        const img = cards[currentImgIndex].querySelector('img');
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});
