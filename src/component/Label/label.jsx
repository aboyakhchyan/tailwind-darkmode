import styles from './style.module.css'

export const Label = ({isDarkMode, setIsDarkMode}) => {
   
    return (
        <>
            <label 
                className={styles.switch}
            >
                <input 
                    type="checkbox"
                    onChange={evt => {
                        evt.stopPropagation()
                        setIsDarkMode(!isDarkMode)
                    }}
                />
                <span className={styles.slider + ' ' + styles.round}></span>
            </label>
        </>
    )
}