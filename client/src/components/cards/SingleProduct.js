import React from 'react';
import {Card, Tabs} from 'antd';
import {Link} from 'react-router-dom';
import {HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Schilderij from "../../images/mooi.jpeg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";

const { TabPane } = Tabs;

const SingleProduct = ({product}) => {
    const {title, images, description, _id, } = product;
    return (
        <>
            <div className="col-md-7">
                {images && images.length ? (
                
                <Carousel>
                {/* <Carousel showArrows={true} autoPlay infiniteLoop> */}

                {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
                </Carousel> 
                ) : (
                    <Card
                        cover={
                            <img
                                src={ Schilderij }
                                className="mb-3 card-image"
                            />
                        }
                    ></Card>
                )} 

                <Tabs type="card">
                    <TabPane tab="Description" key="1">
                        {description && description}
                    </TabPane>
                    <TabPane tab="ContactInfo" key="2">
                        Voor informatie bel .......
                    </TabPane>
                </Tabs>
            </div>

            <div className="col-md-5">
            <h1 className="p-3">{title}</h1>

                <Card
                    actions=
                    {[
                        <>
                            <ShoppingCartOutlined className="text-success" /> <br /> Add to Cart
                        </>,
                        <Link>
                            <HeartOutlined className="text-info" /> <br /> Add to Wishlist
                        </Link>,
                    ]}
                >
                   <ProductListItems product={product} />
                   <RatingModal>
                    <StarRating 
                        name={_id}
                        numberOfStarts={5}
                        rating={0}
                        changeRating={(newRating, name) => 
                            console.log("newRating", newRating, "name", name)
                        }
                        isSelectable={true}
                        starRatedColor="gold"
                    />
                   </RatingModal>
                </Card>
            </div>
        </>
    );
};

export default SingleProduct;