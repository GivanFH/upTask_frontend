import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DashboardView from "@/views/DashboardView"
import CreateProjectsView from "./views/projects/CreateProjectsView"
import EditProjectView from "./views/projects/EditProjectView"
import ProjectDetailsView from "./views/projects/ProjectDetailsView"
import AuthLayout from "./layouts/AuthLayout"
import LoginView from "./views/auth/LoginView"
import RegisterView from "./views/auth/RegisterView"

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}> 
                    <Route path="/" element={<DashboardView/> } index /> //Pagina principal
                    <Route path="/projects/create" element={<CreateProjectsView/> }/>
                    <Route path="/projects/:projectId/edit" element={<EditProjectView/> }/>
                    <Route path="/projects/:projectId" element={<ProjectDetailsView/> }/>
                </Route>
                <Route element={<AuthLayout/>}>  
                    <Route path="/auth/login" element={<LoginView/>} /> 
                    <Route path="/auth/register" element={<RegisterView/>} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
