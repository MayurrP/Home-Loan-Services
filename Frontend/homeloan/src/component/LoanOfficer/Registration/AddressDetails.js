import React from "react";
import { useState } from "react";
import LocalAddress from "./LocalAddress";
import PermanentAddress from "./PermanentAddress";
const AddressDetails = (props) => {
    const [local, setlocal] = useState('');
    const [permanent, setpermanent] = useState('');

    props.onlocalAddressDetails(local);
    props.onpermanentAddressDetails(permanent);

   // console.log(local,permanent);
    return(
        <div>
        <LocalAddress onLocalAddress={setlocal}></LocalAddress>
        <PermanentAddress onPermanentAddress={setpermanent}></PermanentAddress>
        </div>
    );
    
}

export default AddressDetails;