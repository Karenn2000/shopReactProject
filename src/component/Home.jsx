import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="card">
      <div className="card bg-dark text-red border-0">
        <img src="https://top-fon.com/uploads/posts/2023-01/1674856399_top-fon-com-p-fon-dlya-prezentatsii-shopping-2.jpg"
         className="card-img" alt="Background" 
         height="550px"/>
        <div className="card-img-overlay d-flex flex-column
        justify-content-center">
            <div className="container">
          <h5 getProducts="card-title display-3 fw-border mb-0">
            New Season Arrivals
          </h5>
          <p className="card-text  lead fs-2">
                CHECK OUT TRENDS
          </p>
            </div>
          
          
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
