import React from 'react';
import { motion } from 'framer-motion';

import purplecheck from '../../assets/purplecheck.svg';
import whitecheck from '../../assets/whitecheck.svg';

import Switch from '../../components/Switch';

import {
  Container,
  Header,
  ContainerCards,
  Card,
  SpotLight,
  Price,
  Separator,
} from './styles';

const Pricing: React.FC = () => {
  const whileHoverButton = { scale: 1, transition: { duration: 0.5 } };
  const initialButton = { scale: 0.97 };
  const transitionButton = { duration: 0.5 };

  return (
    <Container>
      <Header>
        <h1>Nossos Preços</h1>

        <div>
          <span>Anual</span>
          <Switch checked onChange={() => {}} />
          <span>Mensal</span>
        </div>
      </Header>

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

            <motion.button
              initial={initialButton}
              transition={transitionButton}
              whileHover={whileHoverButton}
            >
              Saiba Mais
            </motion.button>
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

            <motion.button
              initial={initialButton}
              transition={transitionButton}
              whileHover={whileHoverButton}
            >
              Saiba Mais
            </motion.button>
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

            <motion.button
              initial={initialButton}
              transition={transitionButton}
              whileHover={whileHoverButton}
            >
              Saiba Mais
            </motion.button>
          </div>
        </Card>
      </ContainerCards>
    </Container>
  );
};

export default Pricing;
