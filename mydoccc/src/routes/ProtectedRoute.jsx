
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contextApi/AuthContext";
const ProtectedRoute=({childern,allowedRoles})=>{
    const {token,role}=useContext(authContext)
    const isAllowad=allowedRoles.includes(role)
    const accessibleRoute=
    token&&isAllowad? childern : <Navigate to='/login' replace={true}/>
    
    return accessibleRoute
    
}
export default ProtectedRoute;