let contador = 0; 
const maxContactos = 5;
function mostrarInputContacto(select) {
    if (select.value !== "" && contador < maxContactos) {
        contador++;
        const div = document.createElement("div");
        div.classList.add("contacto-item");
        // Etiqueta
        const label = document.createElement("label");
        label.textContent = "ID o URL de " + select.options[select.selectedIndex].text + ": ";
        // Input de texto
        const input = document.createElement("input");
        input.type = "text";
        input.name = "contacto_" + contador;
        input.required = false; // Opcional
        input.minLength = 4;
        input.maxLength = 50;
        input.placeholder = "Ej: @usuario o https://...";
        // Botón para eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => {
            div.remove();
            contador--;
        };
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(botonEliminar);
        document.getElementById("inputs_contacto").appendChild(div);
        // Reset select para que pueda elegir otro medio distinto
        select.value = "";
    } else if (contador >= maxContactos) {
        alert("Solo puedes agregar hasta 5 contactos.");
        select.value = "";
    }
}