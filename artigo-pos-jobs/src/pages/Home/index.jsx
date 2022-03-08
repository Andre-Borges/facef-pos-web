import React from 'react';
import { CContainer, CImg, CRow, CCol, CCard, CCardBody } from '@coreui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <CContainer className="home-container mt-4">
      {/* <h2 className="text-black text-center font-weight-bold mt-2 mb-4">
        Por tecnologia
      </h2> */}
      <CRow className="mb-3">
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/androiddevbr/vagas">
                <CImg src="/techs/android.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/androiddevbr/vagas" className="text-center mb-2 pr-2 pl-2">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Android</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/CocoaHeadsBrasil/vagas">
                <CImg src="/techs/apple.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link
              to="/jobs/CocoaHeadsBrasil/vagas"
              className="text-center mb-2 pr-1 pl-1"
            >
              <h5>Vagas para desenvolvedores</h5>
              <h5>Ios</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/phpdevbr/vagas">
                <CImg src="/techs/php.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/phpdevbr/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>PHP</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs">
                <CImg src="/techs/python.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Python</h5>
            </Link>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/vuejs-br/vagas">
                <CImg src="/techs/vuejs.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/vuejs-br/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Vue.js</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/Gommunity/vagas">
                <CImg src="/techs/go.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/Gommunity/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Go/Golang</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/flutterbr/vagas">
                <CImg src="/techs/flutter.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/flutterbr/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Flutter</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/react-brasil/vagas">
                <CImg src="/techs/react.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/react-brasil/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>React/React Native</h5>
            </Link>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/dotnetdevbr/vagas">
                <CImg src="/techs/dot-net.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/dotnetdevbr/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>.NET</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs/rustdevbr/vagas">
                <CImg src="/techs/rust.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs/rustdevbr/vagas" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Rust</h5>
            </Link>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard>
            <CCardBody className="d-flex justify-content-center">
              <Link to="/jobs">
                <CImg src="/techs/elm.svg" className="cursor-ponter" width={150} />
              </Link>
            </CCardBody>
            <Link to="/jobs" className="text-center mb-2 pr-1 pl-1">
              <h5>Vagas para desenvolvedores</h5>
              <h5>Elm</h5>
            </Link>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
}
