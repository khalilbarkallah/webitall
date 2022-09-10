import 'font-awesome/css/font-awesome.min.css'
import Nav from '../Nav/Nav'
import { AnyObject } from 'yup/lib/object'
import {useNavigate}  from 'react-router-dom'
import {useEffect} from 'react'


function Protected(props:AnyObject) {
    let Cmp=props.cmp
    const history = useNavigate();
    useEffect(()=>{


        if( !localStorage.getItem('user-info'))
         {
           history("/")
         }
       
         },[])
       
  return (
    <>
    <Cmp />

   
    </>
  );
}

export default Protected;