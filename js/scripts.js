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
        title: "Sample Project Title",
        date: "May 1, 2026",
        image: "assets/img/portfolio/stm32-clock-generator.svg",
        description: "Dummy test project page for the new portfolio feed layout.",
        link: "projects/sample-project.html"
    }
    ];

    const portfolioPosts = document.body.querySelector('#portfolio-posts');
    if (portfolioPosts) {
        portfolioPosts.innerHTML = projects.map(project => `
            <article class="portfolio-post-card">
                <a class="portfolio-post-image-link" href="${project.link}">
                    <img class="portfolio-post-image" src="${project.image}" alt="${project.imageAlt}" />
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
