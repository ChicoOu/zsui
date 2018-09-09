import Home from './components/Home.vue';
import Rank from './components/Rank.vue';
import Mine from './components/Mine.vue';
import NotFound from './components/404.vue';

// Pages
export default [
    // Index page
    {
        path: '/',
        component: Home,
    },

    {
        path: '/rank',
        component: Rank,
    },

    {
        path: '/mine',
        component: Mine,
    },

    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        component: NotFound,
    },
];