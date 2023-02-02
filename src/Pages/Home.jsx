import React from 'react'
import { useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';
import DataBase from '../Firebasesetting';
import { UsersContext } from '../Store/UsersContext';

// console.log(state)
const Home = () => {

    const {state, dispatch} = useContext(UsersContext)
    console.log(state)
    const getUsers = async() => {


        const Collect = collection(DataBase, "users")
        const documents = await getDocs(Collect)
        dispatch({type:"CLOSE_LOADER", payload: false})
        const users = documents.docs.map(doc => {
            return doc.data()
        });
        return users;
        }
    useEffect(()=>{
const getData = async() => {
    const result = await getUsers();
    dispatch({type: "SET_USERS", payload: result})
    console.log(result)
}
 getData();
 
    }, [])
    
  return (
    <div>Home</div>
  )
}

export default Home