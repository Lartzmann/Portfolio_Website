// import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-gray-400 py-14 mt-10 ">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
//         {/* Name */}
//         <h2 className="text-white text-xl font-bold">Emmanuel Teye Lartey</h2>

//         {/* Social Links */}
//         <div className="flex items-center gap-6 text-2xl">
//         <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=teyeemmanuel01@gmail.com&su=Collaboration%20Opportunity&body=Hello%20Emmanuel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20to%20work%20together.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ARegards%2C%0D%0A[Your%20Name]"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:text-blue-600"
//             >
//             <FiMail />
//         </a>


//           <a
//             href="https://github.com/Lartzmann"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:text-blue-600"
//           >
//             <FiGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/emmanuel-lartey-1709261bb/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:text-blue-600"
//           >
//             <FiLinkedin />
//           </a>
//           {/* <a
//             href="https://twitter.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//           >
//             <FaTwitter />
//           </a> */}
//           <a
//             href="https://www.instagram.com/_lartzmann.19/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:text-blue-600"
//           >
//             <FiInstagram />
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="text-sm text-gray-500 mt-4">
//           © {new Date().getFullYear()} Emmanuel Teye Lartey. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { FiInstagram, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-gray-400 py-16 mt-10 border-t border-slate-700">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
//           {/* Left Section - Name & Tagline */}
//           <div className="text-center md:text-left">
//             <h2 className="text-white text-2xl font-bold mb-2">
//               Emmanuel Teye Lartey
//             </h2>
//             <p className="text-gray-500 text-sm">
//               Building digital experiences, one line at a time
//             </p>
//           </div>

//           {/* Center Section - Navigation Links */}
//           <nav className="hidden md:flex gap-6 text-sm">
//             <a href="#about" className="hover:text-white transition-colors">
//               About
//             </a>
//             <a href="#projects" className="hover:text-white transition-colors">
//               Projects
//             </a>
//             <a href="#skills" className="hover:text-white transition-colors">
//               Skills
//             </a>
//             <a href="#contact" className="hover:text-white transition-colors">
//               Contact
//             </a>
//           </nav>

//           {/* Right Section - Social Links */}
//           <div className="flex items-center gap-4">
//             <a
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=teyeemmanuel01@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all hover:bg-blue-500 hover:text-white hover:scale-110"
//             >
//               <FiMail size={18} />
//             </a>

//             <a
//               href="https://github.com/Lartzmann"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all hover:bg-purple-500 hover:text-white hover:scale-110"
//             >
//               <FiGithub size={18} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/emmanuel-lartey-1709261bb/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all hover:bg-blue-500 hover:text-white hover:scale-110"
//             >
//               <FiLinkedin size={18} />
//             </a>

//             <a
//               href="https://www.instagram.com/_lartzmann.19/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all hover:bg-pink-500 hover:text-white hover:scale-110"
//             >
//               <FiInstagram size={18} />
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <p className="text-gray-500">
//             © {new Date().getFullYear()} Emmanuel Teye Lartey. All rights reserved.
//           </p>
//           <p className="text-gray-600 text-xs">
//             Designed & Built with 💙 by Emmanuel
//           </p>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
//         aria-label="Scroll to top"
//       >
//         <FiArrowUp size={20} />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <footer className="bg-slate-950 border-t border-slate-800/60">
      <footer className="relative bg-gradient-to-t from-slate-900 via-slate-850 to-[#1e293b] text-gray-400 py-8 mt-10 ">
      {/* <footer className="relative bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-gray-400 py-8 mt-10 "> */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand & short description */}
          <div>
            <h3 className="text-white text-xl font-semibold tracking-tight mb-4">
              Emmanuel Teye Lartey
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Frontend developer crafting thoughtful digital experiences with clean code and modern design.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="text-slate-300 font-medium mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-slate-300 font-medium mb-5">Connect</h4>
            <div className="flex gap-5">
              <SocialLink href="https://github.com/Lartzmann" icon={FiGithub} />
              <SocialLink
                href="https://www.linkedin.com/in/emmanuel-lartey-1709261bb/"
                icon={FiLinkedin}
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=teyeemmanuel01@gmail.com"
                icon={FiMail}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Emmanuel Teye Lartey. All rights reserved.</p>
          <p className="text-slate-600">Built with precision • Designed with purpose</p>
        </div>
      </div>

      {/* Floating scroll to top - subtle version */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 text-slate-300 rounded-full transition-all duration-300 hover:scale-110 hover:text-white shadow-lg opacity-70 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
};

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-400 hover:text-white transition-all duration-300"
      aria-label="Social link"
    >
      <Icon size={20} />
    </a>
  );
}

export default Footer;