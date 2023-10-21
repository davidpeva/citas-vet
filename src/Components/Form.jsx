import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error }) => {
    return (
        <form className="form-card" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Edad"
                value={form.age}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="event"
                placeholder="Nombre del evento"
                value={form.event}
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="date"
                placeholder="Fecha del evento"
                value={form.date}
                onChange={handleInputChange}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Registrar</button>
        </form>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        event: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
    error: PropTypes.string.isRequired,
};

export default Form