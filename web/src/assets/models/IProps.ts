import { Repo } from '../../../../api/src/models/Repo';

export interface IProps {
  repoData: Repo[];
  setRepoData: React.Dispatch<React.SetStateAction<Repo[]>>;
  filteredRepo: Repo[];
  setFilteredRepo: React.Dispatch<React.SetStateAction<Repo[]>>;
}
