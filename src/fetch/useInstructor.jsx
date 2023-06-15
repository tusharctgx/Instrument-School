import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res);
            return res?.data?.instructor;
        }
    })
    return [isInstructor, isLoading]
}
export default useInstructor;