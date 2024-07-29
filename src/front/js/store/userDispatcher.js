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
            sessionStorage.setItem("jwt-token", data.token);


            return data

        } catch (error) {
            console.error("Error durante el inicio de sesión:", error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + `/api/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!resp.ok) {

                throw Error("Ha habido un problema al eliminar el usuario ")
            } else {

                const data = await resp.json()
                console.log(`Usuario ${id} eliminado correctamente`);
                return data
            }



        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            throw error;
        }
    },
    update: async (id) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + `/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, userName: userName, email: email, password: password })
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
    },
    get: async (emailUser) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + `/api/user/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailUser })
                
            })

            if (!resp.ok) {

                throw Error("Ha habido un problema al obtener el usuario")
            } else {
                
                const data = await resp.json()
                console.log(`Usuario encontrado`, data);
                return data
            }


        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            throw error;
        }

    }



}

export default userDispatcher;