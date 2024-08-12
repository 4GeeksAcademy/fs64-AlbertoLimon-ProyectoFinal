const episodesDispatcher = {
    get : async (pageNumber) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const episodes = data.results
                return episodes;
            }

        } catch (error) {
            console.error("Error al cargar los capitulos:", error);
            throw error;
        }

        
    },
    getSingleEpisode: async(id) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                return data;
            }

        } catch (error) {
            console.error("Error al cargar el capítulo con id: " + id, error);
            throw error;
        }
    },
    getId: async(url) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const id = data.id
                return id;
            }

        } catch (error) {
            console.error("Error el id del episodio ", error);
            throw error;
        }
    },
    getSearch: async(pageNumber, name) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const episodesSearched = data.results
                return episodesSearched;
            }

        } catch (error) {
            console.error("Error al buscar episodios con el nombre: " + name, error);
            throw error;
        }
    }
}

export default episodesDispatcher;