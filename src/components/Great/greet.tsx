interface Props {
  name?: string;
}
function Great({ name }: Props) {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
}

export default Great;
