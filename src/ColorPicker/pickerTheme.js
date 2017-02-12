import React, {Component} from "react"
import classnames from 'classnames'
import PropTypes from '../utils/proptypes'
class PickerTheme extends Component {
    constructor (props) {
        super(props)
        this.state = props
    }
    render() {
        return (
            <div className="picker-theme-list">
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div key={index} className="theme-item" style={{backgroundColor:item}}></div>
                        )
                    })
                }
            </div>
        )
    }
}
export default PickerTheme