# Shopify Theme Store

A modern, customizable Shopify theme built with best practices and performance in mind.

## Features

- Responsive design
- Customizable sections and blocks
- Modern development workflow
- Performance optimized
- SEO friendly structure

## Tech Stack

- Liquid (Shopify's template language)
- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js (Development environment)

## Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- A Shopify store for development

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd shopify-theme-store
```

2. Install dependencies:
```bash
npm install
```

3. Login to Shopify:
```bash
shopify auth login --store your-store.myshopify.com
```

4. Start development:
```bash
npm run dev
```

## Development

The theme follows Shopify's [theme architecture](https://shopify.dev/themes/architecture):

- `assets/` - Theme assets (CSS, JavaScript, images)
- `config/` - Theme settings
- `layout/` - Theme layouts
- `sections/` - Theme sections
- `snippets/` - Reusable template snippets
- `templates/` - Page templates

## Available Commands

- `npm run dev` - Start development server
- `npm run deploy` - Deploy theme to Shopify store
- `npm run lint` - Run theme checker

## Customization

1. Theme settings can be modified in `config/settings_schema.json`
2. Styles can be customized in `assets/theme.css`
3. Add new sections in the `sections/` directory
4. Modify templates in the `templates/` directory

## License

MIT License - feel free to use this theme for your own projects.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 