import "./NotFound.css";
import  Astronaft  from "../../assets/astronaft.png";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-main-text">Сторінку не знайдено</p>
      <p className="notfound-sub-text">
        Можливо, вона була видалена або ви ввели неправильну адресу.
      </p>
      <img src={Astronaft} alt="Astronaft" className="astronaut" />
      <Link to="/" className="home-button">
        🏠 Повернутись на головну
      </Link>
    </div>
  );
}



// export default function NotFound() {
  //!1 useState - зберігає стан компонента [стан, змінити стан]
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  //!2 useEffect - побічні ефекти
  // 1 Mounting монтування компонента - народження, створення ком і він зявляється в DOM
  // 2 Updating оновлення компонента - життя
  // 3 UnMounting демонтаж компонента - смерть, зникає з DOM

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  //! A буде оновлюватися при любому рендеру
  // useEffect(()=>{
  //     console.log('ok');
  // })

  //! B [] , буде зпрацьовувати тільки при Mounting(народження компонента)
  // useEffect(()=>{
  //     console.log('ok');
  // },[])

  // useEffect(()=>{
  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //         .then(response => response.json())
  //         .then(json => console.log(json))
  // },[])

  //! C [a,b,c] - буде спрацьовувати коли буде змінюватися стан трігерів

  // useEffect(()=>{
  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //         .then(response => response.json())
  //         .then(json => console.log(json))
  // },[count])

  // ///////////////////////////////

  // const [timer, setTimer] = useState(0)

  // setInterval(()=>{
  //     console.log('test');
  //     setTimer(timer + 1)
  // }, 1000)

  // useEffect(()=>{
  //     const tim = setInterval(()=>{
  //         console.log('test');
  //         setTimer(timer + 1)
  //     }, 1000)
  //     return () => clearInterval(tim)
  // },[])

  //? useMemo and useCallback оптимізації продуктивнося
  //! useMemo - для обрахунків
  // const statusCounts = useMemo(() => {
  //     const counts = {...contactStatuss}
  //     Object.keys(counts).forEach(status => (counts[status].count = 0))
  //     contacts.forEach(contact => {
  //       contactStatuss[contact.status].count++
  //     });
  //     return counts
  // }, [contacts, contactStatuss])

  //! 4 useCallback - для функцій
  // const handleTextChange = useCallback((e) => {
  //     console.log('test');
  // },[])

  //! 5 useContext - отримання значень із контекста

  // const ThemeContext = createContext(null) // це початкове значення

  // function ThemeProvider({ children }) {
  //     const [theme, setTheme] = useState('light')

  //     const toggleTheme = () =>{
  //         setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  //     }

  //     const contextValue = {theme, toggleTheme}

  //     return(
  //       <ThemeContext.Provider value={contextValue}>
  //         {children}
  //       </ThemeContext.Provider>
  //     )
  // }

  // function ThemedButton() {
  //     const {theme, toggleTheme} = useContext(ThemeContext)

  //     return(
  //         <button
  //            onClick={toggleTheme}
  //            style={{
  //             backgroundColor: theme === 'dark' ? '#333' : '#eee'
  //            }}
  //         >поточна тема: {theme}</button>
  //     )
  // }

  // app.jsx

  //    function App() {
  //     return(
  //         <ThemeProvider>
  //             <div>
  //                 <h1>Демонстрація useContext</h1>
  //                 <ThemedButton/>
  //             </div>
  //         </ThemeProvider>
  //     )
  // }

  //!6 useReducer - керування складними станами

  // function counterReducer(state, actions) {
  //   switch (actions.type) {
  //     case "increment":
  //       return { count: state.count + 1 };
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     case "reset":
  //       return { count: 0 };
  //     default:
  //       throw new Error(`unknown action`);
  //   }
  // }

  // const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  //!7 useRef - змінна яка зберігаєть і не викликає рендер
  // const inputRef = useRef(null);
  // const handleFocus = () => {
  //   inputRef.current.focus();
  // };