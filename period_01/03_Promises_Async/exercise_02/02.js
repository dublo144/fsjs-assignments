const fetch = require('node-fetch');

// a) with plain promises
const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => {
  const person = {
    name: '',
    firstFilm: '',
    firstSpecies: '',
    homeWorldForSpecie: ''
  };
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((res) => {
      person.name = res.name;
      return res;
    })
    .then((res) =>
      fetch(res.films[0])
        .then((res) => res.json())
        .then((res) => {
          person.firstFilm = res.title;
          return res;
        })
        .then((res) =>
          fetch(res.species[0])
            .then((res) => res.json())
            .then((res) => {
              person.firstSpecies = res.name;
              return res;
            })
            .then((res) =>
              fetch(res.homeworld)
                .then((res) => res.json())
                .then((res) => (person.homeWorldForSpecie = res.name))
            )
        )
    )
    .then(() => console.log(person));
};
getPlanetforFirstSpeciesInFirstMovieForPerson(1);

const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {
  try {
    const person = await (
      await fetch(`https://swapi.dev/api/people/${id}`)
    ).json();
    const firstFilm = await (await fetch(person.films[0])).json();
    const firstSpecies = await (await fetch(firstFilm.species[0])).json();
    const homeWorldForSpecie = await (
      await fetch(firstSpecies.homeworld)
    ).json();
    console.log({
      name: person.name,
      firstFilm: firstFilm.title,
      firstSpecies: firstSpecies.name,
      homeWorldForSpecie: homeWorldForSpecie.name
    });
  } catch (e) {
    console.log(e);
  }
};
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
