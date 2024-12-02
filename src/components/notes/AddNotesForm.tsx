import { useForm } from "react-hook-form"
import { NoteFormData } from '../../types/index';
import ErrorMessage from "../ErrorMessage";


export default function AddNotesForm() {

    const initialValues: NoteFormData = {
        content: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const handleAddNote = (formData: NoteFormData) => {
        console.log(formData)
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
