import {getAllCheckList} from "@/app/actions/getAllCheckList";
import GetTableButton from "@/app/ui/getTableButton";

const col_names: string[] = ["№", "Дата", "Тип операции", "Читатель", "Работник", "Книга", "Скачать"];

export default async function CheckListPage() {
    const checkLists: CheckList[] = await getAllCheckList();

    const formattedCheckLists = checkLists.map((checkList) => ({
        "№": checkList.id,
        "Дата": checkList.date,
        "Тип операции": checkList.deal_type ? "Взятие" : "Возвращение",
        "Читатель": checkList.reader,
        "Работник": checkList.worker,
        "Книга": checkList.book
    }));
    return (
        <div className="mt-6 mb-6">
            <div className="flex justify-between">
                <article className="text-wrap">
                    <h3 className="font-bold text-xl">Журнал</h3>
                    <p className="text-gray-500">
                        Тут находится информация по всем действиям с книгами в библиотеке.
                    </p>
                </article>
                <GetTableButton data={formattedCheckLists} columns={col_names.slice(0, col_names.length - 1)} button_text="Скачать таблицу Журнал"
                                fileName="Журнал.xlsx"/>
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
                    {checkLists.map((checkList: CheckList, index: number) => (
                        <tr key={checkList.id}>
                            <td className="text-left px-4 py-4">{checkList.id}</td>
                            <td className="text-left px-4 py-4">{checkList.date}</td>
                            <td className="text-left px-4 py-4">{checkList.deal_type ? "Взятие" : "Возвращение"}</td>
                            <td className="text-left px-4 py-4">{checkList.reader}</td>
                            <td className="text-left px-4 py-4">{checkList.worker}</td>
                            <td className="text-left px-4 py-4">{checkList.book}</td>
                            <td className="px-4"><GetTableButton data={[formattedCheckLists[index]]}
                                                                 columns={col_names.slice(0, col_names.length - 1)}
                                                                 button_text="↓"
                                                                 fileName={`Журнальное поле ${checkList.id}.xlsx`}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}