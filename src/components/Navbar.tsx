// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-gray-700 via-gray-900 to-black px-8 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="text-white font-bold text-2xl ">LeetCode</div>
          <ul className="flex space-x-6 items-center">
            <li>
            
                <a  href="/" className="text-white hover:text-gray-400">Home</a>
             
            </li>
            <li>
             
                <a href="/problems" className="text-white hover:text-gray-400">Problems</a>
              
            </li>
            <li>
           
                <a href="/" className="text-white hover:text-gray-400"><img src="http://cdn.onlinewebfonts.com/svg/img_124200.png" className='w-12 h-12' /></a>
            
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
