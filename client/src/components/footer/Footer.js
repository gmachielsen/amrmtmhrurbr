import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";

const Footer = () => (
    <footer style={{ backgroundColor: '#000'}}>
            <section className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="content">
                                <h2>Blijf op de hoogte</h2>
                                <p>Schrijf je in voor onze nieuwsbrief en volg ons op social media</p>
                                <div className="subscribe input-group mb-3" style={{ justifyContent: 'center'}}>
                                {/* style={{ justify-content: 'center' }} */}
                                <form method="post" style={{display: 'flex'}}>
                                    <input type="text" name="email" className="form-control col-12" placeholder="Uw emailadres" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary col-12" type="submit">Button</button>
                                    </div>
                                </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row text-center d-flex justify-content-center pt-5 mb-3">

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="{{ route('frontend.about')}}">Over ons</Link>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="{{ route('all.artworks')}}">Kunstwerken</Link>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="#!">Voor bedrijven</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="{{ route('all.artists')}}">Kunstenaars</Link>
                        </h6>
                    </div>
                    
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="#!">Voor kunstenaars</Link>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight">
                        <Link to="{{ route('contact')}}">Contact</Link>
                        </h6>
                    </div>

                </div>

                    <hr className="rgba-white-light" style={{ margin: '0 15%'}}></hr>
                    <hr className="clearfix d-md-none rgba-white-light" style={{ margin: '10% 15% 5%'}}></hr>

                <div className="row pb-3">

                <div className="col-md-12 text-center">

                    <div className="mb-5 social flex-center">

                    <Link className="fb-ic">
                        <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                    </Link>
                    <Link className="tw-ic">
                        <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                    </Link>
                    <Link className="gplus-ic">
                        <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                    </Link>
                    <Link className="li-ic">
                        <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                    </Link>
                    <Link className="ins-ic">
                        <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                    </Link>
                    <Link className="pin-ic">
                        <i className="fab fa-pinterest fa-lg white-text"> </i>
                    </Link>

                    </div>

                </div>

                </div>
            </div>
    </footer>
);

export default Footer



// const UserFooter = () => 
//  (
//         <footer className="page-footer font-small black" style="background-color: black; font-family: proxima-nova,sans-serif;">
//             <section className="newsletter">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <div className="content">
//                                 <h2>Blijf op de hoogte</h2>
//                                 <p>Schrijf je in voor onze nieuwsbrief en volg ons op social media</p>
//                                 <div className="subscribe input-group mb-3" style="justify-content: center;">
//                                 <form method="post" style="display: flex;">
//                                     <input type="text" name="email" className="form-control col-12" placeholder="Uw emailadres" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                                     <div className="input-group-append">
//                                         <button className="btn btn-outline-secondary col-12" type="submit">Button</button>
//                                     </div>
//                                 </form>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         <div className="container">

//             <div className="row text-center d-flex justify-content-center pt-5 mb-3">

//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="{{ route('frontend.about')}}">Over ons</Link>
//                 </h6>
//             </div>

//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="{{ route('all.artworks')}}">Kunstwerken</Link>
//                 </h6>
//             </div>

//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="#!">Voor bedrijven</Link>
//                 </h6>
//             </div>
//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="{{ route('all.artists')}}">Kunstenaars</Link>
//                 </h6>
//             </div>
            
//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="#!">Voor kunstenaars</Link>
//                 </h6>
//             </div>

//             <div className="col-md-2 mb-3">
//                 <h6 className="text-uppercase font-weight">
//                 <Link to="{{ route('contact')}}">Contact</Link>
//                 </h6>
//             </div>

//             </div>
//             <hr className="rgba-white-light" style="margin: 0 15%;"/>


//             <hr className="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;" >

//             <div className="row pb-3">

//             <div className="col-md-12 text-center">

//                 <div className="mb-5 social flex-center">

//                 <Link className="fb-ic">
//                     <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
//                 </Link>
//                 <Link className="tw-ic">
//                     <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
//                 </Link>
//                 <Link className="gplus-ic">
//                     <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
//                 </Link>
//                 <Link className="li-ic">
//                     <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
//                 </Link>
//                 <Link className="ins-ic">
//                     <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
//                 </Link>
//                 <Link className="pin-ic">
//                     <i className="fab fa-pinterest fa-lg white-text"> </i>
//                 </Link>

//                 </div>

//             </div>

//             </div>
//             </div>

//         <div className="footer-copyright text-center py-3">© 2020 Copyright:
//             <Link to="https://mdbootstrap.com/"> Artisthub</Link>
//         </div>
//     </footer>
//     );


// export default UserFooter