import { useRouteError } from "react-router-dom";

function Errorpage() {
  const error = useRouteError();

  return (
    <>
      <div id="error-page">
        <h1>Opps!</h1>
        <p>Hubo un error, esta pagina no existe</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}

export default Errorpage;
