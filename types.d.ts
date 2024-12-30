interface Book {
    id: number;
    name: string;
    author: string;
    pages: number;
    is_taken: boolean;
}

interface StringBook {
    id: string;
    name: string;
    author: string;
    pages: string;
    is_taken: string;
}


interface Worker {
    id: number;
    name: string;
    post: string;
}

interface Reader {
    id: number;
    name: string;
    age: number;
}

interface CheckList {
    id: number;
    date: string;
    deal_type: boolean;
    reader: string;
    worker: string;
    book: string;
}

interface StringCheckList {
    id: string;
    date: string;
    deal_type: string;
    reader: string;
    worker: string;
    book: string;
}