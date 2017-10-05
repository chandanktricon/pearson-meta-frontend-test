import React from "react";

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  getStyle = (type) => {
    
    const flatStyle = {      
      outline: 0,
      border: 0,
      padding: '10px 15px',
      color: 'white',
      backgroundColor: '#007fa3',
      fontSize: '18px',
      borderRadius: '14px',
      cursor: 'pointer'
    };

    const labelStyle = {    
      outline: 0,
      border: 0,
      margin: 0,
      padding: '5px',
      backgroundColor: 'transparent',
      color: '#007fa3',
      fontSize: '14px',
      cursor: 'pointer'
    };

    if (type === 'flat') return flatStyle;
    if (type === 'label') return labelStyle;
    
    return flatStyle;
  }

  render() {

    const defaultStyle = this.getStyle(this.props.type);

    return (
      <button 
        className={this.props.className}
        style={ Object.assign(defaultStyle, this.props.style || {})}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
