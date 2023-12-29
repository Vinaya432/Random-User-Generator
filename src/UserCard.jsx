import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import axios from 'axios'


function UserCard() {
  const colors = ['#F05733','#FFC0CB', '#33F657', '#3357FF', '#FFFF33', '#33FFFF'];  const [userData,setUserData] = useState([])
  const [bgColor,setBgColor] = useState('#DEB887')
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * (30-1+1))+1)

  useEffect(()=>{
    handleUser()},[])

  const handleUser =()=>{
    axios.get('https://dummyjson.com/users').then(res=>{
      console.log(res.data.users);
      setUserData(res.data.users)
    }).catch(err=>{
      console.log(err);
    })
  }

  const changeColorIndex=()=>{
    const randomColor= colors[Math.floor(Math.random()*colors.length)]
    const randomnum = Math.floor(Math.random() * (30-1+1))+1
    setBgColor(randomColor)
    setRandomIndex(randomnum)
  } 
 
  

  return (
    <>
      { userData.length > 0 ? (userData.filter((detail)=>detail.id==randomIndex)
        .map((item, index) => (
          <Card className='shadow' key={index} style={{backgroundColor: bgColor}}> 
          <Card.Img style={{height:'150px',width:'150px'}} className='rounded-circle border ms-5' src={item.image} />
          <Card.Body>
            <Card.Title className='text-center'>{item.firstName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">{item.gender}</Card.Subtitle>
            <hr />
            <h5 className='fw-bold'>User Details</h5>
            <p><span className='fw-bold fs-6'>Job Title :</span>{item.company.department}</p>
            <p><span className='fw-bold fs-6'>Company : </span>{item.company.name} </p>
            <p><span className='fw-bold fs-6'>Home Address :</span>{item.address.address} </p>
            <p><span className='fw-bold fs-6'>Birth Date :</span>{item.birthDate}</p>
            <p><span className='fw-bold fs-6'>Age : </span>{item.age} </p>
            <p><span className='fw-bold fs-6'>Email:</span>{item.email} </p>
            <p><span className='fw-bold fs-6'>Mobile Number:</span>{item.phone}</p>
            <Button onClick={changeColorIndex} className='btn' variant="primary" >New User</Button>
          </Card.Body>
          </Card>
        ))
      ) : (
        <p>No user data available</p>
      )}
         
        
    </>
  )
}

export default UserCard
   
