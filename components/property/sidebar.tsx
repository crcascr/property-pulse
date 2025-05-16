import { FaBookmark, FaShare } from "react-icons/fa";
import { ContactForm } from "./contact-form";

export const PropertySidebar = () => {
  return (
    <aside className="space-y-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
        <FaBookmark className="mr-2" /> Bookmark Property
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
        <FaShare className="mr-2" /> Share Property
      </button>
      <ContactForm />
    </aside>
  );
};
