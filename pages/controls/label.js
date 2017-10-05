import React from "react";

export default class Label extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultStyle = { 
      fontSize: '14px'
    };

    return (
      <label 
        className={this.props.className}
        style={Object.assign(defaultStyle, this.props.style || {})}
        htmlFor={this.props.htmlFor}
      >
        {this.props.children}
      </label>
    );
  }
}
