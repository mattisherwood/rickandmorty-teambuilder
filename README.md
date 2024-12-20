# Rick & Morty Team Builder

## The Purpose & Features

This is a [Next.js](https://nextjs.org) project (bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)) to see what I could create in short period of time.

(Namely first within **3hrs** and **6hrs**.)

|                                                                                                                        |                                                                                                        |                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| After **3hrs** ([Load](https://rickandmorty-teambuilder-hbt60rks8-matt-isherwoods-projects.vercel.app/))               | Filterable character list with data fetched from public API, generates random team from filtered list. | [![Screenshot of the app after 3 hours][3hr]](https://rickandmorty-teambuilder-hbt60rks8-matt-isherwoods-projects.vercel.app/)                |
| A few odd mins here and there                                                                                          | A few unimportant bits (Update README, add a favicon etc.)                                             |                                                                                                                                               |
| After a further **1hr 10min** ([Load](https://rickandmorty-teambuilder-jh139afch-matt-isherwoods-projects.vercel.app)) | Improve team selection functionality with individual selection/deselection, randomize & clear.         | [![Screenshot of the app after 4 hours 10 minutes][4hr10min]](https://rickandmorty-teambuilder-jh139afch-matt-isherwoods-projects.vercel.app) |
| After a further **35mins** ([Load](https://rickandmorty-teambuilder-obs8fyau8-matt-isherwoods-projects.vercel.app))    | Add a nice space background effect and remove light-mode                                               | [![Screenshot of the app after 4 hours 45 minutes][4hr45min]](https://rickandmorty-teambuilder-obs8fyau8-matt-isherwoods-projects.vercel.app) |
| After a further **20min** ([Load](rickandmorty-teambuilder-icrbnn8vg-matt-isherwoods-projects.vercel.app))             | Add loading state with skeletons                                                                       |                                                                                                                                               |
| After a further **55min** ([Load](https://rickandmorty-teambuilder.vercel.app))                                        | Add pagination and better filter method                                                                |                                                                                                                                               |

### Next up

- Infinite Load (remove pagination buttons)
- Hidden slide-out drawer for filters
- Run type codegen from GQL query
- Increased character information including modal
- i18n with translated strings

### Further away backend chapter

- Login, saving and sharing teams

## Getting Started

First, install the packages

```bash
npm i
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Viewing online

Alternatively visit [rickandmorty-teambuilder.vercel.app](https://rickandmorty-teambuilder.vercel.app/) to see the latest version of the app deployed on [Vercel](https://vercel.com/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployed on Vercel

This is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

[3hr]: screenshots/3hr-screenshots.png "Screenshot of the app after 3 hours"
[4hr10min]: screenshots/4hr10min-screenshots.png "Screenshot of the app after 4 hours 10min"
[4hr45min]: screenshots/4hr45min-screenshots.png "Screenshot of the app after 4 hours 45min"
