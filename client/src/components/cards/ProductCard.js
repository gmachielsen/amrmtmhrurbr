import React from 'react'
import { Card } from 'antd';
import { EyeOutlined, ShoppingCardOutlined } from '@ant-design/icons';
import schilderij from "../../images/mooi.jpeg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product }) => {
    // destructure 
    const { images, title, description, slug, price  } = product;
    return (
        <Card>     
            <Link to={`/artwork/${slug}`}>            
            <img 
                src={images && images.length ? images[0].url : schilderij }
                style={{ width: "100%", objectFit: "cover", padding: "0px", margin: "0"}}
                className=""
            />
            <div>
                <h1 style={{ textAlign: "center"}}>{title}</h1>
                <h2>€ {price}</h2>
            </div>
            </Link>     
        </Card>
    );
};
export default ProductCard;
