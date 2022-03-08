import React, { useState, useEffect } from 'react';
import {
  CContainer,
  CDataTable,
  CBadge,
  CImg,
  CButton,
  CRow,
  CCol,
  CSelect,
  CLabel,
  CInput,
  CCollapse,
  CCardBody,
  CLink,
} from '@coreui/react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Home() {
  const { user, repo } = useParams();
  const [jobs, setJobs] = useState([]);
  const [details, setDetails] = useState([]);
  const [selectFilter, setSelectFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  async function getJobs() {
    const response = await api.get(`/${user}/${repo}/issues`);
    setJobs(response.data);
  }

  const fields = [
    { key: 'title', label: 'Descrição' },
    { key: 'labels', label: 'Labels' },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
    },
  ];

  const getBadge = (status) => {
    // NFD -> REMOVER ACENTOS
    status = status
      .replace(/[^\p{L}\p{N}\p{P}\p{Z}{\^\$}]/gu, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
    console.log(status);
    switch (status) {
      case 'Estagio':
        return '#51cbaf';
      case 'Junior':
        return '#51cbaf';
      case 'Pleno':
        return '#fe5b31';
      case 'Senior':
        return '#7451cb';
      case 'CLT':
        return '#f28fe6';
      case 'PJ':
        return '#4d8210';
      case 'Remoto':
        return '#307f86';
      case 'Presencial':
        return '#30a217';
      case 'Flexivel':
        return '#bf9585';
      case 'Alocado':
        return '#3746d8';
      case 'Semi-presencial':
        return '#11b722';
      case 'Internacional':
        return '#7058fe';
      case 'Visa Sponsorship':
        return '#efa352';
      case 'Outros':
        return '#3d5865';
      case '1k-3k':
        return '#402d23';
      case '3k-5k':
        return '#f38d97';
      case '5k-10k':
        return '#16c7e8';
      case '10k-15k':
        return '#9aa9d6';
      case '15k+':
        return '#452dd6';
      case 'A-Combinar':
        return '#293c64';
      default:
        return generateRandomColorHex();
    }
  };

  const generateRandomColorHex = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  };

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  function handleOnChange(e) {
    const { value } = e.target;
    setSelectFilter(value);
  }

  function filterSelect(jobs) {
    console.log(jobs);
    return selectFilter === '' ? jobs : jobs.filter((job) => job.labels === selectFilter);
  }

  /* Busco todas as informações dos navers quando o componente é criado */
  useEffect(() => {
    try {
      getJobs();
    } catch (error) {
      console.log('error: ', error);
    }
  }, []);

  return (
    <CContainer className="home-container mt-4">
      <CRow className="mb-3 align-items-center">
        <CCol md="3">
          <Link to="/home" className="cursor-ponter">
            <CImg src="/icons/voltar.png" className="ml-1 mr-1" width={25} />
            Voltar
          </Link>
        </CCol>
        <CCol md="1" className="text-md-right align-self-end mt-4 mt-md-0">
          <CLabel htmlFor="select">Descrição</CLabel>
        </CCol>
        <CCol md="4" className="mt-4 mt-md-0">
          <CInput
            type="text"
            id="expire_date"
            name="expire_date"
            placeholder="Pesquisar..."
          />
        </CCol>
        <CCol md="1" className="text-md-right align-self-end mt-4 mt-md-0">
          <CLabel htmlFor="select">Labels</CLabel>
        </CCol>
        <CCol md="3" className="d-flex">
          <CSelect custom name="status" id="status" onChange={(e) => handleOnChange(e)}>
            <option value="">All</option>
            <option value="combinar">A combinar</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
            <option value="estagio">Estágio</option>
            <option value="junior">Junior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Senior</option>
            <option value="flexivel">Flexível</option>
            <option value="fora-do-pais">Fora do país</option>
            <option value="freela">Freela</option>
            <option value="remoto">Remoto</option>
            <option value="presencial">Presencial</option>
            <option value="Inactive">Semi Presencial</option>
            <option value="Inactive">1-3k</option>
            <option value="Inactive">3k-5k</option>
            <option value="Inactive">5k-10k</option>
            <option value="Inactive">10k-15k</option>
            <option value="Inactive">15k+</option>
          </CSelect>
          {/* <CImg src="/icons/filter.svg" className="ml-3" /> */}
        </CCol>
      </CRow>
      <CDataTable
        items={filterSelect(jobs)}
        fields={fields}
        hover
        pagination={{
          doubleArrows: false,
          previousButton: 'Previous',
          nextButton: 'Next',
          align: 'center',
        }}
        scopedSlots={{
          labels: (item) => {
            return (
              <td>
                {item.labels.map((x) => (
                  <span
                    key={x.id}
                    className="badge mr-2"
                    style={{ background: getBadge(x.name) }}
                  >
                    {x.name}
                  </span>
                ))}
              </td>
            );
          },
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            );
          },
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <p className="text-muted">{item.body}</p>
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </CContainer>
  );
}
