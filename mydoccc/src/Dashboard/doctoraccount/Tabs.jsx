
const Tabs=({tab,setTab})=>{
    return(
        <>

         <div style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',maxHeight:'800px',backgroundColor:'white'}}>
            <button onClick={()=>setTab('overview')} className={`btn w-100 ${tab=='overview'?`btn-dark`:`btn-ligh`}`}>Overview</button>
            <button onClick={()=>setTab('profile')} className={`btn w-100 mt-2 ${tab=='profile'?`btn-dark`:`btn-ligh`}`}>Profile</button>
            <button onClick={()=>setTab('appointments')} className={`btn w-100 mt-2 ${tab=='appointments'?`btn-dark`:`btn-ligh`}`}>Appointments</button>

         </div>
        </>
    )
}
export default Tabs;