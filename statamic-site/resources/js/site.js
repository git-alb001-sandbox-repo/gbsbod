// Sticky-Header (Verkleinerung beim Scrollen) + Burger-Menü (TICKET-006)

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    if (header) {
        const shrink = () => header.classList.toggle('is-sticky', window.scrollY > 40);
        shrink();
        window.addEventListener('scroll', shrink, { passive: true });
    }

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute(
                'aria-label',
                open ? 'Menü schließen' : 'Menü öffnen'
            );
        });
    }
});
