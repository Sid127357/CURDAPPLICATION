import React from 'react'

const Home = () => {
  return (
    <>
      <div className='mt-5'>
        <div className="container ">
          <div className="add_btn mt-2 mb-2">
            <button className='btn btn-primary'>Add Data</button>
          </div>
          <table className="table">
            <thead>
              <tr className='table-dark'>
                <th scope="col">Id</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className='d-flex justify-content-around'>
                  <button className='btn btn-success'><i className="fa-solid fa-eye"></i></button>
                  <button className='btn btn-primary'><i className="fa-solid fa-pen"></i></button>
                  <button className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home