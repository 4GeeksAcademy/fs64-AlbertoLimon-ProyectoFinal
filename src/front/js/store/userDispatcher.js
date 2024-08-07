const userDispatcher = {

    register: async (firstName, lastName, userName, email, password) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, userName: userName, email: email, password: password })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    alert("Email ya existente")
                    throw new Error("Email ya existente");
                } else if (response.status === 400) {
                    alert("Formato inválido de email o contraseña")
                    throw new Error("Formato inválido de email o contraseña");
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
    login: async (email, password) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!resp.ok) {

                throw Error("Ha habido un problema en la petición de login ")
            }

            if (resp.status === 401) {
                alert("Algo fue mal, vuelve a introducir el correo y la contraseña")
                throw ("Credenciales inválidas")
            }
            else if (resp.status === 400) {
                throw ("Formato inválido de email o contraseña")
            }
            const data = await resp.json()
            // Save your token in the localStorage
            // Also you should set your user into the store using the setItem function
            localStorage.setItem("jwt-token", data.token);


            return data

        } catch (error) {
            console.error("Error durante el inicio de sesión:", error);
            throw error;
        }
    },
    get: async () => {

        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem("jwt-token")
                },
    
            });
            
            if (!response.ok) {
                throw new Error(`Error del HTTP! Estado: ${response.status}`);
            }
    
            const data = await response.json();
            return data
    
        } catch (error) {
            console.error("Error cargando los datos del usuario:", error);
        }

    },
    delete: async () => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + "/api/users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem("jwt-token")
                }
            })

            if (!resp.ok) {

                throw Error("Ha habido un problema al eliminar el usuario ")
            } else {

                const data = await resp.json()
                console.log(`Usuario eliminado correctamente`);
                localStorage.removeItem("jwt-token")
                return data
            }



        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            throw error;
        }
    },
    update: async (id, firstName, lastName, email, username, phone, country, birthDate, postalCode, password) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + `/api/users`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem("jwt-token")
                },
                body: JSON.stringify({
                    firstName: firstName, lastName: lastName, email: email, userName: username, phone: phone, country: country,
                    birthDate: birthDate, postalCode: postalCode, password: password
                })
            })

            if (!resp.ok) {

                throw Error("Ha habido un problema al actualizar el usuario ")
            } else {

                const data = await resp.json()
                console.log(`Usuario ${id} actualizado correctamente`);
                return data
            }


        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            throw error;
        }
    }

}

export default userDispatcher;