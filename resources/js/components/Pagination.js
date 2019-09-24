import React from "react";
import Paginate from 'react-js-pagination';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div className="float-lg-right my-4 mb-5">
        <Paginate
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          disabledClass="disabled"
          prevPageText="Previous"
          nextPageText="Next"
        />
      </div>
    );
  }
}

export default Pagination;
