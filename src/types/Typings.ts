export interface IMovie {
  id: number;
  name?: string;
  title?: string;
  backdrop_path: string;
  poster_path: string;
}

export interface IMovieDetail {
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_name: string;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  number_of_seasons: number;
  runtime: number;
  overview: string;
  genres: [
    {
      name: string;
    }
  ];
  videos: {
    results: [
      {
        key: string;
      },
      {
        type: string;
      }
    ];
  };
}

export interface IPerson {
  id: number;
  name: string;
  profile_path: string;
  known_for: [
    {
      name: string;
      title: string;
    }
  ];
}

export interface IPersonDetail {
  id: number;
  name: string;
  gender: number;
  birthday: string;
  biography: string;
  profile_path: string;
  place_of_birth: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IElement {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
