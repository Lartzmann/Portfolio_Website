import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-gray-400 py-14 mt-16 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Name */}
        <h2 className="text-white text-xl font-bold">Emmanuel Teye Lartey</h2>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=teyeemmanuel01@gmail.com&su=Collaboration%20Opportunity&body=Hello%20Emmanuel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20to%20work%20together.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ARegards%2C%0D%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            >
            <FaEnvelope />
        </a>


          <a
            href="https://github.com/Lartzmann"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-lartey-1709261bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter />
          </a> */}
          <a
            href="https://www.instagram.com/_lartzmann.19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Emmanuel Teye Lartey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
