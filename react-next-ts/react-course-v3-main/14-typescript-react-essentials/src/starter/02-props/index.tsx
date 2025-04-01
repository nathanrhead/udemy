import { type PropsWithChildren } from 'react'; 

type Props = PropsWithChildren<{ 
  name: string; 
  id: number; 
  // children?: React.ReactNode 
}>;

// function Component(props: { name: string; id: number }) {
// function Component(Props: Props) {
function Component({ name, id, children }: Props) {
  return (
    <div>
      <h2>{id}: {name}</h2>
      {children}
    </div>
  );
}
export default Component;
