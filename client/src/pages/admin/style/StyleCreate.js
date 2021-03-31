import React, {useEffect, useState} from 'react'
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    createStyle,
    getStyles,
    removeStyle,
} from "../../../functions/style";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import StyleForm from "../../../components/forms/StyleForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const StyleCreate = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [name, setName ] = useState("");
    const [loading, setLoading] = useState(false);
    const [styles, setStyles] = useState([]);
    // step 1
    const [keyword, setKeyword] = useState("");


    useEffect(() => {
        loadStyles();
    }, []);

    const loadStyles = () => 
        getStyles().then((c) => setStyles(c.data));

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        setLoading(true);
        createStyle({ name }, user.token)
        .then(res => {
            setLoading(false);
            setName('');
            toast.success(`"${res.data.name}" is created`);
            loadStyles(); // haalt na het toevoegen weer categorietjes op zodat nieuwe er tussenstaat
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            if (err.response.status === 400) toast.error(err.response.data);
        });
    };

    const handleRemove = async (slug) => {
        // let answer = window.confirm("Delete?");
        // console.log(answer, slug);
        if(window.confirm("Delete?")) {
            setLoading(true)
            removeStyle(slug, user.token)
            .then((res) => {
                setLoading(false);
                toast.error(`${res.data.name} deleted`);
                loadStyles(); // haalt na het toevoegen weer categorietjes op zodat nieuwe er t
            })
            .catch(err => {
                if (err.response.status === 400) {
                setLoading(false);
                toast.error(err.response.data);
                }
            });
        }
    };

    // const categoryForm = () => (
    //     <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //             <label>Name</label>
    //             <input
    //                 type="text"
    //                 className="form-control"
    //                 onChange={(e) => setName(e.target.value)}
    //                 value={name}
    //                 autoFocus
    //                 required
    //             />
    //             <br/>
    //             <button className="btn btn-outline-primary">Save</button>
    //         </div>
    //     </form>
    // );
    



    // step 4
    const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <br/>
                <div className="col">
                    {loading ? (
                        <h4 className="text-danger">Loading..</h4>
                    ) : (
                        <h4>Create Style</h4>
                    )}
                    {/* categoryForm() */}
                    <StyleForm 
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                    />

                    {/* step 2 and 3  see form localserach.js */ }
                    <LocalSearch keyword={keyword} setKeyword={setKeyword} />

                    {/* step 5 */}
                    {styles.filter(searched(keyword)).map((c) => (
                        <div className="alert alert-secondary" key={c._id}>
                            {c.name}
                            <span onClick={() => handleRemove(c.slug)} 
                            className="btn btn-sm float-right">
                                <DeleteOutlined className="text-danger" />
                            </span>
                            <Link to={`/admin/style/${c.slug}`}>
                                <span className="btn btn-sm float-right">
                                    <EditOutlined className="text-warning" />
                                </span>                            
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StyleCreate;