import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";
const useAdmin=()=>{
    const {user,loading}=useAuth()
    const [axiosSecure]=useAxiosSecure();
    // use axios secure width  react query 
    const {data:isAdmin,isLoading:isAdminLoader}=useQuery({
        queryKey:['isAdmin',user?.email],
        enabled: !loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log("is admin response ", res);
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoader]
}

export default useAdmin;