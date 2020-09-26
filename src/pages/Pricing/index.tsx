import React from 'react';

import purplecheck from '../../assets/purplecheck.svg';
import whitecheck from '../../assets/whitecheck.svg';
import Switch from '../../components/Switch';

import {
  Container,
  ContainerCards,
  Card,
  SpotLight,
  Price,
  Separator,
} from './styles';

const Pricing: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Nossos Preços</h1>

        <div>
          <span>Anual</span>
          <Switch checked onChange={() => {}} />
          <span>Mensal</span>
        </div>
      </header>

      <ContainerCards>
        <Card>
          <h3>Básico</h3>

          <Price>
            <span>R$</span>
            <strong>29,99</strong>
          </Price>

          <Separator />

          <div className="content">
            <ul>
              <li>
                <img src={purplecheck} alt="check-icon" />
                <span>500Gb de Armazenamento</span>
              </li>
              <li>
                <img src={purplecheck} alt="check-icon" />
                <span>2 usuários permitidos</span>
              </li>
            </ul>

            <button type="button">Saiba Mais</button>
          </div>
        </Card>

        <SpotLight>
          <h3>Profissional</h3>

          <Price spotlight>
            <span>R$</span>
            <strong>49,99</strong>
          </Price>

          <Separator />

          <div className="content">
            <ul>
              <li>
                <img src={whitecheck} alt="check-icon" />
                <span>2Tb de armazenamento</span>
              </li>
              <li>
                <img src={whitecheck} alt="check-icon" />
                <span>3 usuários permitidos</span>
              </li>
              <li>
                <img src={whitecheck} alt="check-icon" />
                <span>Suporte 24 horas</span>
              </li>
            </ul>

            <button type="button">Saiba Mais</button>
          </div>
        </SpotLight>

        <Card>
          <h3>Premium</h3>

          <Price>
            <span>R$</span>
            <strong>94,99</strong>
          </Price>

          <Separator />

          <div className="content">
            <ul>
              <li>
                <img src={purplecheck} alt="check-icon" />
                <span>8Tb de armazenamento</span>
              </li>
              <li>
                <img src={purplecheck} alt="check-icon" />
                <span>Usuários ilimitados</span>
              </li>
              <li>
                <img src={purplecheck} alt="check-icon" />
                <span>Suporte 24 horas</span>
              </li>
            </ul>

            <button type="button">Saiba Mais</button>
          </div>
        </Card>
      </ContainerCards>
    </Container>
  );
};

export default Pricing;
