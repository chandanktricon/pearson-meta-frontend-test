import React from "react";
import Button from '../elements/button';

export default class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pagination">
        <Button
          className='pagination__button'
          isSmall={true}
          disabled={this.props.currPage === 1}
          onClick={
            (this.props.currPage === 1) ?
              null : () => { this.props.getUsers(this.props.currPage - 1); }
          }
        >
          &#60;
        </Button>

        {[...Array(this.props.totalPages)].map((page, i) =>
          <Button
            className='pagination__button'
            isSmall={true}
            type={(this.props.currPage == i + 1) ? 'flatFilled' : 'flat'}
            key={i}
            onClick={() => { this.props.getUsers(i + 1); }}
          >
            {i + 1}
          </Button>
        )}

        <Button
          className='pagination__button'
          isSmall={true}
          disabled={this.props.currPage === this.props.totalPages}
          onClick={
            (this.props.currPage === this.props.totalPages) ?
              null : () => { this.props.getUsers(this.props.currPage + 1); }
          }
        >
          &#62;
        </Button>
      </div>
    );
  }
}
