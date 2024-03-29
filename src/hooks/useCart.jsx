import { useQuery } from '@tanstack/react-query'
import useAuth from "./useAuth";
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const {user,loading}=useAuth()
    // const token= localStorage.getItem('access_token_bistro_boss')
    const  [axiosSecure]=useAxiosSecure()
    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['carts',user?.email],
        enabled: ! loading, 
        // queryFn: async ()=>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{headers:{authorization:`bearer ${token}`}})
        //     return res.json()
        // }, 
        // or 
        queryFn: async ()=>{
            const res = await axiosSecure (`/carts?email=${user?.email}`)
            console.log("res form axios ",res)
            return res.data;
        },

      })

      return [cart,refetch]
       
};

export default useCart;

