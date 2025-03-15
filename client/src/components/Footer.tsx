import { Contact, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-gray-300 py-8 px-4">
      <p className="text-lg">&copy; 2025 Lazeez Bites. All rights reserved.</p>

      <h3
        className="flex justify-center gap-2 font-bold

       "
      >
        <Mail />: syedaliraza00111@gmail.com
      </h3>
      <h3
        className="flex justify-center gap-2 font-bold

       "
      >
        <Contact />: 03333372014
      </h3>
    </footer>
  );
};
