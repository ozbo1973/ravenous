import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map((business,e) => {
            return <Business key={e} business={business} />;
          })
        }
      </div>
    );
  };
};

export default BusinessList;
