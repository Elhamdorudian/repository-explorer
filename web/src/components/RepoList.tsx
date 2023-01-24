import { IProps } from '../assets/models/IProps';
import RepoItem from './RepoItem';

const repoList: React.FC<IProps> = ({
  repoData,
  setRepoData,
  filteredRepo,
  setFilteredRepo,
}) => {
  return (
    <div style={{ backgroundColor: '#f6e3c1', margin: 'auto' }}>
      <h1 style={{ marginLeft: '20px' }}>List of Repos</h1>
      <RepoItem
        repoData={repoData}
        setRepoData={setRepoData}
        filteredRepo={filteredRepo}
        setFilteredRepo={setFilteredRepo}
      />
    </div>
  );
};

export default repoList;
