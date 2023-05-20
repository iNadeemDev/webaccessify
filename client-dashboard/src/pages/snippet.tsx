import React from 'react';
import { Col, Row } from 'antd';
import CodeSnippet from './snippet';
import Installation from './installation';
import { useGetIdentity, useOne } from "@pankod/refine-core";

type SnippetInterface = {
  code: string,
}
const Snippet = () => {

  // Getting client key
  const { data: user } = useGetIdentity<{
    clientKey: string
  }>();
  const code = `<script>!function(){var e=document.createElement("script");e.src="https://manage.cyclic.app/wafy/script.js?clientKey=${user?.clientKey}",e.defer=!0,document.head.appendChild(e)}();</script>`;

  return (
    <div style={{
      margin: '0 auto'
    }}>
      <div className='card'
        style={{
          height: '100%',
          backgroundColor: '#FEFFFFDA',
          borderRadius: '15px',
        }}
      >
        <Col>
          <Row>
            <h2 style={{ padding: '0 20px', color: '#000' }}> Widget Embedded Script</h2>
          </Row >
          <Row>
            <h3 style={{ padding: '0 20px', color: '#000' }}>Insert the following script into the head section on your website.</h3>
          </Row>
          <Row>
            <div className='code'
              style={{
                marginTop: '3%',
                backgroundColor: '#d0eeed',
                margin: '2%',
                borderRadius: '10px',
                padding: '20px',
                color: '#000'
              }}
              id="colored-text"
            ><Installation code={code} />
            </div>
          </Row>
        </Col>
      </div>
    </div>
  )

};
export default Snippet;
