type GreetProps = {
  name?: string;
};

export default function Greet(props: GreetProps) {
  return <div>greet {props.name}</div>;
}
