import { Outlet } from "react-router-dom" //Outlet para mostrar un hijo del router principal
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Logo from '@/components/Logo';
import NavMenu from "@/components/NavMenu";

export default function AppLayout() {
    return (
        <>
            <header className="bg-gray-800 py-5">
                {/* max width 1536px */}
                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-64">
                        <Logo />
                    </div>
                    <NavMenu />
                </div>
            </header>

            <section className="max-w-screen-2xl mx-auto mt-10 p-5">
                <Outlet />
            </section>

            <footer className="py-5">
                <p className="text-center">
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </footer>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    )
}
