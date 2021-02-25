import styles from '../styles/components/Profile.module.css'

export function Profile() {

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Samuel-Lucas.png" alt="Samuel Lucas"/>

            <div>
                <strong>Samuel Lucas</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}