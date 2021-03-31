import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from '../../../components/forms/FileUpload';
import {LoadingOutlined} from '@ant-design/icons';
// import {useParams} from 'react-router-dom';
import ProductUpdateForm from '../../../components/forms/ProductUpdateForm';

const initialState = {
    title: "",
    description: "",
    price: "",
    category: "",
    subs: [],
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: "",
    brand: "",
};
// const ProductUpdate = (props) => {
const ProductUpdate = ({ match }) => {
    // state
    const [values, setValues] = useState(initialState);
    const [categories, setCategories] = useState([]);
    const [subOptions, setSubOptions] = useState([]);
    const [showSub, setShowSub] = useState([]);

    const { user } = useSelector((state) => ({ ...state }));
    // router
    // let {slug} = useParams();
    // let params = useParams();
    const { slug } = match.params;

    useEffect(() => {
        loadProduct();
        loadCategories();
    }, [])

    const loadProduct = () => {
        getProduct(slug)
        .then((p) => {
            // console.log('single product', p)
            setValues({ ...values, ...p.data });
        });
    };

    const loadCategories = () => 
    getCategories().then((c) => {setCategories(c.data);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleCategoryChange = (e) => {
        e.preventDefault()
        console.log('CLICKED CATEGORY', e.target.value);
        setValues({ ...values, subs: [], category: e.target.value });
        getCategorySubs(e.target.value).then((res) => {
            console.log("SUB OPTIONS ON CATEGORY CLICK", res);
            setSubOptions(res.data);
        });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>

                <div className="col-md-10">
                    <h4>Product update</h4>
                    {/* {JSON.stringify(props.match.params.slug)} */}
                    {/* {JSON.stringify(match.params.slug)}     */}
                    {/* {JSON.stringify(slug)} */}
                    {/* {JSON.stringify(params)} */}
                    {/* {JSON.stringify(values)} */}
                    <ProductUpdateForm 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setValues={setValues}
                        values={values}
                        handleCategoryChange={handleCategoryChange}
                        categories={categories}
                        subOptions={subOptions}
                    />
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default ProductUpdate;