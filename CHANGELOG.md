# Changelog

All notable changes to SpellBook of Skill are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Initial pre-release of SpellBook of Skill (v0.0.1), a static documentation
site built with Astro and Starlight and deployed to Netlify.

### Added

- Initial project scaffold: Astro + Starlight static site, pnpm-based
  tooling, and Netlify deployment configuration.
- Community and contribution files: `FUNDING.yml`, issue templates, and
  `CONTRIBUTING.md`.
- First set of skill guides across Code Quality (code review, performance
  optimizer, security audit, systematic debugging), Frontend (accessibility,
  SEO audit, web design), and Project Maintenance (update documentation).
- Frontend skill guide `website-analyzer`.
- Content Creation guide `article-writing` and Framework guides
  (`astro-expert`, `bulma-expert`, `nuxt-expert`, `vue-expert`).

### Changed

- Replaced initial placeholder guides with the real skill guides and
  configured `astro.config`.
- Humanized prose across existing guides, replacing em dashes with commas.
- Updated README with a new Frameworks section and aligned the category list
  in CONTRIBUTING.
- Removed the copilot instructions file from the repository.

### Security

- Added `SECURITY.md` and unified production domains to a single Netlify
  host across `robots.txt`, README, and `astro.config` social links.