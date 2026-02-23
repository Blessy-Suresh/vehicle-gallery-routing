import React, { useState } from "react";
import Bike from "./vechicle/Bike";
import Car from "./vechicle/Car";
import Truck from "./vechicle/Truck";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <h1>Vehicle Gallery</h1>

      <button onClick={() => setActiveModal("bike")}>Bike</button>
      <button onClick={() => setActiveModal("car")}>Car</button>
      <button onClick={() => setActiveModal("truck")}>Truck</button>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setActiveModal(null)}
            >
              X
            </button>

            {activeModal === "bike" && <Bike />}
            {activeModal === "car" && <Car />}
            {activeModal === "truck" && <Truck />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
