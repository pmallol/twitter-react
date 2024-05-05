import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName='t0kt0' name='tokto.dev' />
      <TwitterFollowCard userName='github' name='Github' />
      <TwitterFollowCard userName='code' name='Visual Studio Code' />
      <TwitterFollowCard userName='ThePracticalDev' name='DEV Community' />
    </section>
  )

}