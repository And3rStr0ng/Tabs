function cambiarTab(evt, tabId) {
  // 1. Ocultar todos los contenidos
  const contenidos = document.querySelectorAll('.tab-content');
  contenidos.forEach(content => content.classList.remove('active'));

  // 2. Desactivar todos los botones
  const botones = document.querySelectorAll('.tab-btn');
  botones.forEach(btn => btn.classList.remove('active'));

  // 3. Mostrar el contenido de la pestaña seleccionada y marcar el botón como activo
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}