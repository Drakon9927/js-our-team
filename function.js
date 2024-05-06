// Funzione per restituire i membri su html

function creaMembroHtml(membro) {
    return `<div>
                <h3>Nome: ${membro.nome}</h3>
                <p>Ruolo: ${membro.ruolo}</p>
                <img src="${membro.foto}" alt="Foto di ${membro.nome}">
            </div>`;
}