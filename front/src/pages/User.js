import React from "react";
import UpdateUserImage from "../components/UploadUserImage"
import UserDetails from "../components/UserDetails";

export default function User() {
  return (
    <div className="mt-[80px] min-h-[100vh]">
      <UpdateUserImage/>
      <UserDetails/>
    </div>
  );
}
