import { BiCategoryAlt } from "react-icons/bi";
import { SiDigikeyelectronics } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";

export function NavBar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <button className="flex items-center">
                    <BiCategoryAlt size={30} className="text-xl mr-2" />
                </button>
                <button className="flex items-center">
                    <SiDigikeyelectronics size={40} className="text-xl mx-4" />
                </button>
                <button className="flex items-center">
                    <FaShoppingBag size={30} className="text-xl ml-2" />
                </button>
            </div>
        </nav>
    );
}
