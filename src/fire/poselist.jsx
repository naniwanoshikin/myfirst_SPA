import React from 'react';
import posed from 'react-pose';


const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 60
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%'
  }
};

const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 }
};

const SidePanel = posed.ul(sidebarProps);
const Item = posed.li(itemProps);

class PoseList extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div>
        <button onClick={this.toggle}>押す</button>
        <SidePanel
          onClick={this.toggle}
          className="sidebar"
          pose={this.state.isOpen ? 'open' : 'closed'}
        >
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
        </SidePanel>
      </div>
    );
  }
}

export default PoseList;
