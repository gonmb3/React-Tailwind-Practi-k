import React from 'react'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img
                    className='w-[500px] mx-auto my-4'
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className="flex flex-col justify-center sm:mx-auto md:mx-5">
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBORD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus ducimus provident quasi, consectetur ab ullam voluptas soluta numquam ratione eveniet distinctio porro ut reiciendis.</p>

                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Analytics