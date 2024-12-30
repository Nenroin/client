'use client';

import {useState} from "react";

interface BookAction {
    userName: string;
    bookName: string;
    librarianName: string;
}

export default function BookActions() {
    const [form, setForm] = useState<BookAction>({
        userName: '',
        bookName: '',
        librarianName: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const takeBook = async () => {
        try {
            const response = await fetch('http://localhost:8000/take-book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('Ошибка при взятии книги');
            }

            alert('Книга успешно взята');
        } catch (error) {
            console.error(error);
            alert('Не удалось взять книгу');
        }
    };

    const returnBook = async () => {
        try {
            const response = await fetch('http://localhost:8000/return-book', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error('Ошибка при возврате книги');
            }

            alert('Книга успешно возвращена');
        } catch (error) {
            console.error(error);
            alert('Не удалось вернуть книгу');
        }
    };

    return (
        <div className="mt-6 text-center">
            <h1 className="text-lg font-bold mb-4">Действия с книгами</h1>
            <form className="space-y-4">
                <input
                    type="text"
                    name="userName"
                    placeholder="ФИО Пользователя"
                    className="border rounded px-4 py-2 w-full"
                    value={form.userName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="librarianName"
                    placeholder="ФИО Работника выдавшего книгу"
                    className="border rounded px-4 py-2 w-full"
                    value={form.librarianName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bookName"
                    placeholder="Название книги"
                    className="border rounded px-4 py-2 w-full"
                    value={form.bookName}
                    onChange={handleChange}
                />
            </form>
            <div className="space-x-4 mt-4">
                <button
                    onClick={takeBook}
                    className="border rounded px-6 py-2 bg-green-50 hover:bg-green-100 text-gray-600"
                >
                    Взять книгу
                </button>
                <button
                    onClick={returnBook}
                    className="border rounded px-6 py-2 bg-red-50 hover:bg-red-100 text-gray-600"
                >
                    Вернуть книгу
                </button>
            </div>
        </div>
    );
}
