import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

import "./styles.scss";

function App() {
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    event: "",
    date: "",
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {name, email, age, event, date } = form
    if (!name || !email || !age || !event || !date) {
      setError('Falta un campo por llenar')
      return
    }
    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify({
        id: window.crypto.randomUUID(),
        name,
        email,
        age: age,
        event: event,
        date
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    // setRegistrations([...registrations, form]);
    setForm({ name: "", email: "", age: "", event: "", date: ""});
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
