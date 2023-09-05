import { MdContactSupport } from "react-icons/md";

export default function Page() {
    return (
        <div className="fixed bottom-0 right-0 m-4 mb-28">
            <button className="dark:bg-gray-900 dark:hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center">
                <MdContactSupport size={40}/>
            </button>
        </div>
    );
}
