import React from 'react';
import {connect} from "react-redux";

export const withConnectedView = (WrappedComponent) => {
  const ComponentToConnect = props => <WrappedComponent {...props} />;
  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
      mapStateToProps,
      mapDispatchToProps
  )(ComponentToConnect);
};

export default withConnectedView;

