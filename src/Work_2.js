import React from 'react';
import { Graph } from './Graph'; // Chart.js const

export default class TheWork extends React.Component {
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
    return (
      <div className="work-item mb-5 mx-auto pb-4 px-0 col-sm-5">
        <p className="px-4 pb-0 pt-2 pb-1 my-0 text-right">{this.props.date}</p>
        <h5 className="d-inline-block px-4 py-1 mb-2 rounded" onClick={() => { this.handleWork() }}>
          {this.props.name}</h5>
        <a href={this.props.link} target="_blank" rel="noreferrer noopener">
          <img src={this.props.img} alt="my work" width="" height="300" className="w-100" />
        </a>
        <div className="mt-3 px-4 text-justify">{this.props.intro}</div>
        {
          this.state.isModalOpen &&
          <div className="work-modal text-center">
            <div className="modalin mx-auto p-4 pb-5 bg-light rounded">
              <h3>{this.props.name}
                <span className="float-right" onClick={() => { this.handleClose() }}>
                  <i className="fas fa-undo-alt text-info"></i></span>
              </h3>
              <div className="text-justify">{this.props.intro2}</div>
              <Graph />
            </div>
          </div>
        }
      </div>
    );
  }
}
