// import React from "react";
// import Header from "../../compentes/Header/Header";
// import "./FindDoctore.css"
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import starIcon from "../../assets/images/Star.png"
// const FindDoctore=()=>{
//     const [searchdoctore, setSearchDoctore] = useState('');
//     const [doctore, setDoctore] = useState([]);
//     const [filteredDoctore, setFilteredDoctore] = useState([]);

//     useEffect(() => {
//         fetch(' http://localhost:3002/doctors')
//             .then((response) => response.json())
//             .then((data) => {
//                 if (Array.isArray(data)) {
//                     setDoctore(data);
//                     setFilteredDoctore(data);
//                 }
//             })
//             .catch((error) => console.error('Error fetching products:', error));
//     }, []);

//     const handleSearchChange = (e) => {
//         const searchdoctore = e.target.value;
//         setSearchDoctore(searchdoctore);

//         const filtered = doctore.filter((doctore) =>
//             doctore.name.toLowerCase().includes(searchdoctore.toLowerCase())
//         );
//         setFilteredDoctore(filtered);
//     };
//     return(
//         <>
//         <Header/>
//         <div className="container  mt-5">
//             <div className="searchsection text-center " style={{border:'none',paddingTop:'20px',paddingBottom:'30px', borderRadius:'40px',backgroundColor:'#F8F8F8'}}>
//             <h6 className="mb-3">Find Top Doctor and Expert surgeon</h6>
          
//             <input className="w-75 search p-2" type="search" placeholder="    Search by the name of the doctor"
//             value={searchdoctore}
//             onChange={handleSearchChange}  style={{backgroundColor:'#FFFFFF'}}/>
           
            
            
//             </div>
//             <div className="row mt-5">
//             {
//             filteredDoctore ?(filteredDoctore.map((el) => {
//                    return(
//                     <div className="col-lg-4 col-md-6" key={el.id}>
                       
                       
//                     <div class="card mb-3">
//              <img src={el.photo?el.photo:"./logo192.png"} class="card-img-top" alt="..." style={{maxHeight:'350px',borderRadius:'10px'}}/>
//              <div class="card-body">
//                <h5 class="card-title">{el.name}</h5>
//                <div className="d-flex align-item-center justify-content-between">
//                <p class="card-text"><span className="specialty p-1">{el.specialty}</span></p>
//                 <div>
//                <img src={starIcon} alt="" />
//                <span>{el.avgRating}</span>
//                <span className="ms-1">({el.totalRating})</span>
//                </div>
//                </div>
//                <div className="d-flex align-item-center justify-content-between">
//                <div>
//                <h6>+{el.totalPatients} patients</h6>
//                <p>At: {el.hospital}</p>
//                </div>
//                <Link to={`/${el.id}`} href="#" class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
//              <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
//            </svg></Link>
              
//                </div>
               
              
              
              
              
//              </div>
//            </div>
//                    </div>
//                 )
                

//             })):(<h1>no result</h1>)} 
//             </div>
       
//         </div>
        
        
//         </>
//     )
// }
// export default FindDoctore;

import React, { useState, useEffect } from "react";
import Header from "../../compentes/Header/Header";
import "./FindDoctore.css";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import axios from "axios";
import Foter from "../../compentes/foater/Foter";

const FindDoctore = () => {
  const [searchdoctore, setSearchDoctore] = useState("");
  const [doctore, setDoctore] = useState([]);
  const [filteredDoctore, setFilteredDoctore] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(()=>{
    const getDoctore=()=>{
        axios.get("https://doctorz.onrender.com/api/v1/doctors")
        .then(res=>{
          if (Array.isArray(res.data.data.data)) {
                  setDoctore(res.data.data.data);
                   setFilteredDoctore(res.data.data.data);
                 }
            console.log(res.data.data.data)
            // setDoctorInfo(res.data.data.data)
        }).catch(error=>console.log(error))


    }
    getDoctore();

},[])
  // useEffect(() => {
  //   fetch("http://localhost:3002/doctors")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setDoctore(data);
  //         setFilteredDoctore(data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchDoctore(searchValue);
  
    const filtered = doctore.filter((doctor) => {
      const nameMatch = doctor.fullName.toLowerCase().includes(searchValue.toLowerCase());
      const specialtyMatch = selectedSpecialty
        ? doctor.specialization === selectedSpecialty
        : true;
      const areaMatch = selectedArea
        ? doctor.area === selectedArea
        : true;
        const cityMatch = selectedCity
        ? doctor.city === selectedCity
        : true;
  
      return nameMatch && specialtyMatch && areaMatch&&cityMatch;
    });
  
    setFilteredDoctore(filtered);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };


  return (
    <>
      <Header />
      <div style={{backgroundColor:'#3E8989',height:'400vh'}}>
      <div className="container pt-5">
        <div
          className="searchsection text-center "
          style={{
            border: "none",
            paddingTop: "20px",
            paddingBottom: "30px",
            borderRadius: "40px",
            backgroundColor: "#F8F8F8",
          }}
        >
          <h6 className="mb-3">Find Top Doctor and Expert surgeon</h6>

          <input
            className="w-75 search p-2"
            type="search"
            placeholder="Search by the name of the doctor"
            value={searchdoctore}
            onChange={handleSearchChange}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <div className="mt-3">
            <select onChange={handleSpecialtyChange} value={selectedSpecialty} className="p-2" style={{border:'1px solid rgb(223 223 223)',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
            <option value="">Specialization</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Orthopedics">Orthopedics

</option>
              <option value="Psychiatry">Psychiatry

</option>
            </select>
            <select onChange={handleAreaChange} value={selectedArea} className="p-2" style={{border:'1px solid rgb(223 223 223)'}}>
              <option value="">In this area</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Assiut">Assiut</option>
              <option value="Elsalam">Elsalam</option>
            </select>
            <select onChange={handleCityChange} value={selectedCity} className="p-2" style={{border:'1px solid rgb(223 223 223)',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
              <option value="">In this City</option>
              <option value="El Gamaiaat">El Gamaiaat</option>
              <option value="El Mahata El Gadeda">El Mahata El Gadeda

</option>
              <option value="Manshiat Elshohada">Manshiat Elshohada
</option>
              <option value="Portsaid">Portsaid
</option>
            </select>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="text-center mb-4">
            <h5 className="w-25 m-auto mb-3">OUR <span className="text-light">DOCTORS</span></h5>
          <p className="w-50 m-auto fw-light" style={{color:'white'}}>There are many types of doctor, including those that specialize in certain fields. A person’s specific concern will usually determine the type of doctor they require to treat their medical concern.</p>
          </div>
         
          {filteredDoctore.length > 0 ? (
            filteredDoctore.map((doctor) => (
              <div className="col-lg-4 col-md-6" key={doctor._id}>
                <div className="card mb-4"  style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',borderRadius:"20px",backgroundColor:"#FBFAFA"}}>
                  <img
                  // src={'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'}
                  src={doctor.photo}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "260px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                  <div className="d-flex justify-content-between align-item-center  mb-1 mt-3">
            <h6 class="card-title">{doctor.fullName}</h6>
           <p style={{color:"#626060"}}>{doctor.ratingAverage} ({doctor.ratingsQuantity})</p>
            </div>
           
                    
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        <span className="specialty p-1" style={{backgroundColor:'#96B9BB'}}>{doctor.specialization}</span>
                      </p>
                      <div className="d-flex align-items-center">
                     
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                      <p>{doctor.area}</p>
                      <p className="">{doctor.city}</p>
                        {/* <h6>+{doctor.totalPatients} patients</h6>
                        <p>At: {doctor.hospital}</p> */}
                        {/* <p>{doctor.area}</p> */}
                     </div>
                      <Link to={`/${doctor._id}`} href="#" className="mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          className="bi bi-arrow-right-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-5 mb-5" >
               <div class="spinner-border text-light" role="status">
            {/* <span class="sr-only">Loading...</span> */}
          </div>
            </div>
           
          )}
        </div>
      </div>

      </div>
          <Foter/>
    </>
  );
};

export default FindDoctore;