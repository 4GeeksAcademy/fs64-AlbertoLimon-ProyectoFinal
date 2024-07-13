const charactersDispatcher = {
    get : async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character", {
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