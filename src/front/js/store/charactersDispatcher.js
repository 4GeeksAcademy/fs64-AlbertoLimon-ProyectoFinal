const charactersDispatcher = {
    get : async (pageNumber, name) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}?name=${name}`, {
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
                console.log(data)
                return characters;
            }

        } catch (error) {
            console.error("Error al cargar los personajes:", error);
            throw error;
        }
    }
}

export default charactersDispatcher;