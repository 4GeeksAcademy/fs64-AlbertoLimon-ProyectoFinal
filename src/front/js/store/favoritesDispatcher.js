const favoritesDispatcher = {
    add: async (id, type, name, userId) => {

        let url = ""
        if (type === "character") {
            url = process.env.BACKEND_URL + "/api/favorites"
        } else if (type === "episode") {
            url = process.env.BACKEND_URL + "/api/episodes"
        } else if (type === "location") {
            url = process.env.BACKEND_URL + "/api/locations"
        }

        try {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: id, type: type, name: name, userId: userId })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    alert("Error al añadir favorito")
                    throw new Error(console.log(Error));
                } else {
                    throw new Error(console.log(Error));
                }
            }

            const data = await response.json();

            return data;
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