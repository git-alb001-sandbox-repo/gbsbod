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

    // Untermenü „Über uns" (mobil: Pfeil-Toggle, Desktop: CSS-Hover)
    document.querySelectorAll('.subnav-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
            const list = btn.parentElement.querySelector('.subnav-list');
            const open = list.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    });

    // Suchfeld-Overlay (Lupe im Header, Verhalten wie Divi auf den Referenz-Sites)
    const searchToggle = document.querySelector('.search-toggle');
    const search = document.querySelector('.site-search');
    const searchClose = document.querySelector('.site-search-close');
    const searchInput = document.querySelector('#site-search-input');

    const closeSearch = () => {
        search.hidden = true;
        search.classList.remove('is-open');
        searchToggle.setAttribute('aria-expanded', 'false');
        searchToggle.setAttribute('aria-label', 'Suche öffnen');
        searchToggle.focus();
    };

    if (searchToggle && search) {
        searchToggle.addEventListener('click', () => {
            search.hidden = false;
            search.classList.add('is-open');
            searchToggle.setAttribute('aria-expanded', 'true');
            searchToggle.setAttribute('aria-label', 'Suche schließen');
            searchInput && searchInput.focus();
        });

        searchClose && searchClose.addEventListener('click', closeSearch);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !search.hidden) closeSearch();
        });
    }

    // Hero-Slider (Auto-Rotation 6000 ms, Pfeile, Dots; TICKET-008)
    const slider = document.querySelector('.hero-slider');

    if (slider) {
        const slides = [...slider.querySelectorAll('.hero-slide')];
        const dots = [...slider.querySelectorAll('.hero-slider-dot')];
        const prev = slider.querySelector('.hero-slider-arrow--prev');
        const next = slider.querySelector('.hero-slider-arrow--next');
        const interval = parseInt(slider.dataset.interval, 10) || 6000;
        let current = 0;
        let timer = null;

        if (slides.length > 1) {
            const show = (index) => {
                current = (index + slides.length) % slides.length;
                slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
                dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
            };

            const restart = () => {
                clearInterval(timer);
                timer = setInterval(() => show(current + 1), interval);
            };

            next.addEventListener('click', () => { show(current + 1); restart(); });
            prev.addEventListener('click', () => { show(current - 1); restart(); });
            dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); restart(); }));

            restart();
        } else {
            prev.remove();
            next.remove();
            slider.querySelector('.hero-slider-dots')?.remove();
        }
    }
});
