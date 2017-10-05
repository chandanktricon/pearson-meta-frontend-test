import React from "react";

export default class Textbox extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultStyle = {  
      outline: 0,
      minHeight: '32px',
      minWidth: '100px',
      fontSize: '16px',
      padding:'5px',
      border: '1px solid #979797'
    };

    return (
      <input 
        className={this.props.className}
        type="text"
        style={Object.assign(defaultStyle, this.props.style || {})}
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}
