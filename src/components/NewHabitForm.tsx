import { Check } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-Feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]



export default function NewHabitForm() {

    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([]);

    async function createNewHabit(event: FormEvent) {
        event.preventDefault();
        if (!title || weekDays.length == 0) {
            return;
        }

        await api.post('habits', {
            title: title,
            weekDays: weekDays,
        });

        setTitle('');
        setWeekDays([]);

        alert("Hábito criado com sucesso!");
    }

    function handleToogleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay);
            setWeekDays(weekDaysWithRemovedOne);
        } else {
            const weekDaysWithAddOne = [...weekDays, weekDay];
            setWeekDays(weekDaysWithAddOne);
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label className="font-semibold leading-tight" htmlFor="title">Qual seu compromentimento?</label>
            <input value={title} onChange={(event) => setTitle(event.target.value)} className="p-4 rounded-lg mt-2 bg-zinc-800 text-white placeholder:text-zinc-400" type="text" name="title" id="title" placeholder="Exercícios, dormir bem etc..." autoFocus />

            <label htmlFor="" className="font-semibold leading-tight mt-4">Qual a recorrência?</label>
            <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((weekDay, index) => {
                    return (
                        <Checkbox.Root key={weekDay} checked={weekDays.includes(index)} className="flex items-center gap-3 group"
                            onCheckedChange={() => handleToogleWeekDay(index)}>
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>
                            <span className="text-white leading-tight">
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
} 