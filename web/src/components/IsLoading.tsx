import FadeLoader from 'react-spinners/ClipLoader';

export default function IsLoading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20%',
      }}
    >
      <FadeLoader
        color="green"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
