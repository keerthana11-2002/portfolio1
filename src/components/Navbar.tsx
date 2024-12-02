// import  { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const navItems = [
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Education', href: '#education' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
//       <div className="container mx-auto px-4 ml-32 " >
//         <div className="flex items-center justify-between h-16 mr-40">
//           {/* Logo */}
//           <a href="#" className="text-xl font-bold text-blue-600">
//             <img src="/logo2.png" alt="logo" width={80}/>
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-14 font-medium text-xl">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-gray-600 hover:text-blue-800 transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200">
//             <div className="flex flex-col space-y-4 px-4 py-6">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-600 flex items-center">
          <img src="/logo2.png" alt="logo" className="w-20 h-18 ml-32" />
           
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20 font-medium text-lg mr-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-gray-600 hover:text-blue-800 transition-all"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md border-t border-gray-200"
          style={{ animation: 'slideDown 0.3s ease-out' }}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 text-lg font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style >{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
