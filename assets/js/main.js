const menuBtn = document.querySelector('.topbar__menu-btn');
const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');

menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar--hidden');
    wrapper.classList.toggle('wrapper--expanded');

});



