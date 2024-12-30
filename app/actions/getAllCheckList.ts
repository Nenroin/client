export async function getAllCheckList(): Promise<CheckList[]> {
    const response: Response = await fetch("http://localhost:8000/check-list");
    if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
    }

    const data: StringCheckList[] = await response.json();
    return data.map((item) => ({
        id: Number(item.id),
        date: item.date,
        deal_type: item.deal_type === "1",
        reader: item.reader,
        worker: item.worker,
        book: item.book
    }));
}
