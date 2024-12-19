import { FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-gray-300 py-4 text-center w-full">
            <div className="flex flex-col items-center gap-1">
                {/* Agregar aria-label para accesibilidad */}
                <p
                    className="text-lg font-medium text-purple-500 flex items-center gap-2"
                    aria-label="Ubicación: Mendoza, Argentina"
                >
                    <FaMapMarkerAlt className="text-purple-500 text-xl" />
                    Mendoza, Argentina
                </p>
                {/* Mejorar contraste del texto */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Valentin Mathey. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
