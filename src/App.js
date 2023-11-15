import styles from './App.module.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <Sidebar />
            <Content />
        </div>
    );
}

export default App;
