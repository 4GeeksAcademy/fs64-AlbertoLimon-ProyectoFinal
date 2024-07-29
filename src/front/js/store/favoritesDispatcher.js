const favoritesDispatcher = {
    add: async (id, type, name, userId) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/api/favorites", {
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
    get: async () => {
        
    }
}

export default favoritesDispatcher;