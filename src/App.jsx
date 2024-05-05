import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  { 
    userName: 't0tkt0',
    name: 'tokto.dev',
    isFollowing: true
  },
  { 
    userName: 'github',
    name: 'Github',
    isFollowing: false
  },
  { 
    userName: 'code',
    name: 'Visual Studio Code',
    isFollowing: false
  },
  { 
    userName: 'ThePracticalDev',
    name: 'DEV Community',
    isFollowing: false
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(user => {
          const {userName, name, isFollowing} = user

          return (
            <TwitterFollowCard
              key={userName}
              isFollowing={isFollowing}
              userName={userName} 
              name={name}
            />
          )
        })
      }
    </section>
  )

}