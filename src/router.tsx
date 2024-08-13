import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjectsView from "./views/projects/CreateProjectsView"

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}> 
                    <Route path="/" element={<DashboardView/> } index /> //Pagina principal
                    <Route path="/projects/create" element={<CreateProjectsView/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
