import React from "react";

function ReducerPage() {


  return (
    <div>
      <h1>useReducer example</h1>

      <div className="quantity-container">
        <button >
          <span class="material-icons-outlined">remove</span>
        </button>
        <input type="number" min="0" />
        <button>
          <span class="material-icons-outlined">add</span>
        </button>
      </div>
    </div>
  );
}

export default ReducerPage;
