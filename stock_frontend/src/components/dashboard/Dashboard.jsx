import axios from 'axios'
import React, {useEffect} from 'react'
import axiosInstance from '../../AxiosInstance'

const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')
    useEffect(()=> {
        const fetchProtectedData = async ()=> {
            try{
                const response = await axiosInstance.get(
                    '/protected-view/'
                )
                console.log('success', response.data)
            }catch(error){
                console.error('error', error)
            }
        }
        fetchProtectedData()
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
