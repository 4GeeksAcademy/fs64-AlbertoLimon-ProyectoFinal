const userDispatcher = {

    register: async (firstName, lastName, username, email, password) => {

        try {

            const response = await fetch(process.env.BACKEND_URL + "/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, username: username, email: email, password: password })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Email ya existente");
                } else if (response.status === 400) {
                    throw new Error("Formato inválido de email o contraseña");
                } else {
                    throw new Error("");
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

    }

}

export default userDispatcher;