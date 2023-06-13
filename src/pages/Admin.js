import React from "react";
import AdminForm from "../components/AdminForm";
import NavBar from "../components/NavBar";

export default function Admin() {
  return (
    <>
      <NavBar faded={true} showAdmin={false} />
      <AdminForm />
    </>
  );
}
