import React, { useState } from 'react'
import {Modal, Button} from 'antd'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import { StarOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom'


const RatingModal = ({ children }) => {
    const { user } = useSelector((state) => ({ ...state }));
    const [modalVisible, setModalVisible] = useState(false);

    let history = useHistory(); 

    const handleModal = () => {
        if (user && user.token) {
            setModalVisible(true);
        } else {
            history.push("/login");
        }
    };

    return (
        <>
            <div onClick={handleModal}>
                <StarOutlined className="text-danger" /> <br />{" "}
                { user ? "Laat waardering achter" : "Login om uw waardering te kunnen geven"}
            </div>
            <Modal
                title="Geef een waardering voor dit kunstwerk"
                centered 
                visible={modalVisible}
                onOk={() => {
                    setModalVisible(false);
                    toast.success("Bedankt voor het achterlaten van uw review. Uw review zal spoeding worden meegenomen in de totale beoordeling van dit kunstwerk")
                }}
                onCancel={() => setModalVisible(false)}
            >
                {children}
            </Modal>
        </>
    )
}

export default RatingModal;