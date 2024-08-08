import { createSlice,nanoid } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        //pure function

        add_user:(state,action)=>{
            // console.log(action.payload);
            // state.users.push({...action.payload,id:Date.now()})
            state.users.push({...action.payload,id:nanoid()})
        },
        remove_user(state,action){
            state.users.splice(action.payload,1)
        },
        remove_all_user(state,action){
            state.users = []
        }
    }
})

export const {add_user,remove_user,remove_all_user} = userSlice.actions
export default userSlice

export const selectUsers = (state)=>state.user.users