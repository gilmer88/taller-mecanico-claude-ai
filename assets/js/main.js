const menuBtn = document.querySelector('.topbar__menu-btn');
const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');

menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar--hidden');
    wrapper.classList.toggle('wrapper--expanded');

});

const filterBtns = document.querySelectorAll('.filter-btn');
const rows = document.querySelectorAll('.orders__table tbody tr');

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function() {


        //quitar clase activa //

        filterBtns.forEach(function(b) {
            b.classList.remove('filter-btn--active');

        });

        //agregar clase activa haciendo click//

        btn.classList.add('filter-btn--active');

        //leer el filtro elegido

        const filter = btn.dataset.filter;

        //mostrar u ocultar filas

        rows.forEach(function(row) {
            const estado = row.querySelector('.badge').textContent.trim();
            if(filter === 'all' || estado === filter) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }

         
        });

        
    });
});


//actualizar contador de pendientes  

function actualizarContadores() {
    let pendientes = 0;
    rows.forEach(function(row) {
        const estado = row.querySelector('.badge').textContent.trim();
        if(estado === 'Pendiente') {
            pendientes++;
        }
    });
    document.getElementById('total-pendientes').textContent = pendientes;
}
actualizarContadores();