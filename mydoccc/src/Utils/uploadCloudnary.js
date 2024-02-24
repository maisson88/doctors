
// // const upload_preset=import.meta.env.VITE_UPLOAD_PREST
// // const cloud_name=import.meta.env.VITE_CLOUD_NAME
// const uploadImageToCloundary=async file=>{
//     const uploadData=new FormData()
//     uploadData.append('file',file)
//     uploadData.append('upload_preset','hellohello')
//     // uploadData.append('cloud_name',cloud_name)
//     const res=await fetch(`https://api.cloudinary.com/v1_1/dvfyd13tg/video/upload`,{
//         method:'post',
//         body:uploadData
//     })
//     const data=await res.json();
//     return data

    

// }
// export default uploadImageToCloundary;



// const upload_preset=import.meta.env.VITE_UPLOAD_PREST
// const cloud_name=import.meta.env.VITE_CLOUD_NAME
const uploadImageToCloundary=async (file,isVideo)=>{
    const uploadData=new FormData()
    uploadData.append('file',file)
    uploadData.append('upload_preset','hellohello')
    // uploadData.append('cloud_name',cloud_name)
    const url = isVideo ? 'https://api.cloudinary.com/v1_1/dvfyd13tg/video/upload' : 'https://api.cloudinary.com/v1_1/dvfyd13tg/image/upload';
    const res=await fetch(url,{
        method:'post',
        body:uploadData
    })
    const data=await res.json();
    return data

    

}
export default uploadImageToCloundary;