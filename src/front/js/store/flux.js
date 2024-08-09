import charactersDispatcher from "./charactersDispatcher"
import episodesDispatcher from "./episodesDispatcher";
import favoritesDispatcher from "./favoritesDispatcher";
import locationsDispatcher from "./locationsDispatcher";
import pageDispatcher from "./pageDispatcher";
import userDispatcher from "./userDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: localStorage.getItem("jwt-token"),
			characters: [],
			episodes: [],
			locations: [],
			favorites: [],
			numPages: null,
			activeUser: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {

				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}


			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			syncTokenFromLocalStorage: async () => {
				const token = localStorage.getItem("jwt-token")
				console.log("Aplicación cargado, sincronizando el almacenamiento local")
				if (token && token != "" && token != undefined) {
					setStore({ token: token })
				}
			},
			logout: async () => {
				localStorage.removeItem("jwt-token")
				console.log("Cerrando sesión...")
				setStore({ token: null })

			},
			getTotalPages: async (type) => {
				const data = await pageDispatcher.getTotalPages(type)
				setStore({ numPages: data })

			},
			getElementPages: async (type, name) => {
				console.log("name ", name)
				const data = await pageDispatcher.getElementPages(type, name)
				setStore({ numPages: data })
			},
			getCharacters: async (pageNumber) => {
				const data = await charactersDispatcher.get(pageNumber)
				console.log(data)
				setStore({ characters: data })
			},
			getSingleCharacter: async (id) => {
				const data = await charactersDispatcher.getSingleCharacter(id)
				return data;
			},
			getCharactersSearched: async (pageNumber, name) => {
				console.log("name ", name)
				const data = await charactersDispatcher.getSearch(pageNumber, name)
				setStore({ characters: data })
			},
			getEpisodes: async (pageNumber) => {
				const data = await episodesDispatcher.get(pageNumber)
				setStore({ episodes: data })
			},
			getSingleEpisode: async (id) => {
				const data = await episodesDispatcher.getSingleEpisode(id)
				return data;
			},
			getEpisodeId: async (url) => {
				console.log(url)
				const data = await episodesDispatcher.getId(url)
				console.log(data)
				return data;
			},
			getEpisodesSearched: async (pageNumber, name) => {
				console.log("name ", name)
				const data = await episodesDispatcher.getSearch(pageNumber, name)
				setStore({ episodes: data })
			},
			getLocations: async (pageNumber) => {
				const data = await locationsDispatcher.get(pageNumber)
				setStore({ locations: data })
			},
			getSingleLocation: async (id) => {
				const data = await locationsDispatcher.getSingleLocation(id)
				return data;
			},
			getLocationId: async (url) => {
				const data = await locationsDispatcher.getId(url)
				return data;
			},
			getLocationsSearched: async (pageNumber, name) => {
				console.log("name ", name)
				const data = await locationsDispatcher.getSearch(pageNumber, name)
				setStore({ locations: data })
			},

			registerUser: async (firstName, lastName, userName, email, password) => {
				if (await userDispatcher.register(firstName, lastName, userName, email, password)) {
					return true;
				}
			},
			loginUser: async (email, password) => {
				if (await userDispatcher.login(email, password)) {
					setStore({ token: localStorage.getItem("jwt-token") })
					return true;
				}
			},
			getUserFromBack: async () => {

				const data = await userDispatcher.get()
				console.log(data)
				setStore({ activeUser: data });


			},
			deleteUser: async () => {
				await userDispatcher.delete()
				setStore({ token: null })
			},
			//Hay que comprobar el tema de las contraseñas
			updateUser: async (id, firstName, lastName, email, username, phone, country, postalCode) => {
				await userDispatcher.update(id, firstName, lastName, email, username, phone, country , postalCode)
			},
			getFavorites: async () => {
				const data = await favoritesDispatcher.get()
				console.log("Favoritos: ",data)
				setStore({ favorites: data })
			},
			addFavorite: async (type, apiId, name, image) => {
				await favoritesDispatcher.add(type, apiId, name, image)
			},
			deleteFavorite: async (id) => {
				console.log("favorito a eliminar ", id)
				const response = await favoritesDispatcher.delete(id)
				console.log("response ",response)
				if(response.deleted){
					getActions().getFavorites()
				}
				
				
			},
			getImageFavorite: async (apiId) => {
				const img = await favoritesDispatcher.getImage(apiId)
				return img
			},
			verify: async() => {
				if(localStorage.getItem("jwt-token")){
					
				}
			}

		}
	};
};

export default getState;
