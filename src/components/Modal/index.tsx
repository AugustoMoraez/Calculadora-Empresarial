import { Modal } from "./style";
import banner from "../../assets/modal-banner.png";
import { useEffect, useState } from "react";
import checkModalToken from "../../helpers/checkModalToken";

export const ModalHome = () => {
    
    const[toggle,setToggle] = useState(false);
    
    useEffect(()=>{
        const modalToken = checkModalToken();
        if(modalToken === null){
            setToggle(true);
            localStorage.setItem("modalToken",JSON.stringify(!toggle));
        }
    })
    
    return(
        <Modal onClick={()=>setToggle(!toggle)} display={toggle ? "true" : "false"}>
            <img src={banner} alt="" />
        </Modal>
    )
}