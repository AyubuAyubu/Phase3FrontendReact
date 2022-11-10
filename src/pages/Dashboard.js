import React from "react";
import {Link}from "react-router-dom"

const Dashboard = ({students}) => {
  function editItem(e){
    console.log(e)
  }
  return (
    <div className="ml-10">
    <h1 className="text-[44px] text-[#8F6107]">List of all the Students</h1>
      <table>
        <tr>
          <th>No</th>
          <th>Student Name</th>
          <th>Admission number</th>
          <th>Course_id</th>
          <th>Class name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
     
          {students.map((a,index)=>{
            return(
              <tr>

          <td className='px-10'>{index+1}</td>
          <td className='px-10'>{a.name}</td>
          <td className='px-10'>{a.adm_no}</td>
          <td className='px-10'>{a.course_id}</td>
          <td className='px-10'>{a.class_name}</td>
          <td><Link to="/edit"state={{a}}><button>Edit</button></Link></td>
          <td><button>Delete</button></td>
        </tr>
            )
          })}
         </table>
  </div>
  );
};
 export default Dashboard;
