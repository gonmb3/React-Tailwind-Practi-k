import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PRACTI-K.</h1>
            <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam laboriosam explicabo 
                recusandae eveniet cupiditate voluptates fuga officia alias.
            </p>
            <div className="flex md:w-[75%] my-6 justify-between">
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="lg:cols-span-2 flex justify-between">
            <div className="">
                <h6 className="font-medium text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>

            <div className="">
                <h6 className="font-medium text-gray-400">Support</h6>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>

            <div className="">
                <h6 className="font-medium text-gray-400">Company</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>

            <div className="">
                <h6 className="font-medium text-gray-400">Legal</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Footer