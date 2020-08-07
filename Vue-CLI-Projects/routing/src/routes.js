import Home from './components/Home';
import User from './components/user/User';
import UserStart from './components/user/UserStart';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';

export const routes = [
    { path: '/home', component: Home, name: 'AnaSayfa'},
    { path: '/user', component: User, name: 'Kullanıcı', 
    
    children: [
        { path: '', component: UserStart }, //          /user
        { path: ':id', component: UserDetail },//       /user/10
        { path: ':id/edit', component: UserEdit, name: 'UserEdit' }, //   user/10/edit
    ]},
];