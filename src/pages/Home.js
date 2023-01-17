import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import url from '../config/url'
export default function Home() {
  const [bookMarks,setBookMarks] = useState([])
  useEffect(()=>{
    fetch(`${url}/bookmark/allbookmarks`).then(res=>res.json()).then(data=>{
      console.log("ff",data.data.bookMarks);
      setBookMarks(data.data.bookMarks)
    })
  },[])
  return (
    <div>
      <h1>Book Marks</h1>
      <Link to={'create'}>Create New</Link>
       {bookMarks?.map(bookmark=>{
        console.log(bookmark);
        return([
          <h3 >{bookmark.title}</h3>,
          <a href={bookmark.url}>{bookmark.url}</a>,
          <h4>{moment(bookmark.Date).format('MM DD YY')}</h4>
        ])
       })}
        
        </div>
  )
}
