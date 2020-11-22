

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="My Experiences - Sumedh Raj">
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <iframe style={{width: '100%', height: '800px'}} src="/sumedh_cv.pdf"/>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default Cv;
