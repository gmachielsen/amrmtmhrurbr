import React from 'react';
import {Link} from 'react-router-dom';

const AdminNav = () => (
    <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/artwork" className="nav-link">Artwork</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/artworks" className="nav-link">Artworks</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/subject" className="nav-link">Subject</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/category" className="nav-link">Category</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/sub" className="nav-link">Sub Category</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/style" className="nav-link">Style</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/technique" className="nav-link">Technique</Link>
            </li>

            {/* <li className="nav-item">
                <Link to="/admin/coupon" className="nav-link">Coupons</Link>
            </li> */}

            <li className="nav-item">
                <Link to="/user/password" className="nav-link">Password</Link>
            </li>

        </ul>
    </nav>
);

export default AdminNav