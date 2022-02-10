const learn_more_button = document.querySelector('.home-call-to-action button');

let about_section = undefined;

sections.forEach(section => {
    if (section.getAttribute('id') === 'about') {
        about_section = section;
    }
})

learn_more_button.addEventListener('click', function () {
    const view = getViewport();

    const sectionTop = about_section.offsetTop;

    window.scrollTo(0,sectionTop - 0.09 * view[1]);
})