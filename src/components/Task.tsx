import { useState } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { Checkbox } from './Checkbox';

export function Task() {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);

  function handleCheckboxClick() {
    setCheckboxIsChecked(!checkboxIsChecked);
  }

  return (
    <article className={styles.container}>
      <Checkbox isChecked={checkboxIsChecked} onCheckboxClick={handleCheckboxClick} />      
      <div 
        className={checkboxIsChecked ? styles.contentChecked : styles.content}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </div>
      <button>
        <Trash size={18} />
      </button>
    </article>
  )
}