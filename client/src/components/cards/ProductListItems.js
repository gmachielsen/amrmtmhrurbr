import React from 'react';
import {Link} from 'react-router-dom';
import { showAvarage } from "../../functions/rating";


const ProductListItems = ({ product }) => {

    const { price, category, subs, shipping, color, brand, quantity, sold } = product;
    return (
        <ul className="list-group">
            <li className="list-group-item">
                Prijs {" "}
                <span className="label label-default label-pill pull-xs-right">
                    € {price}
                </span>
            </li>

            {category && (
                <li className="list-group-item">
                    Categorie {" "}
                    <Link to={`/category/${category.slug}`} className="label label-default label-pill pull-xs-right">
                        {category.name}
                    </Link>
                </li>
            )}

            {subs && (
                <li className="list-group-item">
                    Sub categorieën
                    {subs.map((s) => (
                        <Link key={s._id} to={`/sub/${s.slug}`} className="label label-default label-pill pull-xs-right">
                            {s.name}
                        </Link>
                    ))}
                </li>
            )}
            <li className="list-group-item">
                Ingelijst "Shipping" {" "}
                <span className="label label-default label-pill pull-xs-right">
                    {shipping}
                </span>
            </li>
            <li className="list-group-item">
                Color {" "}
                <span className="label label-default label-pill pull-xs-right">
                    € {color}
                </span>
            </li>
            <li className="list-group-item">
                Brand {" "}
                <span className="label label-default label-pill pull-xs-right">
                    € {brand}
                </span>
            </li>
            <li className="list-group-item">
                Beschikbaar {" "}
                <span className="label label-default label-pill pull-xs-right">
                    {quantity}
                </span>
            </li>
            <li className="list-group-item">
                Verkocht {" "}
                <span className="label label-default label-pill pull-xs-right">
                    {sold}
                </span>
            </li>
            <li className="list-group-item">
                Waardering {" "}
                <span className="label label-default label-pill pull-xs-right">
                    {product && product.ratings && product.ratings.length > 0
                        ? showAvarage(product)
                        : "Nog geen waardering voor dit kunstwerk achtergelaten"
                    }
                </span>
            </li>
       
        
      
 
        </ul>
    );
};

export default ProductListItems;