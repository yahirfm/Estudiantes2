
const estudiantes = [
    {
        matricula: "2021001",
        nombre: "Juan",
        apellidoPaterno: "Pérez",
        apellidoMaterno: "Gómez",
        programaEducativo: "Ingeniería Informática",
        fotoEstudiante: "images/hombre.png"
    },
    {
        matricula: "2021002",
        nombre: "Ana",
        apellidoPaterno: "López",
        apellidoMaterno: "Martínez",
        programaEducativo: "Administración de Empresas",
        fotoEstudiante: "images/mujer.png"
    },
    {
        matricula: "2021003",
        nombre: "Diego",
        apellidoPaterno: "Lugo",
        apellidoMaterno: "Santana",
        programaEducativo: "Medicina",
        fotoEstudiante: "images/hombre.png"
    },
    {
        matricula: "2021004",
        nombre: "Citlali",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Estrada",
        programaEducativo: "Ingeniería Industrial",
        fotoEstudiante: "images/mujer.png"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const studentsBody = document.getElementById("students-body");

    showStudents(estudiantes, studentsBody);
});

function showStudents(estudiantes, container) {
    container.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${estudiante.matricula}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.apellidoPaterno}</td>
            <td>${estudiante.apellidoMaterno}</td>
            <td>${estudiante.programaEducativo}</td>
            <td><img src="${estudiante.fotoEstudiante}" alt="Foto Estudiante" style="max-width: 50px; max-height: 50px; border-radius: 50%;"></td>
        `;
        container.appendChild(row);
    });
}

window.searchStudent = function () {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const studentTable = document.getElementById("student-table");
    const studentsBody = document.getElementById("students-body");

    const filteredStudents = estudiantes.filter(estudiante =>
        estudiante.matricula.toLowerCase().includes(searchInput) ||
        estudiante.nombre.toLowerCase().includes(searchInput)
    );

    studentTable.classList.remove("d-none");
    showStudents(filteredStudents.length > 0 ? filteredStudents : estudiantes, studentsBody);
};


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.error("Error al registrar el Service Worker:", error);
      });
  }

  