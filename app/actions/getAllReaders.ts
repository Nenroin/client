export async function getAllReaders(): Promise<Reader[]> {
    const response: Response = await fetch("http://localhost:8000/readers");
    if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
    }
    return response.json();
}
