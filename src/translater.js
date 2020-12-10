import React from 'react';

const words = [
  {japanese: "英語", english: "Englisheee"},
  {japanese: "日本語だよ", english: "Japan"},
];

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   isModalOpen: false,
    };
  }
  trans() { // javascript
    document.getElementById("english").textContent = words[0].japanese;
    document.getElementById("japanese").textContent = words[1].japanese;

  }
  render() {
    return (
      <div>
        <div className="translate">
          <div id="japanese" className="text-white float-right hidden">日本語</div>
          <div id="english" className="text-white"
          onClick={() => {this.trans()}}
          >English</div>
        </div>
      </div>
    );
  }
}

export default Translate;