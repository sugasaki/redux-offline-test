import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { succeedAlways, succeedSometimes, failSometimes, followUser } from '../actions';

class MakeRequests extends React.Component {

  buildHandler = (handler) => {
    const { successCallback, errorCallback } = this.props;
    const result = handler();
    if (!result.then) {
      if (successCallback || errorCallback) alert('Offline config returnPromises is false!');
      return result;
    }
    return result.then(successCallback).catch(errorCallback);
  }

  onSucceedAlways = () => this.buildHandler(this.props.onSucceedAlways)

  onSucceedSometimes = () => this.buildHandler(this.props.onSucceedSometimes)

  onFailSometimes = () => this.buildHandler(this.props.onFailSometimes)

  onFollowUser = () => this.buildHandler(this.props.onFollowUser('a'))


  render() {
    return (
      <div>
        <button onClick={this.onSucceedAlways}>Succeed Always</button>
        <button onClick={this.onSucceedSometimes}>Succeed Sometimes</button>
        <button onClick={this.onFailSometimes}>Fail Sometimes</button>
        <button onClick={() => this.props.onFollowUser('a')}>followUser</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { app: state.app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSucceedAlways: succeedAlways,
      onSucceedSometimes: succeedSometimes,
      onFailSometimes: failSometimes,
      onFollowUser: followUser
    },
    dispatch
  );
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MakeRequests);

export { MakeRequests as RawComponent };
export default ConnectedComponent;
