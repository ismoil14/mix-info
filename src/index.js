import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
// import App from "./App";
import Loader from "./components/Loader/index";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "./I18next.js";
import {store} from "./Redux/store";

ReactDOM.render(


  <Provider store={store}>
    
    <React.StrictMode>

  <Loader/>   

      <Suspense
        fallback={
          // <div
          //   className="loader"
          //   style={{
          //     fontSize: "50px",
          //     fontWeight: 500,
          //     fontFamily: "Fredoka",
          //     width: "100%",
          //     height: "100%",
          //     justifyContent: "center",
          //     display: "flex",
          //     alignItems: "center",
          //     position: "absolute",
          //   }}
          // >
          //   <div className="load"></div>
          // </div>
  <Loader/>   
        }
      > 
      
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
