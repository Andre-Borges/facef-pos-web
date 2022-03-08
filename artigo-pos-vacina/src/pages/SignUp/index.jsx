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
  CImg,
  CRow,
} from '@coreui/react';

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <CContainer className="d-flex flex-grow-1 justify-content-center align-items-center">
      <CCol xs="12" sm="3">
        <CCard>
          <CCardHeader>
            <CRow className="align-items-center">
              <CCol md="4">
                <Link to="/login" className="cursor-ponter">
                  <CImg src="/icons/voltar.png" className="ml-1 mr-1" width={15} />
                </Link>
              </CCol>
              <CCol md="8">
                <h6 className="m-0">
                  <b>Cadastro</b>
                </h6>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CInputGroup>
                  <CInput id="nome" type="text" placeholder="Nome" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="cpf" type="text" placeholder="CPF" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="celular" type="text" placeholder="Celular" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="cidade" type="text" placeholder="Cidade" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="UF" type="text" placeholder="UF" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="email" type="email" placeholder="Email" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="password" type="password" placeholder="Senha" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInput id="password" type="password" placeholder="Confirmar a Senha" />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup className="form-actions mb-2">
                <CButton type="submit" size="sm" class="btn btn-primary btn-sm w-100">
                  Salvar
                </CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CContainer>
  );
}
