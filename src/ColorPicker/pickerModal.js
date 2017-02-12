import React, {Component} from "react"
import classnames from 'classnames'
import PropTypes from '../utils/proptypes'
import PickerType from './pickerType'
import PickerTheme from "./pickerTheme";
class PickerModal extends Component {
    constructor (props) {
        super(props)
        this.state = props;
    }
    handleOpacityChange() {
        
    }
    render() {
        let className = ""
        return(
            <div className="r-color-picker-modal" >
                <div className="picker-modal-plate"></div>
                <div className="picker-modal-select">
                    <div className="color-select"></div>
                    <div className="color-circle" style={{backgroundColor:this.state.color}}></div>
                    <div className="color-input">
                        <div className="item hue-spectrum">
                            <div className="drag-bar"></div>
                        </div>
                        <div className="item">
                            <div className="drag-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="picker-modal-type">
                    <PickerType {...this.props}/>
                </div>
                <div className="picker-color-theme">
                    <PickerTheme data={this.state.theme[0].value}/>
                </div>
            </div>
        )
    }
}
PickerModal.defaultProps = {
    theme:[
        {
            name:"pageColor",
            value:["#fff","#ff0000"]
        }
    ]
}
export default PickerModal;