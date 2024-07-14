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
                return data;
            }

        } catch (error) {
            console.error("Error al cargar los personajes:", error);
            throw error;
        }

        
    }
}

export default charactersDispatcher;