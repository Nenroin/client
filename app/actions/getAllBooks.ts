export async function getAllBooks(): Promise<Book[]> {
    const response: Response = await fetch("http://localhost:8000/books");
    if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
    }

    const data: StringBook[] = await response.json();
    return data.map((item) => ({
        id: Number(item.id),
        name: String(item.name),
        author: String(item.author),
        pages: Number(item.pages),
        is_taken: item.is_taken === "1", // Преобразуем строку "0"/"1" в boolean
    }));
}
