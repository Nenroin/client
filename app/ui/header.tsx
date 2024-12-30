'use client';

import Link from 'next/link';

interface LinkInfo {
    link: string;
    name: string;
}

const header_info: LinkInfo[] = [
    {link: "/", name: "Главная"},
    {link: "/workers", name: "Работники"},
    {link: "/readers", name: "Читатели"},
    {link: "/books", name: "Книги"},
    {link: "/check-list", name: "Журнал"}
];

export default function Header() {
    return (

        <header className="h-14 min-w-full overflow-hidden bg-green-50 border rounded divide-x flex items-stretch">
            {header_info.map((item, i) => (
                <Link key={i} href={item.link} className="hover:bg-green-100 text-center grow flex items-center justify-center text-gray-600">{item.name}</Link>
            ))}
        </header>
    );
}
