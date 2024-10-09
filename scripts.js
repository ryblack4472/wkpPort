document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.1)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('#home button');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            window.location.href = "about.html";
        });
    }
});

