const episodesDispatcher = {
    get : async () => {
        try {
            const response = await fetch("", {
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

        
    }
}

export default episodesDispatcher;