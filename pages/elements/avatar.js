import React from "react";

export default class Label extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultStyle = { 
      height: this.props.size + 'px' || '50px',
      width: this.props.size + 'px' || '50px',
      borderRadius: this.props.size/2 + 'px' || '25px'
    };

    return (      
      <img
        title={this.props.title || "avatar"}
        className={this.props.className}
        style={ Object.assign(defaultStyle, this.props.style || {})}
        src={this.props.src}
      />
    );
  }
}
