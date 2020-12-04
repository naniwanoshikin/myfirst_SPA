import React from 'react';

class TheWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleWork() {
    this.setState({ isModalOpen: true });
  }
  handleClose() {
    this.setState({ isModalOpen: false });
  }
  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="work-modal text-center position-fixed">
          <div className="modalin position-absolute p-4 pb-5 mx-auto bg-light">
            <h3>{this.props.name}
              <span className="float-right" onClick={() => { this.handleClose() }}><i className="fas fa-undo-alt text-info"></i></span>
            </h3>
            <p>{this.props.intro2}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="work-item mb-4 pb-4 mx-auto px-0 col-sm-5">
        <img src={this.props.img}
          onClick={() => { this.handleWork() }}
        />
        <h3 className="my-4 px-3">
          <a href={this.props.link}>{this.props.id}. {this.props.name}</a>
        </h3>
        <p className="px-4">{this.props.intro}</p>
        {modal}
      </div>
    );
  }
}

export default TheWork;
