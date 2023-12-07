import './style.css';

// src/main.js


document.addEventListener('DOMContentLoaded', () => {
  renderMainPage();

  function renderMainPage() {
    const mainContent = `
      <style>
        body {
          background-image: url('https://static.vecteezy.com/system/resources/previews/006/944/742/non_2x/elements-for-online-training-and-courses-digital-classroom-webinar-tablet-screen-with-training-infographics-for-creating-presentations-for-use-in-advertising-banners-background-sticker-vector.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 0;
        }

        .container {
          margin-top: 5em;
        }
      </style>
      <body class="img">
        <div class="container mt-5 text-white">
          <h1 class="display-2">Bienvenido a Cursos Online</h1>
          <h4 class="p">¿Deseas agregar un nuevo curso?.</h4>
          <button class="btn btn-primary" id="btnExplorarCursos">Agregar Cursos</button>
          <button id="btnDuracurso">Ir a Duración Curso</button>
          <button id="btnTipocurso">Ir a Tipo Curso</button>
        </div>
      </body>
    `;

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = mainContent;
    const btnDuracurso = document.querySelector<HTMLButtonElement>('#btnDuracurso');
    btnDuracurso?.addEventListener('click', () => {
      renderCRUD();
    });
    
  }
  const btnExplorarCursos = document.querySelector<HTMLButtonElement>('#btnExplorarCursos');
  btnExplorarCursos?.addEventListener('click', () => {
    renderCRUD2();
  });

  //Duracion curso
  async function renderCRUD() {
    const response = await fetch('http://localhost:3000/api/duracursos');
    const data = await response.json();

    const crudStyle = `
      <style>
        body {
          background-color: #6e95b7;; /* Fondo blanco */
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 0;
        }

        .container {
          background-color: #fff;
          color: #212529; /* Texto negro */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        table {
          width: 100%;
          margin-bottom: 1rem;
        }

        table, th, td {
          border: 1px solid #dee2e6; /* Color de borde más claro */
        }

        th, td {
          padding: 10px;
          text-align: center;
        }

        .btn {
          margin: 5px;
        }

        .btn-agregar {
          background-color: #007bff; /* Color azul */
          border: none;
        }

        .btn-danger {
          background-color: #dc3545;
          border: none;
        }

        .btn-warning {
          background-color: #ffc107;
          border: none;
        }
      </style>
    `;

    let divTable = `<div class="container mt-5"><table class="table table-striped">`;
  divTable += `<tr><th>Id</th><th>cursoDuracion</th><th>Acciones</th></tr>`;
  data.forEach((duracurso: IDuracurso) => {
    divTable += `<tr><td>${duracurso.id}</td><td>${duracurso.cursoDuracion}</td><td><button class="btn btn-danger btn-delete">Eliminar</button></td><td><button class="btn btn-warning btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table></div>`;

    const divButton = `<div class="container mt-3"><button class="btn btn-primary btn-agregar">Agregar Nuevo Curso</button></div>`;

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = crudStyle + divTable + divButton;

    const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-agregar');
    btnAgregar?.addEventListener('click', () => {
      renderForm();
    });

    document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
        console.log(id);
        await fetch(`http://localhost:3000/api/duracursos/${id}`, {
          method: 'DELETE',
        });
        renderCRUD();
      });
    });

    document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
        const response = await fetch(`http://localhost:3000/api/duracursos/${id}`);
        const data = await response.json();
        const btnCancel = `<button class="btn btn-cancel">Cancel</button>`;
        const divForm = `<form>
          <div class="mb-3">
            <label for="cursoDuracion" class="form-label">cursoDuracion</label>
            <input type="text" class="form-control" id="cursoDuracion" aria-describedby="cursoDuracion" value="${data.cursoDuracion}">
          </div>
          
          <button type='submit' class="btn btn-warning btn-save">Save</button>
          ${btnCancel}
        </form>`;
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

        const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
        btnSave?.addEventListener('click', async (e) => {
          e.preventDefault();
          const cursoDuracion = document.querySelector<HTMLInputElement>('#cursoDuracion')!.value;
          const response = await fetch(`http://localhost:3000/api/duracursos/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cursoDuracion }),
          });
          const data = await response.json();
          console.log(data);
          renderCRUD();
        });
      });
    });
  }

  function renderForm() {
    const divForm = `<form>
      <div class="mb-3">
        <label for="cursoDuracion" class="form-label">cursoDuracion</label>
        <input type="text" class="form-control" id="cursoDuracion" aria-describedby="cursoDuracion">
      </div>
      <button type='submit' class="btn btn-success btn-save">Save</button>
      <button type='button' class="btn btn-secondary btn-cancel">Cancel</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

    const btnCancel = document.querySelector<HTMLButtonElement>('.btn-cancel');
    btnCancel?.addEventListener('click', () => {
      renderCRUD();
    });

    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const cursoDuracion = document.querySelector<HTMLInputElement>('#cursoDuracion')!.value;
      const response = await fetch('http://localhost:3000/api/duracursos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cursoDuracion, }),
      });
      const data = await response.json();
      console.log(data);
      renderCRUD();
    });
  }
});


//
//
//Tipocurso










//Cursos
  async function renderCRUD2() {
    const response = await fetch('http://localhost:3000/api/cursos');
    const data = await response.json();

    const crudStyle = `
      <style>
        body {
          background-color: #6e95b7;; /* Fondo blanco */
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 0;
        }

        .container {
          background-color: #fff;
          color: #212529; /* Texto negro */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        table {
          width: 100%;
          margin-bottom: 1rem;
        }

        table, th, td {
          border: 1px solid #dee2e6; /* Color de borde más claro */
        }

        th, td {
          padding: 10px;
          text-align: center;
        }

        .btn {
          margin: 5px;
        }

        .btn-agregar {
          background-color: #007bff; /* Color azul */
          border: none;
        }

        .btn-danger {
          background-color: #dc3545;
          border: none;
        }

        .btn-warning {
          background-color: #ffc107;
          border: none;
        }
      </style>
    `;

    let divTable = `<div class="container mt-5"><table class="table table-striped">`;
  divTable += `<tr><th>Id</th><th>nombre_curso</th><th>nombre_tipo_curso</th><th>cursoDuracion</th><th>Acciones</th></tr>`;
  data.forEach((curso: ICurso) => {
    divTable += `<tr><td>${curso.id}</td><td>${curso.nombre_curso}</td><td>${curso.Tipo_curso?.nombre}</td><td>${curso.Duracion_curso?.cursoDuracion}</td><td><button class="btn btn-danger btn-delete">Eliminar</button></td><td><button class="btn btn-warning btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table></div>`;

    const divButton = `<div class="container mt-3"><button class="btn btn-primary btn-agregar">Agregar Nuevo Curso</button></div>`;

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = crudStyle + divTable + divButton;

    const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-agregar');
    btnAgregar?.addEventListener('click', () => {
      renderForm();
    });

    document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
        console.log(id);
        await fetch(`http://localhost:3000/api/cursos/${id}`, {
          method: 'DELETE',
        });
        renderCRUD2();
      });
    });

    document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
        const response = await fetch(`http://localhost:3000/api/cursos/${id}`);
        const data = await response.json();
        const btnCancel = `<button class="btn btn-cancel">Cancel</button>`;
        const divForm = `<form>
          <div class="mb-3">
            <label for="nombre_curso" class="form-label">nombre_curso</label>
            <input type="text" class="form-control" id="nombre_curso" aria-describedby="nombre_curso" value="${data.nombre_curso}">
          </div>
          <div class="mb-3">
            <label for="id_instrumento" class="form-label">id_instrumento</label>
            <input type="number" class="form-control" id="id_instrumento" value="${data.id_instrumento}">
          </div>
          <div class="mb-3">
            <label for="id_Profesor" class="form-label">id_Profesor</label>
            <input type="number" class="form-control" id="id_Profesor" value="${data.id_Profesor}">
          </div>
          <div class="mb-3">
            <label for="id_tipo_curso" class="form-label">id_tipo_curso</label>
            <input type="number" class="form-control" id="id_tipo_curso" value="${data.id_tipo_curso}">
          </div>    
          <div class="mb-3">
            <label for="id_duracur" class="form-label">id_duracur</label>
            <input type="number" class="form-control" id="id_duracur" value="${data.id_duracur}">
          </div>        
          <button type='submit' class="btn btn-warning btn-save">Save</button>
          ${btnCancel}
        </form>`;
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

        const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
        btnSave?.addEventListener('click', async (e) => {
          e.preventDefault();
          const nombre_curso = document.querySelector<HTMLInputElement>('#nombre_curso')!.value;
          const id_instrumento = parseInt(document.querySelector<HTMLInputElement>('#id_instrumento')!.value);
          const id_Profesor = parseInt(document.querySelector<HTMLInputElement>('#id_Profesor')!.value);
          const id_tipo_curso = parseInt(document.querySelector<HTMLInputElement>('#id_tipo_curso')!.value);
          const id_duracur = parseInt(document.querySelector<HTMLInputElement>('#id_duracur')!.value);
          const response = await fetch(`http://localhost:3000/api/cursos/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur, }),
          });
          const data = await response.json();
          console.log(data);
          renderCRUD2();
        });
      });
    });
  }

  function renderForm() {
    const divForm = `<form>
      <div class="mb-3">
        <label for="nombre_curso" class="form-label">nombre_curso</label>
        <input type="text" class="form-control" id="nombre_curso" aria-describedby="nombre_curso">
      </div>
      <div class="mb-3">
        <label for="id_instrumento" class="form-label">id_instrumento</label>
        <input type="number" class="form-control" id="id_instrumento">
      </div>
      <div class="mb-3">
        <label for="id_Profesor" class="form-label">id_Profesor</label>
        <input type="number" class="form-control" id="id_Profesor">
      </div>
      <div class="mb-3">
        <label for="id_tipo_curso" class="form-label">id_tipo_curso</label>
        <input type="number" class="form-control" id="id_tipo_curso">
      </div>
      <div class="mb-3">
        <label for="id_duracur" class="form-label">id_duracur</label>
        <input type="number" class="form-control" id="id_duracur">
      </div>
      <button type='submit' class="btn btn-success btn-save">Save</button>
      <button type='button' class="btn btn-secondary btn-cancel">Cancel</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

    const btnCancel = document.querySelector<HTMLButtonElement>('.btn-cancel');
    btnCancel?.addEventListener('click', () => {
      renderCRUD2();
    });

    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const nombre_curso = document.querySelector<HTMLInputElement>('#nombre_curso')!.value;
      const id_instrumento = parseInt(document.querySelector<HTMLInputElement>('#id_instrumento')!.value);
      const id_Profesor = parseInt(document.querySelector<HTMLInputElement>('#id_Profesor')!.value);
      const id_tipo_curso = parseInt(document.querySelector<HTMLInputElement>('#id_tipo_curso')!.value);
      const id_duracur = parseInt(document.querySelector<HTMLInputElement>('#id_duracur')!.value);
      const response = await fetch('http://localhost:3000/api/cursos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur, }),
      });
      const data = await response.json();
      console.log(data);
      renderCRUD2();
    });
  };