import React, {useEffect, useState} from 'react'
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    createSubject,
    getSubjects,
    removeSubject,
} from "../../../functions/subject";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import SubjectForm from "../../../components/forms/SubjectForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const SubjectCreate = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [name, setName ] = useState("");
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState([]);
    // step 1
    const [keyword, setKeyword] = useState("");


    useEffect(() => {
        loadSubjects();
    }, []);

    const loadSubjects = () => 
        getSubjects().then((c) => setSubjects(c.data));

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        setLoading(true);
        createSubject({ name }, user.token)
        .then(res => {
            setLoading(false);
            setName('');
            toast.success(`"${res.data.name}" is created`);
            loadSubjects(); // haalt na het toevoegen weer categorietjes op zodat nieuwe er tussenstaat
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
            removeSubject(slug, user.token)
            .then((res) => {
                setLoading(false);
                toast.error(`${res.data.name} deleted`);
                loadSubjects(); // haalt na het toevoegen weer categorietjes op zodat nieuwe er t
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
                        <h4>Create Subject</h4>
                    )}
                    {/* categoryForm() */}
                    <SubjectForm 
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                    />

                    {/* step 2 and 3  see form localserach.js */ }
                    <LocalSearch keyword={keyword} setKeyword={setKeyword} />

                    {/* step 5 */}
                    {subjects.filter(searched(keyword)).map((c) => (
                        <div className="alert alert-secondary" key={c._id}>
                            {c.name}
                            <span onClick={() => handleRemove(c.slug)} 
                            className="btn btn-sm float-right">
                                <DeleteOutlined className="text-danger" />
                            </span>
                            <Link to={`/admin/subject/${c.slug}`}>
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

export default SubjectCreate;