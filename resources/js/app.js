import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import ParentComponent from './components/ParentComponent.vue';
app.component('parent-component', ParentComponent);



app.mount('#app');
