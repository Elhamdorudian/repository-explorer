import FadeLoader from 'react-spinners/ClipLoader';
import '../assets/styles/IsLoading.css';

export default function IsLoading() {
  return (
    <div className="is-loading">
      <FadeLoader
        color="gray"
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
