import React from "react";

const Application = () => {
  return (
    <form className="my-4">
      <div className="container">
        <h2 className="mb-4 display-4">Form Example</h2>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <select name="location" id="location" className="form-select">
            <option value="">Select...</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="terms" className="form-label">
            <input type="checkbox" name="terms" id="terms" />
            <span className="ms-2">I agree to the terms and conditions</span>
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Application;
