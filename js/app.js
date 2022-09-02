/**
 * Variables para el cambio del fondo oscuro y claro
 */
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

/** Variable para las cajas de colores */
const toggleColors = document.getElementById("toggle-colors");
/** Variable para traer los estilos del root  */
const rootStyles = document.documentElement.style;

/** 
 * Función click para cambiar de moon a sun
 */
toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = './images/sun.svg';
        toggleText.textContent = 'Light mode';
    }else{
        toggleIcon.src = './images/moon.svg';
        toggleText.textContent = 'Dark mode';
    }
});

toggleColors.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
})