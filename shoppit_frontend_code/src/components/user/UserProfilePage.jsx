import UserInfo from "./UserInfo"
import OrderHistoryItemContainer from "./OrderHistoryItemContainer"
import { useEffect, useState } from "react"
import Spinner from "../ui/Spinner"
import api from "../../api"

const UserProfilePage = () => {

  

  return (
    <div className="container my-5">
    {/* Profile Header */}

    <UserInfo />
    

    {/* Order History */}
    <OrderHistoryItemContainer />
    
  </div>
  )
}

export default UserProfilePage
