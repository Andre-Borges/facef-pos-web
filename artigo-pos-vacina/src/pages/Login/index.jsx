import React from 'react';

import {
  CContainer,
  CButton,
  CCol,
  CInput,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CInputGroup,
} from '@coreui/react';

import { Link } from 'react-router-dom';

function handleOnChange(e) {}

function handleSubmit(e) {}

export default function Login() {
  return (
    <CContainer className="d-flex flex-grow-1 justify-content-center align-items-center">
      <CCol xs="12" sm="3">
        <CCard>
          <CCardHeader className="text-center">
            <h6 className="m-0">
              <b>Bem vindo a sua carteira de vacinação contra covid-19!</b>
            </h6>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CInputGroup>
                  <CInput id="email" type="email" placeholder="Email" onChange={(e) => handleOnChange(e)}/>
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="password" type="password" placeholder="Password" onChange={(e) => handleOnChange(e)}/>
                </CInputGroup>
              </CFormGroup>
              <CFormGroup className="form-actions mb-2">
                <CButton type="submit" size="sm" class="btn btn-primary btn-sm w-100" onClick={() => handleSubmit()} >
                  Login
                </CButton>
              </CFormGroup>
              <CFormGroup className="form-actions">
                <Link to="/recover" className="text-center d-block">
                  Esqueceu sua senha?
                </Link>
              </CFormGroup>
              <CFormGroup className="form-actions mb-0">
                <Link to="/signup" className="text-center d-block mt-4">
                  Criar nova conta
                </Link>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CContainer>
  );
}
