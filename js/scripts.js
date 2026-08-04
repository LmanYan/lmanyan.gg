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

    // Portfolio project data. Add new projects here and create the matching page in /projects.
    const projects = [
        {
            title: "Coupled-Line Bandpass Filter",
            date: "August 5, 2026",
            image: "assets/img/projects/coupled-line-bandpass-filter/hfss-structure-preview.webp",
            imageAlt: "Parameterized HFSS structure of the three-resonator coupled-line bandpass filter",
            imageWidth: 560,
            imageHeight: 315,
            description: "A third-order 3 GHz Butterworth coupled-resonator bandpass filter developed through ADS extraction, Momentum validation, and topology-specific HFSS optimization.",
            link: "projects/coupled-line-bandpass-filter.html"
        },
        {
            title: "Stepped-Impedance Low-Pass Filter",
            date: "July 22, 2026",
            image: "assets/img/projects/stepped-impedance-lowpass-filter/momentum-layout-preview.webp",
            imageAlt: "ADS Momentum layout of the stepped-impedance low-pass filter",
            imageWidth: 560,
            imageHeight: 303,
            description: "A fifth-order 3 GHz Chebyshev low-pass filter developed from lumped synthesis through ADS TLIN/MLIN, Momentum and HFSS cross-validation, and multi-parameter EM optimization.",
            link: "projects/stepped-impedance-lowpass-filter.html"
        },
        {
            title: "Branch-Line Coupler",
            date: "July 8, 2026",
            image: "assets/img/projects/branch-line-coupler/figure-19-thumb.webp",
            imageAlt: "Initial HFSS branch-line coupler implementation over FR-4",
            imageWidth: 560,
            imageHeight: 316,
            imageSrcset: "assets/img/projects/branch-line-coupler/figure-19-thumb.webp 560w, assets/img/projects/branch-line-coupler/figure-19.webp 665w",
            imageSizes: "(max-width: 767px) calc(100vw - 4rem), 280px",
            description: "A 3 GHz microstrip 90° branch-line hybrid coupler designed in ADS, converted to microstrip, tuned in HFSS, and evaluated for match, isolation, amplitude balance, phase balance, and usable bandwidth.",
            link: "projects/branch-line-coupler.html"
        },
        {
            title: "Wilkinson Power Divider",
            date: "June 15, 2026",
            image: "assets/img/projects/wilkinson-power-divider/figure-21.webp",
            imageAlt: "Momentum layout port definition for a 3 GHz Wilkinson power divider",
            imageWidth: 1090,
            imageHeight: 679,
            description: "A 3 GHz two-way equal-split Wilkinson power divider designed from theory, simulated in ADS, converted to microstrip, and validated with Momentum EM/circuit co-simulation.",
            link: "projects/wilkinson-power-divider.html"
        },
        {
            title: "Microstrip Line EM Validation",
            date: "June 1, 2026",
            image: "assets/img/projects/microstrip-line-em-validation/figure-16.webp",
            imageAlt: "S11 magnitude comparison between ADS MLIN, ADS Momentum, and HFSS",
            imageWidth: 887,
            imageHeight: 485,
            description: "A microstrip EM validation project comparing analytical equations, ADS LineCalc, ADS MLIN, ADS Momentum, and Ansys HFSS for a 50 Ω FR-4 microstrip line.",
            link: "projects/microstrip-line-em-validation.html"
        },
        {
            title: "Transmission Line Playground",
            date: "May 14, 2026",
            image: "assets/img/projects/transmission-line-playground/figure-31.webp",
            imageAlt: "ADS comparison plot of transmission line impedance matching techniques",
            description: "A Keysight ADS project exploring transmission line reflections, Smith charts, microstrip parameter sweeps, and quarter-wave, single-stub, and double-stub matching networks.",
            link: "projects/transmission-line-playground.html"
        },
        {
            title: "UART Interface Extension for STM32",
            date: "May 3, 2026",
            image: "assets/img/projects/uart-interface/figure-4.png",
            imageAlt: "CP2102 USB-to-UART bridge connected to an STM32 development board",
            description: "A UART-based command-line interface for real-time interaction with STM32 firmware, eliminating the need for repeated reflashing during development and debugging.",
            link: "projects/uart-interface-stm32.html"
        }
    ];

    const portfolioPosts = document.body.querySelector('#portfolio-posts');
    if (portfolioPosts) {
        portfolioPosts.innerHTML = projects.map(project => `
            <article class="portfolio-post-card">
                <a class="portfolio-post-image-link" href="${project.link}">
                    <img class="portfolio-post-image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" decoding="async" ${project.imageSrcset ? `srcset="${project.imageSrcset}"` : ""} ${project.imageSizes ? `sizes="${project.imageSizes}"` : ""} ${project.imageWidth ? `width="${project.imageWidth}"` : ""} ${project.imageHeight ? `height="${project.imageHeight}"` : ""} />
                </a>
                <div class="portfolio-post-content">
                    <h3 class="portfolio-post-title"><a href="${project.link}">${project.title}</a></h3>
                    <p class="portfolio-post-date">${project.date}</p>
                    <p class="portfolio-post-description">${project.description}</p>
                </div>
            </article>
        `).join('');
    }


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
