import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { Checkbox } from './Checkbox';

interface TaskProps {
  id: number;
  content: string;
  isChecked: boolean;
  onTaskIsChecked: (taskId: number) => void;
}

export function Task({id, content, isChecked, onTaskIsChecked}: TaskProps) {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  function handleCheckboxClick() {
    setCheckboxIsChecked(!checkboxIsChecked);
    onTaskIsChecked(id);
  }

  return (
    <article className={styles.container}>
      <Checkbox isChecked={checkboxIsChecked} onCheckboxClick={handleCheckboxClick} />      
      <div 
        className={checkboxIsChecked ? styles.contentChecked : styles.content}>
          {content}
      </div>
      <button>
        <Trash size={18} />
      </button>
    </article>
  )
}