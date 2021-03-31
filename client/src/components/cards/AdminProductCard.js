import React from "react";
import {Card} from 'antd';
import schilderij from "../../images/mooi.jpeg";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { Meta } = Card;

const AdminProductCard = ({product, handleRemove }) => {
    // destructure
    const { title, description, images, slug } = product;

    return (
        <Card cover={<img src={images && images.length ? images[0].url : schilderij} style={{ height: "500px", objectFit: "cover" }} className="p1" />}
            
            actions={[
                <Link to={`/admin/artwork/${slug}`}>
                    <EditOutlined className="text-warning" /> 
                </Link>,
                <DeleteOutlined
                    onClick={() => handleRemove(slug)} 
                    className="text-danger" />,
            ]}
        >
            <Meta 
                title={title} 
                description={`${description && description.substring(0, 40)}...`} 
            />
        </Card>
    );
};

// const AdminProductCard = ({product}) => {
//     return <div>{product.title}</div>
// };
export default AdminProductCard;