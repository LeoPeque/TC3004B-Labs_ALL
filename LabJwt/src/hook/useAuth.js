import { useEffect, useState } from "react";

const useAuth = () => {
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        verificarToken();
    }, []);

    const verificarToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            setAutenticado(true);
        } else {
            setAutenticado(false);
        }
    };

    return {autenticado, verificarToken};
};

export default useAuth;