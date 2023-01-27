import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { Repo } from '../../../api/src/models/Repo';
import '../assets/styles/FilterLang.css';

export interface LangProp {
  repoData: Repo[];
  setFilteredRepo: React.Dispatch<React.SetStateAction<Repo[]>>;
}

export default function FilterLang(props: LangProp) {
  const [language, setLanguage] = useState<string>('');
  const languages = ['PHP', 'TypeScript', 'French', 'English'];
  const { repoData, setFilteredRepo } = props;
  const handleLanguage = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLanguage(e.currentTarget.value);
    setFilteredRepo(repoData);
    if (language === '') {
      setFilteredRepo(repoData);
    } else {
      setFilteredRepo((prevFilteredRepo) =>
        prevFilteredRepo.filter((repo) =>
          repo.language
            .toLocaleLowerCase()
            .includes(language.toLocaleLowerCase())
        )
      );
    }
  };
  return (
    <>
      <h1 className="list-header">List of Repos</h1>

      <form onSubmit={handleLanguage}>
        <Stack
          className="stack-class"
          direction="row"
          sx={{ justifyContent: 'center', marginTop: '1rem' }}
        >
          {languages.map((lang) => (
            <Button
              key={lang}
              variant="contained"
              type="submit"
              color="info"
              size="large"
              value={lang.toLocaleLowerCase()}
              name={lang.toLocaleLowerCase()}
              onClick={(e) => setLanguage(e.currentTarget.value)}
              sx={{
                marginRight: '1rem',
                marginTop: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              {lang}
            </Button>
          ))}
          <Button
            size="large"
            color="warning"
            variant="contained"
            type="submit"
            name="all"
            value="all"
            onClick={(e) => setLanguage('')}
            sx={{
              marginRight: '1rem',
              marginTop: '0.5rem',
            }}
          >
            Show all repos
          </Button>
        </Stack>
      </form>
    </>
  );
}
