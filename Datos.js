const avisos = [
    {
        fechaPub: "2025-09-01",
        fechaEnt: "2025-09-05",
        comuna: "Santiago",
        sector: "Ñuñoa",
        detalle: "1 perro de 2 años, muy juguetón.",
        contacto: "Camila Torres - WhatsApp: +56912345678",
        fotos: ["Imagenes/PerroSolito.jpg"]
    },
    {
        fechaPub: "2025-09-02",
        fechaEnt: "2025-09-06",
        comuna: "Valparaíso",
        sector: "Cerro Alegre",
        detalle: "2 gatitos de 5 meses, hermanos.",
        contacto: "Felipe Muñoz - Instagram: @felipe.gatos",
        fotos: ["Imagenes/Pollito y Bigotes.jpg"]
    },
    {
        fechaPub: "2025-09-03",
        fechaEnt: "2025-09-07",
        comuna: "Concepción",
        sector: "Barrio Norte",
        detalle: "Perrito y Gatito de 6 meses, rescatados de la calle.",
        contacto: "Laura Urtubia - Telegram: @laurescue",
        fotos: ["Imagenes/Blanket & paw.jpg"]
    },
    {
        fechaPub: "2025-09-04",
        fechaEnt: "2025-09-09",
        comuna: "La Serena",
        sector: "Centro",
        detalle: "3 gatitos de 6 meses, buscan hogar juntos.",
        contacto: "Daniela Vega - TikTok: @gatosserena",
        fotos: ["gatitos1.jpg", "gatitos2.jpg", "gatitos3.jpg", "gatitos4.jpg"]
    },
    {
        fechaPub: "2025-09-05",
        fechaEnt: "2025-09-12",
        comuna: "Puerto Montt",
        sector: "Alerce",
        detalle: "Perrito de 3 años, muy cariñoso.",
        contacto: "Andrés López - X: @andreslopez",
        fotos: ["perroA.jpg", "perroB.jpg"]
    }
];
function verDetalle(index) {
    const aviso = avisos[index];
    document.getElementById("listado").style.display = "none";
    const detalleDiv = document.getElementById("detalleAviso");
    detalleDiv.innerHTML = `
        <h3>Detalle del aviso</h3>
        <p><b>Fecha Publicación:</b> ${aviso.fechaPub}</p>
        <p><b>Fecha Entrega:</b> ${aviso.fechaEnt}</p>
        <p><b>Comuna:</b> ${aviso.comuna}</p>
        <p><b>Sector:</b> ${aviso.sector}</p>
        <p><b>Descripción:</b> ${aviso.detalle}</p>
        <p><b>Contacto:</b> ${aviso.contacto}</p>
        <div>
            ${aviso.fotos.map(f => `<img src="${f}" onclick="verFotoGrande('${f}')">`).join("")}
        </div>
        <br>
        <button onclick="volverListado()">Volver al listado</button>
        <a href="index.html"><button>Volver a portada</button></a>
    `;
    detalleDiv.style.display = "block";
}
function volverListado() {
    document.getElementById("detalleAviso").style.display = "none";
    document.getElementById("listado").style.display = "block";
}
function verFotoGrande(src) {
    document.getElementById("imgGrande").src = src;
    document.getElementById("fotoGrande").style.display = "block";
}
function cerrarFoto() {
    document.getElementById("fotoGrande").style.display = "none";
}