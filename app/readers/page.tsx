import {getAllReaders} from "@/app/actions/getAllReaders";
import GetTableButton from "@/app/ui/getTableButton";

const col_names: string[] = ["№", "Название", "Возраст"];

export default async function ReadersPage() {
    const readers: Reader[] = await getAllReaders();

    const formattedReaders = readers.map((book) => ({
        "№": book.id,
        "Название": book.name,
        "Возраст": book.age,
    }));

    return (
        <div className="mt-6">
            <div className="flex justify-between">
                <article className="text-wrap">
                    <h3 className="font-bold text-xl">Читатели</h3>
                    <p className="text-gray-500">
                        Тут находится информация по всем читателям.
                    </p>
                </article>
                <GetTableButton data={formattedReaders} columns={col_names}
                                button_text="Скачать таблицу Читатели"
                                fileName="Читатели.xlsx"/>
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
                    {readers.map((reader: Reader) => (
                        <tr key={reader.id}>
                            <td className="text-left px-4 py-4">{reader.id}</td>
                            <td className="text-left px-4 py-4">{reader.name}</td>
                            <td className="text-left px-4 py-4">{reader.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}