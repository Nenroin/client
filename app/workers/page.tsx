import {getAllWorkers} from "@/app/actions/getAllWorkers";
import GetTableButton from "@/app/ui/getTableButton";

const col_names: string[] = ["№", "Название", "Должность"];

export default async function WorkerPage() {
    const workers: Worker[] = await getAllWorkers();

    const formattedWorkers = workers.map((worker) => ({
        "№": worker.id,
        "Название": worker.name,
        "Должность": worker.post,
    }));

    return (
        <div className="mt-6">
            <div className="flex justify-between">
                <article className="text-wrap">
                    <h3 className="font-bold text-xl">Работники</h3>
                    <p className="text-gray-500">
                        Тут находится информация по всем работникам библиотеки.
                    </p>
                </article>
                <GetTableButton data={formattedWorkers} columns={col_names} button_text="Скачать таблицу Работники"
                                fileName="Работники.xlsx"/>
            </div>
            <div className="border rounded overflow-hidden mt-6">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                    <tr className="border-b bg-green-50">
                        {col_names.map((col_name, i) => (
                            <th key={i} className="text-left px-4 py-4">{col_name}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y">
                    {workers.map((reader: Worker) => (
                        <tr key={reader.id}>
                            <td className="text-left px-4 py-4">{reader.id}</td>
                            <td className="text-left px-4 py-4">{reader.name}</td>
                            <td className="text-left px-4 py-4">{reader.post}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
