import PropTypes from "prop-types";

const Card = ({ registration }) => {
    return (
        <div className="registration-card">
            <h2>{registration.name}</h2>
            <h4>{registration.age}</h4>
            <p>{registration.email}</p>
            <h3>{registration.event}</h3>
            <h4>{registration.date}</h4>
        </div>
    )
}

Card.propTypes = {
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string,
        email: PropTypes.string.isRequired,
        event: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
};

Card.defaultProps = {
    registration: {
        age: "20"
    }
}

export default Card;