import Routes from '../router/routes.js'

const Metadata = {
  brand: {
    key: 'hero',
    heading: 'Pia Leung',
    subheading: 'art + code',
    to: Routes.home
  },
  tabs: [
    {
      key: 'about',
      label: 'about',
      to: Routes.about
    },
    {
      key: 'projects',
      label: 'projects',
      to: Routes.projects
    },
  ]
};

export default Metadata;
