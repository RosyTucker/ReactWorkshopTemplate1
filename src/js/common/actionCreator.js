import { ActionTypes } from './Constants';
import { hashHistory } from 'react-router';
import AppRoutes from '../navigation/AppRoutes';


const userData = {
    name: 'Rosy Tucker',
    email: 'rosy.m.tucker@gmail.com',
    avatarUrl: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/11221539_10153554367863615' +
    '_6847750215880996171_n.jpg?oh=1c96dc0a6af80029b16b0e85d6e4a9d1&oe=57C5104C',
    description: 'I have a strong preference for working closely with business folks and product ' +
    'owners, I would dislike to be in a development team that is very segregated from their ' +
    'stakeholders and customers. I have a strong preference for working closely with business ' +
    'folks and product owners, I would dislike to be in a development team that is very ' +
    'segregated from their stakeholders and customers.',
    technologies: [
        { name: 'CSS', level: 5 },
        { name: 'Java', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'HTML', level: 3 },
        { name: 'C#', level: 2 },
        { name: 'Clojure', level: 1 }
    ],
    workshopsAttended: [
        {
            id: 5,
            datetime: '2016-05-28T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        },
        {
            id: 4,
            datetime: '2016-05-21T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        },
        {
            id: 3,
            datetime: '2016-05-14T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        },
        {
            id: 2,
            datetime: '2016-05-07T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        },
        {
            id: 1,
            datetime: '2016-04-30T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        }
    ],
    workshopsUpcoming: [
        {
            id: 6,
            datetime: '2016-06-04T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        },
        {
            id: 7,
            datetime: '2016-06-11T18:30:00',
            name: 'CodeNight London',
            location: 'ThoughtWorks, Wardour Street'
        }
    ]
};

const redirect = route => hashHistory.push(route);

const receiveUser = user => ({
    type: ActionTypes.RECEIVE_USER,
    user
});

const attemptLogin = () => dispatch => {
    setTimeout(() => {
        dispatch(receiveUser(userData));
        redirect(AppRoutes.profile);
    }, 500);
};

export {
    attemptLogin,
    receiveUser
};
