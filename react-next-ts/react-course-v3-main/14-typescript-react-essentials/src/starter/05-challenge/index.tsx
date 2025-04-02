type Props = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
}

function Component({ type, name, email}: Props) {
  return (
    <div className={`alert alert-${type === 'basic' ? 'success' : 'danger'}`}>
      <p>{name}</p>
      {email && <p>{email}</p>}
    </div>
  );
}
export default Component;
