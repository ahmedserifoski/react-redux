import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionMakers } from "./store/index";

function App() {
    const accountNr1 = useSelector((state) => state.accountNr1);
    const dispatch = useDispatch();

    const { depositCoins, withdrawCoins } = bindActionCreators(
        actionMakers,
        dispatch
    );
    // console.log(depositCoins);

    // console.log(accountNr1);

    return (
        <div className='App'>
            <h1>{accountNr1}</h1>
            <button onClick={() => depositCoins(1000)}>deposit</button>
            <button onClick={() => withdrawCoins(10)}>withdraw</button>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default App;
