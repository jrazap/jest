import { GreetProps } from "./greet.types";

function Great({ name }: GreetProps) {
  return (
    <>
      <h1>Hello {name ? name : "Guest"}</h1>
    </>
  );
}

export default Great;
