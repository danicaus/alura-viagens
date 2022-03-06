import React from 'react';

import PageWrapper from '../src/components/PageWrapper';
import Section from '../src/components/Section';
import Text from '../src/components/Text';
import Title from '../src/components/Title';

export default function ConfirmPage() {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState('loading');
  const isWindowAccessible = typeof window !== 'undefined';

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    const rawData = localStorage.getItem('FormData');
    if (rawData) {
      setData(JSON.parse(rawData));
      setStatus('ok');
    } else {
      setStatus('noData');
    }
  }, [isWindowAccessible]);

  function loading() {
    return <Section title="Carregando..." />;
  }

  function noData() {
    return <Section title="Dados não enviados" />;
  }

  function formatDate(date) {
    if (!date) return 'Carregando...';
    const dateFormat = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('pt-BR').format(dateFormat);
    return formattedDate;
  }

  function clientData() {
    return (
      <Section title="Dados enviados">
        <Text>
          Data de saída:
          <Text light as="span">
            {' '}
            {formatDate(data?.departureDate)}
          </Text>
        </Text>
        <Text>
          Data de retorno:
          <Text light as="span">
            {' '}
            {formatDate(data?.returnDate)}
          </Text>
        </Text>
        <Text>
          Local de origem:
          <Text light as="span">
            {' '}
            {data?.departurePlace}
          </Text>
        </Text>
        <Text>
          Local de destino:
          <Text light as="span">
            {' '}
            {data?.arrivalPlace}
          </Text>
        </Text>
        <Text>
          Forma de pagamento:
          <Text light as="span">
            {' '}
            {data?.paymentMethod}
          </Text>
        </Text>
        <Text>
          Nome do passageiro:
          <Text light as="span">
            {' '}
            {`${data?.clientName} ${data?.clientSurname}`}
          </Text>
        </Text>
        <Text>
          País de residência:
          <Text light as="span">
            {' '}
            {data?.clientNationality || 'Não informado'}
          </Text>
        </Text>
        <Text>
          Data de nascimento:
          <Text light as="span">
            {' '}
            {formatDate(data?.clientBirthDate)}
          </Text>
        </Text>
        <Text>
          CPF:
          <Text light as="span">
            {' '}
            {data?.clientDocument}
          </Text>
        </Text>
        <Text>
          Email:
          <Text light as="span">
            {' '}
            {data?.clientEmail}
          </Text>
        </Text>
        <Text>
          Telefone:
          <Text light as="span">
            {' '}
            {data?.clientTelephone || 'Não informado'}
          </Text>
        </Text>
      </Section>
    );
  }

  const pageStatus = {
    loading: loading(),
    noData: noData(),
    ok: clientData(),
  };

  return (
    <PageWrapper>
      <Title>Alura Viagens</Title>
      {pageStatus[status]}
    </PageWrapper>
  );
}
