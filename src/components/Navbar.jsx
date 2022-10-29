import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const  handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PRACTI-K.</h1>

            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#00df9a]   cursor-pointer '>
                    Home
                </li>
                <li className='p-4 hover:text-[#00df9a]  cursor-pointer '>
                    Company
                </li>
                <li className='p-4 hover:text-[#00df9a]  cursor-pointer '>
                    Resources
                </li>
                <li className='p-4 hover:text-[#00df9a]  cursor-pointer '>
                    About
                </li>
                <li className='p-4 hover:text-[#00df9a]  cursor-pointer '>
                    Contact
                </li>
            </ul>

        <div onClick={handleNav} className="block md:hidden">
            {
                !nav ? <AiOutlineClose  className="cursor-pointer" size={25 }/> : <AiOutlineMenu className="cursor-pointer"  size={25} />
            }
        </div>                               

                {/*Mobile Menu*/ }

            <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-out duration-300 z-10 md:hidden" : "fixed left-[-100%] " }>

                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-6'>PRACTI-K</h1>

                <ul className=" uppercase p-4" >
                    <li className='p-4 hover:text-[#00df9a] border-b border-gray-600  cursor-pointer '>
                        Home
                    </li>
                    <li className='p-4 hover:text-[#00df9a] border-b border-gray-600  cursor-pointer '>
                        Company
                    </li>
                    <li className='p-4 hover:text-[#00df9a] border-b border-gray-600  cursor-pointer '>
                        Resources
                    </li>
                    <li className='p-4 hover:text-[#00df9a] border-b border-gray-600  cursor-pointer '>
                        About
                    </li>
                    <li className='p-4 hover:text-[#00df9a] border-b border-gray-600  cursor-pointer '>
                        Contact
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar