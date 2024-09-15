export default function Section({ title, children }) {
  return (
    <sectoin>
      <h2>{title}</h2>
      {children}
    </sectoin>
  );
}
