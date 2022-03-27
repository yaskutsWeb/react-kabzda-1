import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="app-wrapper_content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile posts={props.appState.posts} addPost={props.addPost}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogs={props.appState.dialogs}
                                                 messages={props.appState.messages}/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
