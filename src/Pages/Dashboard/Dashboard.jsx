import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className='font-bold text-white bg-gray-800 text-2xl'>Dashboard</div>

            {/* parent div */}
            <div className='w-full bg-blue-900 flex gap-3 text-white'>
                {/* Sidebar */}

                <div className='w-[20%] h-screen p-3 bg-gray-800 text-2xl text-white'>

                    <ul className='font-bold'>
                        <Link to={"users"}><li className='mb-3'>Users</li></Link>
                        <Link to={"profiles"}><li className='mb-3'>Profile</li></Link>
                        <Link to={"jobs"}><li className='mb-3'>Jobs</li></Link>
                    </ul>

                </div>

                {/* Main Area */}

                {/* Card Parent */}
                <div>

                    <div className='mt-3 flex gap-3'>
                        {/* widgets */}

                        <CardWidget />
                        <CardWidget />
                        <CardWidget />
                        <CardWidget />

                    </div>

                    {/* Show Component According to URL */}

                    <div className='mt-5'>
                        <Outlet />
                    </div>

                </div>

            </div>
        </div>

    )
}

const CardWidget = () => {
    return (

        <div className='w-[250px] h-[100px] rounded bg-gray-800 text-white'>

        </div>
    )
}

export default Dashboard