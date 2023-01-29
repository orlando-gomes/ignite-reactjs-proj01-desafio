import { useState, useEffect } from 'react'
import { PlusCircle } from 'phosphor-react'
import './global.css'
import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg'
import { Task } from './components/Task'


function App() {
  const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        content: 'Comprar legumes no hortifruti.',
        isChecked: false,
      },
      {
        id: 2,
        content: 'Fazer atividade física.',
        isChecked: false,
      },
      {
        id: 3,
        content: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.',
        isChecked: true,
      }
    ]
  );


  const [numberOfTasksChecked, setNumberOfTasksChecked] = useState(() => {
    return tasks.filter((item) => {
      return item.isChecked;
    }).length;
  });


  useEffect(()=>{
    const numberOfTasksChecked = tasks.filter((item) => {
      return item.isChecked;
    }).length;
    
    setNumberOfTasksChecked(numberOfTasksChecked);
  }), [tasks];

  function handleChecktask(taskId: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isChecked = !task.isChecked;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function handleAddTask() {
    console.log('Task added');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src={rocketLogo} />
        <span>to</span>
        <span>do</span>
      </header>

      <main>
        <div className={styles.newTask}>
          <form>
            <input placeholder='Adicione uma nova tarefa' value='' />
            <button>
              <div>
                <span>Criar</span>
                <span><PlusCircle size={16} /></span>
              </div>
            </button>
          </form>
        </div>

        <div>
          <div className={styles.tasksInfo}>
            <div>
              <span>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div>
              <span>Concluídas</span>
              <span>{numberOfTasksChecked} de {tasks.length}</span>
            </div>
          </div>

          <div className={styles.tasksList}>
            {tasks.length > 0 ? 
            tasks.map((item) => {
              return (
                <Task 
                  key={item.id} 
                  id={item.id}
                  content={item.content}
                  isChecked={item.isChecked}
                  onTaskIsChecked={handleChecktask}
                />
              );
            })
          : (
            <h1>Nada a exibir</h1>
          )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
