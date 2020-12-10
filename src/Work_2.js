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
          <div className="modalin position-absolute mx-auto p-4 pb-5 bg-light">
            <h3>{this.props.name}
              <span className="float-right" onClick={() => { this.handleClose() }}><i className="fas fa-undo-alt text-info"></i></span>
            </h3>
            <p>{this.props.intro2}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="work-item mb-5 mx-auto pb-4 px-0 col-sm-5">
        <p className="px-4 py-1 my-0">{this.props.date}</p>
        <a href={this.props.link} target="_blank" rel="noreferrer noopener">
          <img src={this.props.img} alt="my work" className="w-100" />
        </a>
        <h4 className="my-3 px-2" onClick={() => { this.handleWork() }}>
          {this.props.id + 1}. {this.props.name}</h4>
        <p className="px-4">{this.props.intro}</p>
        {modal}
      </div>
    );
  }
}

export default TheWork;
