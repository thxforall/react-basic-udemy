export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      <div id="tab-content">{children}</div>
    </>
  );
}
