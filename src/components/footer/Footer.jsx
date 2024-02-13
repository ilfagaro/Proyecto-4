import React, { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footerHome mb-2">
      <div class="container col-sm-12">
        <div class="row d-flex justify-content-center">
          <div class="col-md-2 col-sm-6 mt-2 d-flex justify-content-center ">
            <img class="logo" src="/src/images/gryffindor.png" />
          </div>
          <div class="col-md-2 col-sm-6 mt-2 d-flex justify-content-center ">
            <img class="logo" src="/src/images/ravenclaw.png" />
          </div>
          <div class="col-md-2 col-sm-6 mt-2 d-flex justify-content-center ">
            <img class="logo" src="/src/images/slytherin.png" />
          </div>
          <div class="col-md-2 col-sm-6 mt-2 d-flex justify-content-center">
            <img class="logo" src="/src/images/hufflepuff.png" />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col mt-3 d-flex justify-content-center">
              <p>© 2024 CodeCrafters Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
