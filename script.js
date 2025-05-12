const TOTAL_FIGUS = 100;
const STORAGE_KEY = 'figusMarcadas';

function cargarFigus() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : Array(TOTAL_FIGUS).fill(false);
}

function guardarFigus(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function actualizarFaltan(arr) {
  const marcadas = arr.filter(v => v).length;
  const faltan = TOTAL_FIGUS - marcadas;
  document.getElementById('faltan').textContent =
    `Faltan ${faltan} figus para completar el álbum`;
}

function inicializarFigus() {
  const container = document.getElementById('figus-container');
  const arr = cargarFigus();
  container.innerHTML = '';

  for (let i = 0; i < TOTAL_FIGUS; i++) {
    const btn = document.createElement('button');
    btn.className = 'figu';
    if (arr[i]) btn.classList.add('marcada');
    btn.textContent = i + 1;

    btn.addEventListener('click', () => {
      console.log('clic en figurita', i+1, 'antes:', arr[i]);  // DEBUG JS
      arr[i] = !arr[i];
      btn.classList.toggle('marcada');
      console.log('ahora:', arr[i]);  // DEBUG JS
      guardarFigus(arr);
      actualizarFaltan(arr);
    });

    container.appendChild(btn);
  }

  actualizarFaltan(arr);
}

document.addEventListener('DOMContentLoaded', inicializarFigus);



