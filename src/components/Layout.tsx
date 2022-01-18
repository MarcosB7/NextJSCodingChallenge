import { ReactNode } from 'react';
import styles from '../styles/Home.module.css'

type LayoutTypes = {
    children: ReactNode
}

const Layout = ({ children }: LayoutTypes) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout;