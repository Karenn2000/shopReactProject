import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../redux/action";
import { getMoney } from "../redux/action";

const Card = () => {
  const state = useSelector((state) => state.handleCart);
  const totalPrice = state.reduce((total, product) => total + product.price, 0);

  const dispatch = useDispatch();

  const deleteItem = (product) => {
    dispatch(removeCart(product));
  };

  const money = (product) => {
    dispatch(getMoney(product));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          paddingBottom: "10px",
        }}
      >
        {state.map((prod) => {
          return (
            <>
              <div className="col-md-3 mb-2">
                <div class="card h-100 text-center p-4" key={prod.id}>
                  <img
                    src={prod.image}
                    class="card-img-top"
                    alt={prod.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {prod.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text lead fw-bold">${prod.price}</p>
                    <span
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "5px 16px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "18px",
                        fontWeight: "bold",
                        transition: "background-color 0.3s",
                        marginRight: "10px",
                      }}
                      onClick={() => deleteItem(prod)}
                    >
                      X
                    </span>

                    <span
                      className="btn btn-outline-dark px-4 py-2"
                      onClick={() => money(prod)}
                    >
                      Buy
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <span
        style={{
         // display: "flex",
          //alignItems: "center",
          padding: "10px 20px",
          //border: "2px solid black",
          borderRadius: "5px",
          //borderRadius: "5px", // Example border-radius
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Total Price {totalPrice.toFixed(1)} $
      </span>
    </div>
  );
};

export default Card;
