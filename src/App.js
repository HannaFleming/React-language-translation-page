import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { i18n, t } = useTranslation();
  
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
  }

  return (
    <div className="App">
     <h1>{ t ('Welcome to React')}</h1>
     <button onClick={toggleLang}>
      {i18n.language === "en" ? 'RU' : "EN"}
     </button>
    </div>
  );
}

export default App;
