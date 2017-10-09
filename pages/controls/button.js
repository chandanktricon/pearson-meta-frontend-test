import React from "react";
import { objMerge } from '../utils/objMerge';
import { deepTrim } from '../utils/stringer';

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  getStyle = (type) => {
    const primaryColor = !this.props.disabled ? '#007fa3' : '#bbb';
    const secondaryColor = !this.props.disabled ? 'white' : '#f8f8f8';
    const cursor = !this.props.disabled ? 'pointer' : 'default';

    const common = {
      outline: 0,
      marginRight: this.props.isSmall ? '8px' : '10px',
      padding: this.props.isSmall ? '8px 12px' : '10px 15px',
      fontSize: this.props.isSmall ? '14px' : '18px',
      cursor: cursor
    };

    const flat = {
      backgroundColor: secondaryColor,
      color: primaryColor,
      border: '1px solid ' + primaryColor,
    };

    const round = {
      border: '1px solid ' + primaryColor,
      color: primaryColor,
      backgroundColor: secondaryColor,
      borderRadius: '14px',
    };

    const flatFilled = {
      color: 'white',
      backgroundColor: primaryColor,
      border: '1px solid ' + primaryColor,
    };

    const roundFilled = {
      border: 0,
      color: secondaryColor,
      backgroundColor: primaryColor,
      borderRadius: '14px',
    };

    const label = {
      border: 0,
      margin: 0,
      padding: '5px',
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: primaryColor
    };

    if (type === 'flat') return objMerge([common, flat]);
    if (type === 'round') return objMerge([common, round]);
    if (type === 'flatFilled') return objMerge([common, flatFilled]);
    if (type === 'roundFilled') return objMerge([common, roundFilled]);
    if (type === 'label') return objMerge([common, label]);

    return objMerge([common, flat]);
  }

  render() {

    const defaultStyle = this.getStyle(this.props.type);

    return (
      <button
        className={this.props.className}
        style={Object.assign(defaultStyle, this.props.style || {})}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
