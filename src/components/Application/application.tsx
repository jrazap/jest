import React from "react";

const Application = () => {
  return (
    <div className="application my-4">
      <div className="container">
        <h1 className="mb-4 fs-1 fw-bold text-capitalize">Application form</h1>
        <h3 className="fs-3 fw-normal text-capitalize">Enter your data</h3>
        <p className="text-muted" data-testid="custom-element">
          Please fill out this form carefully as it will be used for testing
          purposes only.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <div className="img-container">
              <img
                src="https://via.placeholder.com/200x200"
                className="img-fluid"
                alt="placeholder text"
                title="title text"
              />
            </div>
          </div>
          <form className="col-lg-6">
            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                aria-label="Name"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label">
                Bio
              </label>
              <textarea
                rows={5}
                className="form-control"
                id="bio"
                name="bio"
                placeholder="Enter Bio"
                aria-label="Bio"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <select
                name="location"
                id="location"
                className="form-select"
                aria-label="Location"
                value="New York"
                onChange={() => {}}
              >
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
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  aria-label="Terms"
                />
                <span className="ms-2">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
