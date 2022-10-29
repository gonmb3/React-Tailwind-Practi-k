import {FaUserAlt,FaUsers} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-2-[1240px] mx-auto grid md:grid-cols-3 gap-8">

            <div className="w-full shadow-xl flex flex-col p-4 mt-4 rounded-lg hover:scale-105 duration-300">
                <FaUserAlt className="mx-auto mt-3" size={40}/>
                <h2 className="text-2xl font-bold text-center py-7" >Single User</h2>
                <p className="text-center text-4xl font-bold">$200.00</p>
                <div className="flex flex-col mx-auto my-3">
                    <p className="py-2  border-b mx-8 mt-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 mt-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-50">
                <HiUsers className="mx-auto mt-3" size={40}/>
                <h2 className="text-2xl font-bold text-center py-7" >Single User</h2>
                <p className="text-center text-4xl font-bold">$300.00</p>
                <div className="flex flex-col mx-auto my-3">
                    <p className="py-2  border-b mx-8 mt-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>


            <div className="w-full shadow-xl flex flex-col p-4 mt-4 rounded-lg hover:scale-105 duration-300">
                <FaUsers className="mx-auto mt-3" size={40}/>
                <h2 className="text-2xl font-bold text-center py-7" >Single User</h2>
                <p className="text-center text-4xl font-bold">$500.00</p>
                <div className="flex flex-col mx-auto my-3">
                    <p className="py-2  border-b mx-8 mt-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                    <p className="py-2  border-b mx-8">Lorem, ipsum dolor.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>


        </div>
    </div>
  )
}

export default Cards