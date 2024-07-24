import charactersDispatcher from "./charactersDispatcher"
import episodesDispatcher from "./episodesDispatcher";
import locationsDispatcher from "./locationsDispatcher";
import pageDispatcher from "./pageDispatcher";
import userDispatcher from "./userDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			episodes: [],
			locations: [],
			numPages: null,
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
			getTotalPages: async (type) => {
				const data = await pageDispatcher.getTotalPages(type)
				setStore({numPages : data})
				
			},
			getElementPages: async (type, name) => {
				console.log("name ", name)
				const data = await pageDispatcher.getElementPages(type, name)
				setStore({numPages : data})
			},
			getCharacters: async (pageNumber) => {
				const data = await charactersDispatcher.get(pageNumber)
				console.log(data)
				setStore({characters: data})
			},
			getSingleCharacter: async(id) => {
				const data = await charactersDispatcher.getSingleCharacter(id)
				return data;
			},
			getCharactersSearched: async (pageNumber, name) => {
				console.log("name ", name)
				const data = await charactersDispatcher.getSearch(pageNumber, name)
				setStore({characters : data})
			},
			getEpisodes: async (pageNumber) => {
				const data = await episodesDispatcher.get(pageNumber)
				setStore({episodes: data})
			},
			getSingleEpisode: async(id) => {
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
				setStore({episodes : data})
			},
			getLocations: async (pageNumber) => {
				const data = await locationsDispatcher.get(pageNumber)
				setStore({locations: data})
			},
			getSingleLocation: async(id) => {
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
				setStore({locations : data})
			},
			
			
			registerUser: async(firstName, lastName, username, email, password) => {
				await userDispatcher.register(firstName, lastName, username, email, password)
			},
			loginUser: async(email, password) => {
				await userDispatcher.login(email, password)
			}

		}
	};
};

export default getState;
