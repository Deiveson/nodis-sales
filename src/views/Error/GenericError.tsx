import React from 'react';
import Button from "../../components/button";

const GenericErrorPage = () => (
  <section className="error-page title">
    <span className="error-page__title">OPSS!</span>
    <span className="error-page__description"> Ocorreu um erro na requisição</span>
    <span className="error-page__go-back"><Button color="primary" text="Voltar Para a Home" /></span>
  </section>
);

export default GenericErrorPage;
