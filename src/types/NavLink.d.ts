interface NavLink {
    id: number;
    title: string;
    path: string;
    dropdown?: DropdownItem[];
}

interface DropdownItem {
    id: number;
    title: string;
    path: string;
}