
const Tabs=({tab,setTab})=>{
    return(
        <>

         <div style={{borderRadius:' 0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '1.25rem',maxHeight:'800px',minWidth:'150px',backgroundColor:'white'}}>
            {/* <button onClick={()=>setTab('overview')} className={`btn w-100 `} style={{
    backgroundColor: tab === 'overview' ? '#3E8989' : 'white',color: tab === 'overview' ? 'white' : 'black'}}>Overview</button> */}
            <button onClick={()=>setTab('profile')} className={`btn w-100 mt-2 `}  style={{
    backgroundColor: tab === 'profile' ? '#3E8989' : 'white',color: tab === 'profile' ? 'white' : 'black'}}>Profile Settings</button>
            <button onClick={()=>setTab('appointments')} className={`btn w-100 mt-2 `} style={{
    backgroundColor: tab === 'appointments' ? '#3E8989' : 'white',color: tab === 'appointments' ? 'white' : 'black'}}>ChangePassword</button>

         </div>
        </>
    )
}
export default Tabs;