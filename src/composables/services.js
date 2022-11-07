// Services d'appels Ajax via fetch
// les fonctions sont exportables
// afin de permettre leurs utilisations par un programme externe
// (réutilisable par import)

// Promesse de recherche pour les villageois
export const getSeances = () => {
    let rq = "etablissements-cinematographiques.json"
    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json()  // résultat de la requête en json
        })
        .catch(error => { throw error } // Cas d'erreur
        )
}
