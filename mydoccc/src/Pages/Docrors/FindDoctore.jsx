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

const FindDoctore = () => {
  const [searchdoctore, setSearchDoctore] = useState("");
  const [doctore, setDoctore] = useState([]);
  const [filteredDoctore, setFilteredDoctore] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/doctors")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDoctore(data);
          setFilteredDoctore(data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchDoctore(searchValue);
  
    const filtered = doctore.filter((doctor) => {
      const nameMatch = doctor.name.toLowerCase().includes(searchValue.toLowerCase());
      const specialtyMatch = selectedSpecialty
        ? doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
        : true;
      const areaMatch = selectedArea
        ? doctor.area.toLowerCase() === selectedArea.toLowerCase()
        : true;
  
      return nameMatch && specialtyMatch && areaMatch;
    });
  
    setFilteredDoctore(filtered);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container  mt-5">
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
            <select onChange={handleSpecialtyChange} value={selectedSpecialty} className="p-2" style={{border:'1px solid #959494',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
              <option value="">Specialties</option>
              <option value="Surgeon">Surgeon</option>
              <option value="Neurologist">Neurologist

</option>
              <option value="Dermatologist">Dermatologist

</option>
            </select>
            <select onChange={handleAreaChange} value={selectedArea} className="p-2" style={{border:'1px solid #959494',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
              <option value="">In this area</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Assiut">Assiut</option>
              <option value="El Ismailia">El Ismailia</option>
            </select>
            {/* <select onChange={handleSpecialtyChange} value={selectedSpecialty} className="p-2" style={{border:'1px solid #959494',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
              <option value="">In this City</option>
              <option value="El Gamaiaat">El Gamaiaat</option>
              <option value="El Mahata El Gadeda">El Mahata El Gadeda

</option>
              <option value="Manshiat Elshohada">Manshiat Elshohada
</option>
            </select> */}
          </div>
        </div>
        <div className="row mt-5">
          {filteredDoctore.length > 0 ? (
            filteredDoctore.map((doctor) => (
              <div className="col-lg-4 col-md-6" key={doctor.id}>
                <div className="card mb-3">
                  <img
                    src={doctor.photo ? doctor.photo : "./logo192.png"}
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: "350px", borderRadius: "10px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{doctor.name}</h6>
                    <div className="d-flex align-item-center justify-content-between">
                      <p className="card-text">
                        <span className="specialty p-1">{doctor.specialty}</span>
                      </p>
                      <div>
                        <img src={starIcon} alt="" />
                        <span>{doctor.avgRating}</span>
                        <span className="ms-1">({doctor.totalRating})</span>
                      </div>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <div>
                        <h6>+{doctor.totalPatients} patients</h6>
                        <p>At: {doctor.hospital}</p>
                        <p>{doctor.area}</p>
                     </div>
                      <Link to={`/${doctor.id}`} href="#" className="mt-3">
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
            <span>No results</span>
          )}
        </div>
      </div>
    </>
  );
};

export default FindDoctore;