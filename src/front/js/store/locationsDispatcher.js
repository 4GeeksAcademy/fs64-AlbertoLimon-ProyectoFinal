const locationsDispatcher = {
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
                const locations = data.results
                return locations;    
            }

        } catch (error) {
            console.error("Error al cargar los lugares:", error);
            throw error;
        }

    },
    getSingleLocation: async(id) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`, {
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
            console.error("Error al cargar el lugar con id: " + id, error);
            throw error;
        }
    }
}

export default locationsDispatcher;