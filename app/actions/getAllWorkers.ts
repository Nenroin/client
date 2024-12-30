export async function getAllWorkers(): Promise<Worker[]> {
    const response: Response = await fetch("http://localhost:8000/workers");
    if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
    }
    return response.json();
}
