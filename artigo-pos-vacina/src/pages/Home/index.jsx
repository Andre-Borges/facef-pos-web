import React, { useState, useEffect } from 'react';
import {
  CContainer,
  CCol,
  CLabel,
  CInput,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CForm,
  CFooter,
  CButton,
} from '@coreui/react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectFilter, setSelectFilter] = useState('');

  async function getUsers() {
    const response = await api.get('/users');
    setUsers(response.data);
  }

  async function deleteUser(user) {
    // Apenas atualiza o status para inativo
    const request = await api
      .put(`/users/${user.id}`, {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        mobile: user.mobile,
        password: user.password,
        expire: user.expire,
        expire_date: user.expire_date,
        status: 'Inactive',
        profile: user.profile,
        company: user.company,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });

    if (request.status === 200) {
      alert('Usuário inativado com sucesso');
      const arrayUsersUpdate = [];
      arrayUsersUpdate.push(...users);

      const index = arrayUsersUpdate.findIndex((item) => item.id === user.id);
      arrayUsersUpdate[index].status = 'Inactive';

      setUsers(arrayUsersUpdate);
    } else {
      alert('Erro ao inativar usuário');
    }
  }

  /* Busco todas as informações dos navers quando o componente é criado */
  useEffect(() => {
    try {
      getUsers();
    } catch (error) {
      console.log('error: ', error);
    }
  }, []);

  const fields = [
    { key: 'name', _style: { width: '30%' } },
    { key: 'username', _style: { width: '25%' } },
    { key: 'profile', _style: { width: '25%' } },
    { key: 'status', _style: { width: '10%' } },
    { key: 'actions', _style: { width: '10%' } },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  function handleOnChange(e) {
    const { value } = e.target;
    setSelectFilter(value);
  }

  function filterSelect(users) {
    return selectFilter === ''
      ? users
      : users.filter((user) => user.status === selectFilter);
  }

  return (
    <CContainer className="d-flex flex-grow-1 justify-content-center align-items-center carterinha-container">
      <CCol xs="12" sm="12">
        <CCard className="pb-0">
          <CCardHeader className="header-carterinha">
            CAMPANHA CONTRA A COVID-19
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="1" className="dose-number mt-0">
                  <CLabel>Nome</CLabel>
                </CCol>
                <CCol xs="12" md="11" className="border-0">
                  <CInput
                    id="text-input"
                    name="text-input"
                    value="João Rodrigues da Silva"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1" className="dose-number">
                  <CLabel>1º DOSE</CLabel>
                </CCol>
                <CCol xs="12" md="5"></CCol>
                <CCol md="1" className="dose-number">
                  <CLabel>2º DOSE</CLabel>
                </CCol>
                <CCol xs="12" md="5"></CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Unidade</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="UBS Vila Maria Rosa" />
                </CCol>
                <CCol md="1">
                  <CLabel>Unidade</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Cnes</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="2570987" />
                </CCol>
                <CCol md="1">
                  <CLabel>Cnes</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Data</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="01/06/2021" />
                </CCol>
                <CCol md="1">
                  <CLabel>Data</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Lote</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="971VC1721Z" />
                </CCol>
                <CCol md="1">
                  <CLabel>Lote</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Fabricante</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="Pfizer" />
                </CCol>
                <CCol md="1">
                  <CLabel>Fabricante</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Vacinador</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput
                    id="text-input"
                    name="text-input"
                    value="Camila Rodrigues Rocha"
                  />
                </CCol>
                <CCol md="1">
                  <CLabel>Vacinador</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="1">
                  <CLabel>Reg. Prof.</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" value="85284723" />
                </CCol>
                <CCol md="1">
                  <CLabel>Reg. Prof.</CLabel>
                </CCol>
                <CCol xs="12" md="5">
                  <CInput id="text-input" name="text-input" />
                </CCol>
              </CFormGroup>
            </CForm>
            <CFormGroup row className="form-actions mb-2 border-0">
              <CCol
                xs="12"
                md="6"
                className="d-flex justify-content-center mt-3 border-0"
              >
                <CButton type="submit" size="md" class="btn btn-primary btn-md">
                  Salvar
                </CButton>
              </CCol>
              <CCol
                xs="12"
                md="6"
                className="d-flex justify-content-center mt-3 border-0"
              >
                <CButton type="submit" size="md" class="btn btn-primary btn-md">
                  Salvar
                </CButton>
              </CCol>
            </CFormGroup>
          </CCardBody>
          <CFooter className="border-0"></CFooter>
        </CCard>
      </CCol>
    </CContainer>
  );
}
