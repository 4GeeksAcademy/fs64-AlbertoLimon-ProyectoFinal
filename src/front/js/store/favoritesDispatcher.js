const favoritesDispatcher = {
    add: async (type, itemName) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/api/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ` + localStorage.getItem("jwt-token")
                },
                body: JSON.stringify({ type: type, itemName: itemName })
            });


            if (response.ok) {
                const data = await response.json();
                console.log('Favorito creado correctamente');
                return data;
            }

            
        } catch (error) {
            console.error("Error al añadir a favoritos:", error);
            throw error;
        }
    },
    get: async () => {

        try {
            const response = await fetch(process.env.BACKEND_URL + `/api/favorites`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ` + localStorage.getItem("jwt-token")
                }
            })
            if (response.ok) {
                const data = await response.json();
                const favorites = data.favorites
                return favorites;
            }

        } catch (error) {
            console.error("Error al cargar los favoritos:", error);
            throw error;
        }

    },
    delete: async (id) => {

        try {
            const response = await fetch(process.env.BACKEND_URL + `/api/favorites/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ` + localStorage.getItem("jwt-token")
                }
            })
            if (!resp.ok) {

                throw Error("Ha habido un problema al eliminar el favorito ")
            } else {

                const data = await resp.json()
                console.log(`Favorito eliminado correctamente`);
                return data
            }

        } catch (error) {
            console.error("Error al eliminar el favorito:", error);
            throw error;
        }

    },
    getImage : async (type, name) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/${type}/?name=${name}`, {
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

export default favoritesDispatcher;