import { Link, Navigate, Outlet } from "react-router-dom" //Outlet para mostrar un hijo del router principal
import 'react-toastify/dist/ReactToastify.css'
import Logo from '@/components/Logo';
import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/hooks/useAuth";

export default function AppLayout() {

    //Usar hook creado para verificar al usuario que este autenticado
    const { data, isError, isLoading } = useAuth()

    // console.log(data)

    if (isLoading) return 'Cargando...'
    if (isError) {
        return <Navigate to='/auth/login' />
    }

    if (data) return (
        <>
            <header className="bg-gray-800 py-5">
                {/* max width 1536px */}
                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-64">
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <NavMenu
                        name={data.name}
                    />
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

            {/* <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            /> */}
        </>
    )
}
