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
});
