import React, {Component} from "react"
import classnames from 'classnames'
import PropTypes from '../utils/proptypes'
import ColorTransfrom from '../utils/colorTransform'
class PickerType extends Component {
    constructor (props) {
        super(props)
        this.state = props
    }
    handleColorTypeChange() {
        let colorType = this.state.colorType;
        colorType++;
        if(colorType >2){
            colorType = 0;
        }
        this.setState({
            colorType
        })
    }
    handleColorChange(value){
        this.setState({
            color:value
        })
    }
    render() {
        return (
            <div className="picker-type-select">
                {
                    this.state.colorType == 0 && (
                        <HEX {...this.state} handleColorChange={(value) => {this.handleColorChange(value)}}/>
                    )
                }
                {
                    this.state.colorType == 1 && (
                        <RGBA {...this.state} handleColorChange={(value) => {this.handleColorChange(value)}}/>
                    )
                }
                {
                    this.state.colorType == 2 && (
                        <HSLA {...this.state} handleColorChange={(value) => {this.handleColorChange(value)}}/>
                    )
                }
                <div className="type-bar" onClick={() => this.handleColorTypeChange()}></div>
            </div>
        )
    }
}
PickerType.defaultProps = {
    colorType:0
}
class RGBA extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: this.fomatData(props.color)
        }
    }
    fomatData(hex) {
        let rgbaData = ColorTransfrom.hex2rgba(hex) , value = [];
        rgbaData = rgbaData.toLowerCase();
        let rgbaArr = rgbaData.replace(/(\(|\)|[rgba])*/g, "").split(",");
        rgbaArr.forEach((item, index) => {
            let name = "";
            if(index == 0){
                name = "R"
            }
            if(index == 1){
                name = "G"
            }
            if(index == 2){
                name = "B"
            }
            if(index == 3){
                name = "A"
            }
            value.push({
                name:name,
                val: item
            })
        });
        console.log(value);
        return value;
    }
    handleOnchange(name, value) {
        value = Number(value);
        if(isNaN(value)){
            return;
        }
        if(name === "A"){
            if(value < 0){
                value = 0;
            }else if(value > 1){
                value = 1;
            }
        } else {
            if(value < 0){
                value = 0;
            }else if(value > 255){
                value = 255;
            }
        }
        this.state.value.forEach((item) => {
            if(item.name === name){
                item.val = value;
            }
        });
        this.setState({
            ...this.state
        })
        const rgba = "rgba(" + this.state.value[0].val +"," + this.state.value[1].val + "," + this.state.value[2].val + "," + this.state.value[3].val + ")";
        this.props.handleColorChange(rgba);
        console.log(ColorTransfrom.rgb2hex(rgba));
    }
    render() {
        return (
            <div className="picker-type rgba">
                {this.state.value.map((item) => {
                    return(
                        <div className="input-wrap">
                            <input type="text" value={item.val} onChange={(e) => {this.handleOnchange(item.name, e.target.value)}}/>
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
class HEX extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value:ColorTransfrom.rgb2hex(props.color)
        }
    }
    handleOnChange(value) {
        this.setState({
            value
        });
        this.props.handleColorChange(value);
    }
    render() {
        return (
            <div className="picker-type hex">
                <input className="type-input" type="text" value={this.state.value} onChange={(e) => {this.handleOnChange(e.target.value)}}/>
                <div className="type-name">HEX</div>
            </div>
        )
    }
}
class HSLA extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value:[
                {name:"H",val:"1%"},
                {name:"S",val:"10%"},
                {name:"L",val:"10%"},
                {name:"A",val:"1"}
            ]
        }
    }
    render() {
        return (
            <div className="picker-type hsla">
                {this.state.value.map((item) => {
                    return(
                        <div className="input-wrap">
                            <input type="text" value={item.val}/>
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default PickerType;
