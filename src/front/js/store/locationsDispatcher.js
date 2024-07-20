const locationsDispatcher = {
    get : async (pageNumber) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`, {
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
                console.log(id)
                return id;
            }

        } catch (error) {
            console.error("Error el id del lugar ", error);
            throw error;
        }
    },
    getSearch: async(pageNumber, name) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json();
                const locationsSearched = data.results
                console.log("data searched:  " ,locationsSearched)
                return locationsSearched;
            }

        } catch (error) {
            console.error("Error al buscar lugares con el nombre: " + name, error);
            throw error;
        }
    }
}

export default locationsDispatcher;