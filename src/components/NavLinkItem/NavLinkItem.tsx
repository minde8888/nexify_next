import useToggle from "@/lib/hooks/useToggle";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import useMobileView from '@/lib/hooks/useMobileView';

const NavLinkItem: React.FC<NavLink> = ({ id, title, path, dropdown }) => {
    const { bool, toggle } = useToggle();
    const isMobileView = useMobileView();

    return (
        <div className={`hs-dropdown group ${!isMobileView ? 'hover:group-hover:block' : ''}`}>
            <button onClick={toggle} className="flex items-center dark:text-gray-950 hover:text-neutral-500 font-medium dark:text-white-400 dark:hover:text-neutral-500">
                {title}
                {dropdown && <MdArrowDropDown />}
            </button>
            {dropdown && (bool || !isMobileView) && (
                <div className={`hs-dropdown-menu ${isMobileView ? 'block' : 'hidden group-hover:block'} sm:absolute bg-white shadow-md rounded-sm overflow-hidden flex flex-col`}>
                    {dropdown.map(({ id, title, path }) => (
                        <Link key={id} href={path} className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                            {title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavLinkItem;

