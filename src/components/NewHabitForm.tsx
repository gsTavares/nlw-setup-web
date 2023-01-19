import { Check } from "phosphor-react";

export default function NewHabitForm() {
    return (
        <form className="w-full flex flex-col mt-6">
            <label className="font-semibold leading-tight" htmlFor="title">Qual seu compromentimento?</label>
            <input className="p-4 rounded-lg mt-2 bg-zinc-800 text-white placeholder:text-zinc-400" type="text" name="title" id="title" placeholder="Exercícios, dormir bem etc..." autoFocus />
            <label htmlFor="" className="font-semibold leading-tight mt-4">Qual a recorrência?</label>
            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
} 