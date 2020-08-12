import HomePage from './components/HomePage';
import Header from './components/Header';
import Student from './components/Student';
import StudentDefault from './components/StudentDefault';
import StudentDetail from './components/StudentDetail';
import StudentEdit from './components/StudentEdit';
import Info from './components/Info';

export const routes = [

    { path: '/', name: HomePage, components: {
        default: HomePage,
        'header-top': Header,
        
    }},

    { path: '/student', name: Student, components: {
        default: Student,
        'header-bottom': Header,
    },
    children: [
        { path: '', component: StudentDefault },
        { path: ':id', component: StudentDetail },
        { path: ':id/edit', component: StudentEdit, name: 'StudentEdit' }
    ]
    },

    { path: '/info', name: Info, components: {
        default: Info,
        'header-bottom': Header,
    } },

]