import {getAllBooks} from "@/app/actions/getAllBooks";
import GetTableButton from "@/app/ui/getTableButton";

const col_names: string[] = ["№", "Название", "Автор", "Кол-во стр.", "Взята"];

export default async function BooksPage() {
    const books: Book[] = await getAllBooks();

    const formattedBooks = books.map((book) => ({
        "№": book.id,
        "Название": book.name,
        "Автор": book.author,
        "Кол-во страниц": book.pages,
        "Взята": book.is_taken ? "да" : "нет",
    }));

    return (
        <div className="mt-6">
            <div className="flex justify-between">
                <article className="text-wrap">
                    <h3 className="font-bold text-xl">Книги</h3>
                    <p className="text-gray-500">
                        Тут находится информация по всем книгам в библиотеке.
                    </p>
                </article>
                <GetTableButton data={formattedBooks} columns={col_names}
                                button_text="Скачать таблицу Книги"
                                fileName="Книги.xlsx"/>
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
                    {books.map((book: Book) => (
                        <tr key={book.id}>
                            <td className="text-left px-4 py-4">{book.id}</td>
                            <td className="text-left px-4 py-4">{book.name}</td>
                            <td className="text-left px-4 py-4">{book.author}</td>
                            <td className="text-left px-4 py-4">{book.pages}</td>
                            <td className="text-left px-4 py-4">{book.is_taken ? "да" : "нет"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
