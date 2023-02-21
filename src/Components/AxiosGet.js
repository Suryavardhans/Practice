import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap'


function AxiosGet() {
  const[data,setData] =useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            response=>setData(response.data))
    },[])
  return (
    <div>
       <Table>
        <thead>
            <tr>
    
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                </tr>   
                </thead>  
            {
            data.map((item)=>{
                return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
                )
            
            })
            }
            </Table>
    </div>
  )
}

export default AxiosGet