import { useForm } from "react-hook-form"
import { NoteFormData } from '../../types/index';
import ErrorMessage from "../ErrorMessage";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from "@/api/NoteAPI";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";


export default function AddNotesForm() {

    const params = useParams()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)

    const projectId = params.projectId!
    const taskId = queryParams.get('viewTask')!

    const initialValues: NoteFormData = {
        content: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues })

    const queryClient = useQueryClient()

    const { mutate } =  useMutation({
        mutationFn: createNote,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({ queryKey: ['task', taskId]})
            reset()
        }
    })

    const handleAddNote = (formData: NoteFormData) => {
        mutate({projectId, taskId, formData})
    }

    return (
        <form
            onSubmit={handleSubmit(handleAddNote)}
            className="space-y-3"
            noValidate
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="font-bold">Crear nota: </label>
                <input
                    id="content"
                    type="text"
                    placeholder="Contenido de la nota"
                    className="w-full p-3 border border-gray-300"
                    {...register('content', {
                        required: 'El contenido de la nota es obligatoria'
                    })}
                />
                {errors.content && (
                    <ErrorMessage>{errors.content.message}</ErrorMessage>
                )}
            </div>
            <input
                type="submit"
                value='Crear nota'
                className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-bold cursor-pointer"
            />
        </form>
    )
}
