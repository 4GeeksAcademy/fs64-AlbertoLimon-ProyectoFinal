const userDispatcher = {

    register: async (firstName, lastName, userName, email, password) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, userName: userName, email: email, password: password })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Email ya existente");
                } else if (response.status === 400) {
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
    login: async(email,password) => {
        try {
            const resp = await fetch(process.env.BACKEND_URL + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            if (!resp.ok) {
                alert("Error en el login")
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
    }

}

export default userDispatcher;