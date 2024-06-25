// "use client";

// import { getUserDetails } from "@/actions/get.user.details";
// import { useEffect, useState } from "react";
// // import { useSession } from "next-auth/react";
// import { useAtom } from "jotai";
// import { userAtom } from "@/lib/store";

// const userid = 
// const useUserDetails = () => {
//   // const { data: session, status } = useSession();
//   const [data, setdata] = useState<any>([]);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useAtom(userAtom);
//   useEffect(() => {
//     GetUserDetails();
//   }, []);

//   const GetUserDetails = async () => {
//     await getUserDetails().then((res: any) => {
//       setUserData(res);
//       setdata(res);
//       setLoading(false);
//     });
//   };
//   console.log(data);
//   return { data, loading };
// };

// export default useUserDetails;