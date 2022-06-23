import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // let prev = () => {
  //   if (pageNumber === 1) return; //there will be no negative pagenumber generated due to return statement, eg: if x=-1, it will return page 1
  //   setPageNumber((x) => x - 1);
  // };
  // let next = () => {
  //   setPageNumber((x) => x + 1); //default value of x=1 in useState in App.js
  // };

  //https://www.npmjs.com/package/react-paginate, all the below commands can be found on this link
  //info?<---the question mark after info represents the api takes some time to generate data and hence reloads properly
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1} //force the page number if they dont work properly
      pageCount={info?.pages}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1); //since react pagination starts from 0, add 1 to set to correct page
      }}
    />
  );
  // <div className="container d-flex justify-content-center gap-5 my-5">
  //   <button onClick={prev} className="btn btn-primary">
  //     Prev
  //   </button>
  //   <button onClick={next} className="btn btn-primary">
  //     Next
  //   </button>
  // </div>
};

export default Pagination;
