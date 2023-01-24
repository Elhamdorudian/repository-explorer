import { useState } from 'react';
import { IProps } from '../assets/models/IProps';
import { Button, Stack } from '@mui/material';

export default function FilterLang(props: IProps) {
  const [language, setLanguage] = useState<string>('');
  const languages = ['PHP', 'TypeScript', 'French', 'English'];
  const { repoData, filteredRepo, setFilteredRepo } = props;
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

    console.log(filteredRepo);
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
