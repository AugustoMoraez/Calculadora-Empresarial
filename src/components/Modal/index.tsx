import { Modal } from "./style";
import banner from "../../assets/banner-modal.png";

export const ModalHome = () => {
    return(
        <Modal display={true}>
            <img src={banner} alt="" />
        </Modal>
    )
}