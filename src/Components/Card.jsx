import PropTypes from "prop-types";

const Card = ({ registration }) => {
    return (
        <div className="registration-card">
            <h2>{registration.name}</h2>
            <h4>{registration.age}</h4>
            <p>{registration.gender}</p>
            <h3>{registration.date}</h3>
            <h4>{registration.owner}</h4>
        </div>
    )
}

Card.propTypes = {
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string,
        date: PropTypes.string.isRequired,
        owner: PropTypes.string,
    }),
};

Card.defaultProps = {
    registration: {
        age: "1"
    }
}

export default Card;