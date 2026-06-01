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
                    <img class="portfolio-post-image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" decoding="async" ${project.imageWidth ? `width="${project.imageWidth}"` : ""} ${project.imageHeight ? `height="${project.imageHeight}"` : ""} />
                </a>
                <div class="portfolio-post-content">
                    <h3 class="portfolio-post-title"><a href="${project.link}">${project.title}</a></h3>
                    <p class="portfolio-post-date">${project.date}</p>
                    <p class="portfolio-post-description">${project.description}</p>
                </div>
            </article>
        `).join('');
    }

});
