import { PropsWithChildren, useState } from 'react';

type Link = {
  id: number;
  text: string;
};

function Component({children}: PropsWithChildren) {
  const [text, setText] = useState('Ian wuz ere'); // TS infers the type of text as string.
  const [list, setList] = useState<string[]>([]); // TS infers a type of never for an empty [], so the type needs to be defined as an array of strings.
  const [links, setLinks] = useState<Link[]>([]);

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <h2>State</h2>
      <h3>{text}</h3>
      <button 
        className='btn btn-center' 
        onClick={() => {
          setList(prev => [...prev, text]);
          setText(text.includes('Ian') ? 'Gemma wuz ere' : 'Ian wuz ere');
          setLinks([...links, {id: 4, text: 'Near wuz ere' }]);
        }}>
          click me
        </button>
      <h3>List</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Children</h3>
      {children}
    </div>
  );
}
export default Component;
