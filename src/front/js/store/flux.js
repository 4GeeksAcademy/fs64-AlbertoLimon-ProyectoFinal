import charactersDispatcher from "./charactersDispatcher"
import episodesDispatcher from "./episodesDispatcher";
import locationsDispatcher from "./locationsDispatcher";
import pageDispatcher from "./pageDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: []
			
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
			getCharacters: async (pageNumber) => {
				console.log(pageNumber)
				const data = await charactersDispatcher.get(pageNumber)
				setStore({characters: data})
			},
			getEpisodes: async () => {
				const data = await episodesDispatcher.get()
				return data;
			},
			getLocations: async () => {
				const data = await locationsDispatcher.get()
				return data;
			},
			getPages: async (type) => {
				const numPages = await pageDispatcher.get(type)
				return numPages;
			},
			getSingleCharacter: async(id) => {
				const data = await charactersDispatcher.getSingleCharacter(id)
				return data;
			},
			setFiltered: (filtered) => {
				setStore({characters: filtered})
			}
		}
	};
};

export default getState;
