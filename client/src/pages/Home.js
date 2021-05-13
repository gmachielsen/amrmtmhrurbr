import React from "react";
import NewArrivals from "../components/home/NewArrivals";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>


      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />


      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
        <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
        <SubList />
      <br />
      <br />
      <Footer />

    </>
  );
};

export default Home;
