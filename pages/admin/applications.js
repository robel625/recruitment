
import ApplicationsList from '../../components/admin/ApplicationsList'
import SideNavbar from '../../components/admin/SideNavbar'
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
//import { connectToDatabase } from "../../util/mongodb";
import axios from "axios";
import { useEffect, useState } from "react";


function applications() {

 
  

  return (
    <div>
      <div className='flex'>
           <SideNavbar/>
           <ApplicationsList/>
        </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     };
//   }

  // export const getServerSideProps = async (context) => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   console.log(res)
  //   return {
  //     props: {
  //       job: res.data,
  //     },
  //   };
  // };



export default applications