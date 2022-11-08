
export const getCinema = () => {
    let rq = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=etablissements-cinematographiques&q=&rows=5000"
    return fetch(rq)
        .then(response => {
            return response.json()
        })
        .catch(error => { throw error })
}


