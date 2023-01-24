import { IProps } from '../assets/models/IProps';
import RepoItem from './RepoItem';
import '../assets/styles/RepoList.css';

const repoList: React.FC<IProps> = ({
  repoData,
  setRepoData,
  filteredRepo,
  setFilteredRepo,
}) => {
  return (
    <div className="repo-list-wrapper">
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
