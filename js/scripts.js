/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav && typeof bootstrap !== 'undefined') {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Copy display-equation LaTeX source for project writeups.
    document.querySelectorAll('.copy-equation').forEach(button => {
        button.addEventListener('click', async () => {
            const latex = button.dataset.latex || button.closest('.equation')?.dataset.latex || '';
            if (!latex) return;
            const originalLabel = button.textContent;
            const setCopied = () => {
                button.textContent = 'Copied';
                window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
            };
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(latex);
                    setCopied();
                } else {
                    const temp = document.createElement('textarea');
                    temp.value = latex;
                    temp.setAttribute('readonly', '');
                    temp.style.position = 'absolute';
                    temp.style.left = '-9999px';
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                    setCopied();
                }
            } catch (error) {
                button.textContent = 'Copy failed';
                window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
            }
        });
    });

});
