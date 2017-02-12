import "./index.less"
import React, {Component} from "react"
import classnames from 'classnames'
import PropTypes from '../utils/proptypes'
import PickerModal from './pickerModal'
class ColorPicker extends Component {
    constructor (props) {
        super(props)
        this.state = props;
    }
    handleColorClick() {

    }
    render() {
        return (
            <div className="r-color-picker">
                <div className="picker-info"> 
                    <div className="color-preview" style={{backgroundColor:this.state.color}} onClick={this.handleColorClick()}></div>
                    <div className="color-value"></div>
                    {this.state.color}
                </div>
                <PickerModal isOpen={true} {...this.props}/>
            </div>
        )
    }
}
ColorPicker.defaultProps = {
    color:"#fff"
}
ColorPicker.propTypes = {
    color: PropTypes.string
}
export default ColorPicker;