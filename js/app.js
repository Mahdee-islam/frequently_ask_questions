const toggles = document.querySelectorAll('.faq_toggle');


//forEach method//
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    });
});

//Social panel JS
const floating_btn = document.querySelector('.floating_btn');
const close_btn = document.querySelector('.close_btn');

const social_panel_container = document.querySelector('.social_panel_container');
floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible');
})
