import './App.css'

export function App () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/t0kt0" alt="profile-picture" />
        <div className='tw-followCard-info'>
          <strong>t0kt0</strong>
          <span className='tw-followCard-infoUserName'>@tokto</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Follow
        </button>
      </aside>
    </article>
  )

}