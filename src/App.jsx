import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName='t0kt0' name='tokto.dev' />
      <TwitterFollowCard isFollowing={false} userName='github' name='Github' />
      <TwitterFollowCard isFollowing={false} userName='code' name='Visual Studio Code' />
      <TwitterFollowCard isFollowing={false} userName='ThePracticalDev' name='DEV Community' />
    </section>
  )

}