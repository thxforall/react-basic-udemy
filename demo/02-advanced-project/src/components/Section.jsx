export default function Section({ title, children, ...props }) {
  return (
    <sectoin {...props}>
      <h2>{title}</h2>
      {children}
    </sectoin>
  );
}
