import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectApi"
import EditProjectForm from "@/components/projects/EditProjectForm"

export default function EditProjectView() {

    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to='/404'/>

    if(data) return <EditProjectForm/>

    return (
        <div>
            EditProjectView
        </div>
    )
}