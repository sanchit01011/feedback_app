import PropTypes from 'prop-types'
function Button({children, version, type, isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} style={{backgroundColor : '#202142', color: '#fff'}} className="btn primary" >
        {children}
        </button>
    )
}
Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: "false"
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled:PropTypes.bool,
}
export default Button