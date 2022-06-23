import React from "react";

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items); //updates status in api
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        {/* Replace the label for default radio with button from bootstrap */}
        {/* "for" is changed to flexRadioDefault1 because the radiobutton doesnt change on selecting button */}
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
