import React from 'react'
import {useState,useEffect} from "react"
import "./index.css"
const CustomerForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        employeeId:'',
        city:'',
        gender:''
    })
    const [, forceUpdate] = useState();
    // Load data from local storage on component mount
    const savedData = JSON.parse(localStorage.getItem('customerData'));
  useEffect(() => {
    
    if (savedData) {
      setFormData(savedData);
    }
  }, []);
  // Save data to local storage
  const saveData = () => {
    localStorage.setItem('customerData', JSON.stringify(formData));
  };
    // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    forceUpdate({});
  };
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
     <div className="full-screen-container">
        <div className="customer-form-container">
        <form onSubmit={handleSubmit}>
        <h2 className="customer-form-title">Customer Form</h2>
        <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          ></input>
          </div>
          <div className="input-group">
          <label htmlFor="employeeId">Employee Id:</label>
            <input type="number"  name="employeeId" id="employeeId" placeholder="Enter Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required 
          ></input>
          </div>
          <div className="input-group">
          <label  htmlFor="city">City:</label>
        <select className="input-select"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        </div>
        <div className="input-radio-group">
        <label htmlFor="gender" >Gender:</label>
        <div>
        <input className='radio-button'
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleChange}
          required
        />
        <label className='gender-label' htmlFor="male">Male</label>
        <input className='radio-button'
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="female">Female</label>
        </div>
        </div>
        <br/>
        <button className="customer-form-button" type="submit" >
          Save
        </button>
        </form>
            <div className='display-container'>
            <div className="display-info">
        <h2 className="display-info-header">Customer Information</h2>
        
        <div>
        <div className='display-main'>
            <p className='display-label no-margin'>Name:</p>
            <p className='no-margin'>{savedData.name}</p>
        </div>
        <div className='display-main '>
            <p className='display-label no-margin' >EmployeeId:</p>
            <p className='no-margin'>{savedData.employeeId}</p>
        </div>
        <div className='display-main'>
            <p className='display-label no-margin' >City:</p>
            <p className='no-margin'>{savedData.city}</p>
        </div>
        <div className='display-main'>
            <p className='display-label no-margin' >Gender:</p>
            <p className='no-margin'>{savedData.gender}</p>
        </div>
        </div>
        </div>  
        </div>
      </div>
      </div>  
    </>
    
  )
}

export default CustomerForm