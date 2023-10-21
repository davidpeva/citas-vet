import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

import "./styles.scss";

function App() {
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [dateError, setDateError] = useState('');
  const [ownerError, setOwnerError] = useState('');
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    date: "",
    owner: "",
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, age, gender, date, owner } = form
    if (!name || !age || !gender || !date || !owner) {
      setError('Revisa los campos que te falta llenar.')

      if (name.length < 3) {
        setNameError('El nombre debe tener mas de 3 caracteres.');
      } if (age < 1) {
        setAgeError('La edad debe ser mayor de 1.');
      } if (gender !== 'Macho' || gender !== 'Hembra') {
        setGenderError('Debes escoger el genero.')
      }  // Validación de fecha

      const currentDate = new Date();
      const selectedDate = new Date(date);
      if (selectedDate > currentDate || selectedDate.getFullYear() > 2023) {
        setDateError('Debes ingresar una fecha válida.');
      }
      if (owner.length < 3) {
        setOwnerError('Debes de ingresar el nombre del dueño.');
      }

      return
    }

    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify({
        id: window.crypto.randomUUID(),
        name,
        age,
        gender,
        date,
        owner
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    // setRegistrations([...registrations, form]);
    setForm({ name: "", age: "", gender: "", date: "", owner: "" });
  };

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch('http://localhost:8000/users')
      const result = await response.json()
      setUsers(result)
    }
    getPost()
  }, [form])

  return (
    <div className="app">
      <Form
        form={form}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        error={error}
        nameError={nameError}
        ageError={ageError}
        genderError={genderError}
        dateError={dateError}
        ownerError={ownerError}
      />
      <section className="section">
        {users.map((registration) => (
          <Card
            key={`${registration.date}${registration.name}`}
            registration={registration}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
