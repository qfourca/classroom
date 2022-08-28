import Router from "./router/router.jsx"
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil'
const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </RecoilRoot>
    )
}
export default App