import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/engma-linguistics/engma-linguistics.github.io.git', // Update to point to your repository  
        user: {
            name: 'Daniel Bishop', // update to use your name
            email: 'daniel@engmalinguistics.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)