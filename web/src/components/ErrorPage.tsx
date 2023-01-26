export default function ErrorPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
        textAlign: 'center',
      }}
    >
      <div>
        <h2>ERROR</h2>
      </div>
      <div>
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <h2>Please Try Again</h2>
      </div>
    </div>
  );
}
