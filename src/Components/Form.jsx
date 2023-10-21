import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error, nameError, ageError, genderError, dateError, ownerError }) => {
    return (
        <form className="form-card" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleInputChange}
            />
            {nameError && <p className="error">{nameError}</p>}
            <input
                type="number"
                name="age"
                placeholder="Edad"
                value={form.age}
                onChange={handleInputChange}
            />
            {ageError && <p className="error">{ageError}</p>}
            <select
                type="text"
                name="gender"
                placeholder="Género"
                value={form.gender}
                onChange={handleInputChange}
            >
                <option value="Null">Null</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
            </select>
            {genderError && <p className="error">{genderError}</p>}
            <input
                type="date"
                name="date"
                placeholder="Día de la cita"
                value={form.date}
                onChange={handleInputChange}
            />
            {dateError && <p className="error">{dateError}</p>}
            <input
                type="text"
                name="owner"
                placeholder="Nombre del dueño"
                value={form.owner}
                onChange={handleInputChange}
            />
            {ownerError && <p className="error">{ownerError}</p>}
            <hr />
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
        gender: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
    error: PropTypes.string.isRequired,
};

export default Form