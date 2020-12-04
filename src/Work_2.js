import React from 'react';

class TheWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleCity() {
    this.setState({ isModalOpen: true });
  }
  handleClose() {
    this.setState({ isModalOpen: false });
  }
  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="city-modal text-center">
          <div className="modalin p-4 bg-light">
            <h3
              onClick={() => { this.handleClose() }}
            >{this.props.name}   [x]</h3>
            <p>{this.props.intro}</p>
          </div>
        </div>
      )
    }
    return (
      <div
        className="work-item pb-4"
        onClick={() => { this.handleCity() }}
      >
        <h3>その{this.props.id}:{this.props.name}</h3>
        <img src={this.props.img} />
        {modal}
      </div>
    );
  }
}

export default TheWork;
