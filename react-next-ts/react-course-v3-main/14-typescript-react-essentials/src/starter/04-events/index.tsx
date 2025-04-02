import { useState } from 'react';

type Person = {
  name: string;
  email: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // Controlled form element.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Using a function reference, instead of an inline arrow function, requires indicating the type of the event.
    setEmail(event.target.value);
  };

  // Uncontrolled form element.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log({data});
    const person: Person = { name: data.name as string, email: data.email as string };

    console.log({person});
  };

  return (
    <section>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='name' className='form-input mb-1' value={text} onChange={event => setText(event.target.value)} />
        <input type='email' name='email' className='form-input mb-1' value={email} onChange={handleChange} />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
  );
}
export default Component;
