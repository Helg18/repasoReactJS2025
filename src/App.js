import React, { useEffect, useState } from "react";
import Api from "./Services/axios"; // Importa el servicio Api

function App() {
    const [dogImage, setDogImage] = useState(null); // Estado para almacenar la URL de la imagen
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
    const [error, setError] = useState(null); // Estado para manejar errores

    // Función para obtener una nueva imagen de perro
    const fetchDogImage = async () => {
        try {
            setLoading(true); // Activa el estado de carga
            setError(null); // Limpia cualquier error previo

            const imageUrl = await Api.getNewDog(); // Obtiene la URL de la imagen
            if (imageUrl) {
                setDogImage(imageUrl); // Actualiza el estado con la URL de la imagen
            } else {
                setError("No se pudo cargar la imagen del perro."); // Maneja el caso en que no se obtenga una URL
            }
        } catch (error) {
            setError("Error al cargar la imagen del perro."); // Maneja errores de la solicitud
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    // Llama a fetchDogImage cuando el componente se monta
    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <div className="App">
            <h1>¡Mira este perro aleatorio!</h1>
            {loading ? ( // Muestra un mensaje de carga si está cargando
                <p>Cargando imagen...</p>
            ) : error ? ( // Muestra un mensaje de error si hay un error
                <p>{error}</p>
            ) : ( // Muestra la imagen si se cargó correctamente
                <img
                    src={dogImage}
                    alt="Un perro aleatorio"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            )}

            {/* Botón para cargar una nueva imagen */}
            <button onClick={fetchDogImage} disabled={loading}>
                {loading ? "Cargando..." : "¡Otro perro!"}
            </button>
        </div>
    );
}

export default App;