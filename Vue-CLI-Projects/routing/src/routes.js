import Home from './components/Home';
import User from './components/user/User';
import UserStart from './components/user/UserStart';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import Header from './components//Header';

export const routes = [
    { path: '/home', name: 'AnaSayfa', components: {
        default : Home,
        "header-top": Header,
    }},
    { path: '/user', name: 'Kullanıcı', components:{
        default: User,
        "header-bottom": Header,
    },
    children: [
        { path: '', component: UserStart }, //          /user
        { path: ':id', component: UserDetail },//       /user/10
        { path: ':id/edit', component: UserEdit, name: 'UserEdit' }, //   user/10/edit
    ]},
];