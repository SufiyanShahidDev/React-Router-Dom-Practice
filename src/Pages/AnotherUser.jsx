import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { data } from 'react-router-dom'

const AnotherUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUserData() {
            try {
                let result = await axios.get("https://dummyjson.com/users")
                setUsers(result.data.users)

            } catch (error) {
                console.log(error);
            }
        }

        getUserData()
    }, [])

    return (
        <div className='bg-blue-950'>

            <div className='cardParent flex flex-wrap gap-3.5 justify-around'>
                {users.length > 0 ? users.map((user) => <Link to={`/user/${user.id}`}><UserCard key={user.id} data={user} /></Link>) : <p className='flex justify-center items-center text-center'>No User!</p>}
            </div>

        </div>
    )
}

export default AnotherUser


const UserCard = ({data}) => {
    console.log(data);

    return (

        <div className='w-[300px] h-[100px] rounded-2xl p-3 bg-gray-950 text-white'>

            <h1>{data.firstName} {data.lastName}</h1>

            <p>{data.email}</p>

        </div>

    )

}