import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_all_user, remove_user, selectUsers } from '../redux/userSlice';

const View = () => {
  // let allUser = useSelector((state)=>state.user.users)

  const dispatch = useDispatch()

  let allUser = useSelector(selectUsers)
  console.log(allUser);
  return (
    <div>
      <h1>View Users</h1>
      <table className="table-auto border-separate border border-slate-400 ">
  <thead>
    <tr>
      <th className="border border-slate-300 ">Sr. No</th>
      <th className="border border-slate-300 ">Username</th>
      <th className="border border-slate-300 ">email</th>
      <th className="border border-slate-300 ">password</th>
      <th className="border border-slate-300 ">Remove</th>
    </tr>
  </thead>
  <tbody>
      {allUser.length == 0  && <td><tr aria-colspan={2}>No User Found</tr></td>}
      {allUser.map((user,i)=>
    <tr>
      <td className="border border-slate-300 ">{i+1}</td>
      <td className="border border-slate-300 ">{user.username}</td>
      <td className="border border-slate-300 ">{user.email}</td>
      <td className="border border-slate-300 ">{user.password}</td>
      <td className="border border-slate-300 ">
        <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
         hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-red-600" onClick={()=>dispatch(remove_user(i))}>Remove</button>
      </td>
    </tr>)}
  </tbody>
</table>

<button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
         hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-red-600 mt-3" onClick={()=>dispatch(remove_all_user())}>Remove All</button>

      </div>
      
  )
}

export default View
