// Fonction exportable pour être réutilisée
// permet d'obtenir une liste de labels demandés sur un flux json
// lstData : fle flux concerné
// label : la rubrique demandée
// Structure du label :
//          * nom complet de la rubrique notation objet
//          * séparateur : #
//          * noombre d'occurences :
//                  * 1 : unique
//                  * multi : occurences multiples
export const getLabels = (lstData, label) => {
    // nb d'occurences des valeurs du label
    let tl = label.split("#")
    let occurence = tl[1]
    // label concerné
    let lbl = tl[0]
    // niveau des informations du label
    let val = lbl.split(".")
    // Par exemple pour laSpecilaite.nom
    // On a : 
    //      * val[0] : laSpecialite
    //      * val[1] : nom
    //      * val.length : 2
    // Tableau de renvoi des résultats
    let retour = []
    // Set pour élimination des doublons
    let set = new Set()

    // Parcours des data
    // Si occurence multi, utilise un tableau
    // pour stocker toutes les valeurs multiples
    let tabObj = []
    // Modification ce n'est plus une value de ref
    // lstData.value.forEach((element) => {
    lstData.forEach((element) => {
        // Suivant le niveau de profondeur du label
        switch (val.length) {
            // niveau arbo : 1
            // Par exemple : adresse#1
            // Il n'y  a pas de point on récupère directement
            // la valeur dans val (let val = lbl.split("."))
            case 1:
                // type d'occurence
                // unique (1) : on ajoute directement la valeur au set
                // Par exemple pour l'adresse 
                // elt["adresse"] : pour la valeur de l'adresse
                // dans notre case "adresse" est dans val[0]
                if (occurence == 1) { set.add(element[val[0]]) }
                // multiple (multi) : on parcours toutes les valeurs mise dans le tableau
                if (occurence == 'multi') {
                    element.forEach((elt) => {
                        tabObj.push(elt[val[0]])
                    })
                }
                break
            // Niveau arbo : 2
            // Par exemple : la Specialité.nom#1
            // On obtient en faisant let val = lbl.split(".")
            // val[0] : "laSpeicalite"
            // vam[1] : "nom"
            case 2:
                // type d'occurence 
                // unique (1) : on ajoute directement la valeur au set
                // Par exemple pour l'adresse
                // elt["laSpecialite"]["nom"] : pour la valeur de la specialite
                // dans notre cas "laSpecialite" est dans val[0] et nom dans val[1]
                // On utilise donc : elt [ val[0] ] [ val[1] ]
                if (occurence == 1) { set.add(element[val[0]][val[1]]) }
                if (occurence == 'multi') {
                    element[val[0]].forEach((elt) => {
                        tabObj.push(elt[val[1]])
                    })
                }
                break

            case 3:
                if (occurence == 1) { set.add(element[val[0]][val[1]][val[3]]) }
                if (occcurence == 'multi') {
                    element[val[0]][val[1]].forEach((elt) => {
                        tabObj.push(elt[val[2]])
                    })
                }
                break
            case 4:
                obj = element[val[0]][val[1]][val[2]][val[2]]

                if (occurence == 1) { set.add(element)[val[0]][val[1]][val[2]][val[3]] }
                if (occurence == 'multi') {
                    element[val[0]][val[1]][val[2]].forEach((elt) => {
                        tabObj.push(elt[val[3]])
                    })
                }
                break
            // etc .....
        } // fin switch
    })  // fin boucle lstData

    // Si multi on passe par le set pour éliminer les doublons
    if (occurence == 'multi') {
        set = new Set(tabObj)
    }
    // Transfer du set dans le tableau de retour des résultats
    retour = Array.from(set)
    // Tri pour avoir un ordre croissant les labels
    retour.sort()
    // Transmission des labels
    return retour
}
// fonction exportable
// 1° paramètre : les données
// 2° paramètre : les labels
// 3° paramètre : le libelle du label sur laquyel l'opération est effectuée # occurence dans les données
export const countDatas = (lst, lstLabel, libLabel) => {
    // occurence et valeur du label
    let tl = libLabel.split("#")
    let lbl = tl[0]
    let occurence = tl[1]
    // valeur du label
    let val = lbl.split(".")
    // Tableau de comptage a retourner
    let retour = []
    // Boucle sur les labels
    // Modification ce n'est plus une value de ref
    // lstLabel.value.forEach((label) => {
    lstLabel.forEach((label) => {
        // variable pour comptage pour un label
        let nb = 0
        // Boucle sur les données
        // Modification ce n'est plus une value de ref
        // lst.value.forEach((element) => {
        lst.forEach((element) => {

            switch (val.length) {
                case 1:
                    // type d'occurence
                    if (occurence == 1) {
                        if (element[val[0]] == label) { nb++ }
                    }
                    if (occurence == 'multi') {
                        element[val[0]].forEach((elt) => { nb++ })
                    }
                    break
                case 2:
                    // type d'occurence
                    if (occurence == 1) {
                        if (element[val[0]][val[1]] == label) { nb++ }
                    }
                    if (occurence == 'multi') {
                        element[val[0]].forEach((elt) => {
                            if (elt[val[1]] == label) { nb++ }
                        })
                    }
                    break
                case 3:
                    // type d'occurence
                    if (occurence == 1) {
                        if (element[val[0]][val[1]][val[2]] == label) { nb++ }
                    }
                    if (occurence == 'multi') {
                        element[val[0]].forEach((elt) => {
                            if (elt[val[1]] == label) { nb++ }
                        })
                    }
                    break
                // etc ...
            }// Fin switch
        }) // fin boucle données
        retour.push(nb)
    }) // fin boucle labels
    return retour
}