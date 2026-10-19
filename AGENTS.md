# Parish Handbook

VitePress site (`vitepress` 1.0.0-rc.20) for the Catholic Archdiocese of Melbourne's Parish
Administration Handbook. Content is Markdown under `docs/` (`introduction/`, `contents/`, `pages/`);
the site config and sidebar are in `docs/.vitepress/config.ts`.

## Setup and commands

- `.agents/setup` installs pnpm 8.15.9 into `~/.local/bin` (the lockfile is v6, which pnpm 8
  writes) and runs `pnpm install --frozen-lockfile`. Use that pnpm; a newer pnpm rewrites
  `pnpm-lock.yaml` to a newer format.
- `.amp/services.yaml` runs `pnpm docs:dev` on port 5173 with a portal. Start it with
  `amp orb services ensure`.
- `pnpm docs:build` builds to `docs/.vitepress/dist`; `pnpm docs:preview` serves the build.
- There are no tests. `pnpm docs:build` is the check. It logs
  `ReferenceError: window is not defined` from the Netlify Identity script in `docs/index.md`
  while rendering the home page and still exits 0; that error predates the orb setup.

## Editing content

Editors use Decap CMS at `/admin` (`docs/public/admin/config.yml`), backed by Netlify Identity and
Git Gateway with `publish_mode: editorial_workflow`. Each saved draft becomes a `cms/<collection>/<slug>`
branch and a pull request against `main`; publishing in the CMS merges that PR. The CMS works only
on the deployed Netlify site, not on the local dev server. Keep the front matter fields
(`title`, `date`, `order`, `description`) that the CMS collections define.

## Deploys

The site is hosted on Netlify (project `parish-handbook`, production at
handbook.melbournecatholic.org). Netlify builds deploy previews for pull requests and, by its
usual continuous deployment, publishes `main`, so merging to `main` publishes the site. There is no
`netlify.toml`; the build command, publish directory, and Node version live in the Netlify UI and
are not visible from the repo. `docs/public/_redirects` holds Netlify redirect rules.
