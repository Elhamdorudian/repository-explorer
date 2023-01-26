import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { Repo } from '../../../api/src/models/Repo';

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
      <form onSubmit={handleLanguage}>
        <Stack
          direction="row"
          spacing={1}
          padding="2px"
          sx={{ margin: 'auto' }}
        >
          {languages.map((lang) => (
            <Button
              key={lang}
              variant="contained"
              type="submit"
              value={lang.toLocaleLowerCase()}
              name={lang.toLocaleLowerCase()}
              onClick={(e) => setLanguage(e.currentTarget.value)}
            >
              {lang}
            </Button>
          ))}
          <Button
            size="large"
            variant="contained"
            type="submit"
            name="all"
            value="all"
            onClick={(e) => setLanguage('')}
          >
            Show all repos
          </Button>
        </Stack>
      </form>
    </>
  );
}
