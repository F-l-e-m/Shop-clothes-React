import PropTypes from "prop-types";

export const defaultProps = {
    img: "",
    name: "",
    price: "",
    sizes: [],
};

export default {
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    sizes: PropTypes.arrayOf(PropTypes.number),
};