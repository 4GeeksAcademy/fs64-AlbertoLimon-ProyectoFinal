const favoritesDispatcher = {
    add: async (type, name, userId) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/api/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ` + sessionStorage.getItem("jwt-token")
                },
                body: JSON.stringify({ type: type, name: name, userId: userId })
            });

            
            if (response.ok) {
                const data = await response.json();
                console.log('Favorito creado correctamente');
                return data;
            } else {
                console.error('Error al crear el favorito:');
            }

            
        } catch (error) {
            console.error("Error durante el registro:", error);
            throw error;
        }
    },
    get: async (userId) => {

        try {
            const response = await fetch(process.env.BACKEND_URL + `/api/favorites/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json();

                return data;
            }

        } catch (error) {
            console.error("Error al cargar los favoritos:", error);
            throw error;
        }

    }
}

export default favoritesDispatcher;