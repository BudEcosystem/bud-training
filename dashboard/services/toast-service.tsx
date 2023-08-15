import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from "react-toastify";
import ToastComponent from "../app/toast";

export async function showToast(type: string, title: string, message: string) {
    const options = {
        // autoClose: 6000,
        closeButton: false,
        type: toast.TYPE.INFO,
        // hideProgressBar: false,
        // position: toast.POSITION.TOP_LEFT,
        pauseOnHover: true,
        // transition: MyCustomTransition,
        progress: 0.2,
        icon: false
        // and so on ...
    };
    
    toast(<ToastComponent type={type} title={title} message={message} />, options)
}