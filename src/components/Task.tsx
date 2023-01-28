import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { Checkbox } from './Checkbox';

interface TaskProps {
  content: string;
  isChecked: boolean;
}

export function Task({content, isChecked}: TaskProps) {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  function handleCheckboxClick() {
    setCheckboxIsChecked(!checkboxIsChecked);
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