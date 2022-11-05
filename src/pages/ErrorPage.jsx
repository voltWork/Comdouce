import '../App.css'

import Error from '../Errror.gif'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='App'>
      <h1>Ого!</h1>
      <p>Сервер упал</p>
      <img src={Error}/>
      <p>Не расстраивайтесь, попробуйте еще раз</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}