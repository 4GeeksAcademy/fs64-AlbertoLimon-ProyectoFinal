const charactersDispatcher = {
    get : async (pageNumber) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const characters = data.results
                return characters;
            }

        } catch (error) {
            console.error("Error al cargar los personajes:", error);
            throw error;
        }

        
    },
    getSingleCharacter: async(id) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
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
            console.error("Error el personaje con id: " + id, error);
            throw error;
        }
    },
    getSearch: async(pageNumber, name) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const charactersSearched = data.results
                console.log("data searched:  " ,charactersSearched)
                return charactersSearched;
            }

        } catch (error) {
            console.error("Error al buscar personajes con el nombre: " + name, error);
            throw error;
        }
    }
}

export default charactersDispatcher;