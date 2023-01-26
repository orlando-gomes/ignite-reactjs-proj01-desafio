import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
        <header>
          <img src={rocketLogo} />
          <span>to</span>
          <span>do</span>          
        </header>

        <main>
          <div className="new-task">
            <input />
            <button>Criar</button>
          </div>

          <div className="tasks">
            <div className='info'>
              <div>Tarefas criadas 5</div>
              <div>Concluídas 2 de 5</div>
            </div>

            <div className='list'>
              
              <div className='task'>
                <input type='checkbox' />
                <input 
                  type='text' 
                  value='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' 
                />
                <button>excluir</button>
              </div>

              <div className='task'>
                <input type='checkbox' />
                <input 
                  type='text' 
                  value='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' 
                />
                <button>excluir</button>
              </div>

              <div className='task'>
                <input type='checkbox' />
                <input 
                  type='text' 
                  value='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' 
                />
                <button>excluir</button>
              </div>

              <div className='task'>
                <input type='checkbox' />
                <input 
                  type='text' 
                  value='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' 
                />
                <button>excluir</button>
              </div>

              <div className='task'>
                <input type='checkbox' />
                <input 
                  type='text' 
                  value='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' 
                />
                <button>excluir</button>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default App
