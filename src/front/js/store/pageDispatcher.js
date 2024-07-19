const pageDispatcher = {
    getTotalPages: async (type) => {

        let apiUrl = ""
        switch (type) {
            case 'characters':
                apiUrl = "https://rickandmortyapi.com/api/character"
                break;
            case 'episodes':
                apiUrl = "https://rickandmortyapi.com/api/episode"
                break;
            case 'locations':
                apiUrl = "https://rickandmortyapi.com/api/location"
                break;
            default:
                console.log(`Sorry, that option don't exist`);
        }


        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json();
                const pages = data.info.pages
                return pages;
            }

        } catch (error) {
            console.error("Error al cargar el número de páginas de :" + type, error);
            throw error;
        }

    },
    getElementPages: async (type, name) => {
        let apiUrl = ""
        switch (type) {
            case 'characters':
                apiUrl = `https://rickandmortyapi.com/api/character/?name=${name}`
                break;
            case 'episodes':
                apiUrl = `https://rickandmortyapi.com/api/episode/?name=${name}`
                break;
            case 'locations':
                apiUrl = `https://rickandmortyapi.com/api/location/?name=${name}`
                break;
            default:
                console.log(`Sorry, that option don't exist`);
        }


        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json();
                const pages = data.info.pages
                return pages;
            }

        } catch (error) {
            console.error("Error al cargar el número de páginas de :" + type, error);
            throw error;
        }
    }
}

export default pageDispatcher;