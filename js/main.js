//Mobile menu
const mobile_toggle = document.getElementById('mobile-toggle');
const mobile_close = document.getElementById('mobile-close');
const mobile_overlay = document.getElementById('mobile-overlay');
const mobile_items = document.querySelectorAll('.has-mobile-dropdown a');

mobile_toggle.addEventListener('click', function onClick(event) {
    document.body.classList.add('mobile-menu-active');
});

mobile_overlay.addEventListener('click', function onClick(event) {
    document.body.classList.remove('mobile-menu-active');
});

mobile_close.addEventListener('click', function onClick(event) {
    document.body.classList.remove('mobile-menu-active');
});

mobile_items.forEach(item => {
    item.addEventListener('click', function onClick(event) {
        if (event.target.parentNode.classList.contains("has-mobile-dropdown")) {
            event.target.parentNode.classList.toggle('active');
        }
        return false;
    });
});

