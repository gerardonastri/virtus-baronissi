import React, { useEffect, useState } from 'react';
import styles from '../../styles/Squadra.module.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import  Pagination  from  '../../components/Pagination';
import { axiosReq } from '../../util/apiCalls';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  
  
  
const Squadra = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null)

    const roaster = [
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3},
        { nome: 'Apicella Giuseppe', anno: 2022, numero: 3}
    ]

    const classifica = [
        {id: 1, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 2, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 3, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 4, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 5, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 6, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 7, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 8, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 9, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 10, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 11, nome: 'basket club irpinia', punti: 30, partite: 18},
        {id: 12, nome: 'basket club irpinia', punti: 30, partite: 18},
    ]
    const calendario = [
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},
        {casa: 'Virtus Baronissi', fuori: 'Tigers Saviano', data: 'Lun 29 Nov, 21 21:00', risultato: '85-42'},

    ]
    
    useEffect(() => {
        const getTeam = async () => {
            let id = location.pathname.split('/')[2]
            if(id[4] === 'r'){
                id = id.split('r');
                id[0] += 'r ';
                id = id.join('')
            }
            setId(id)
        }
        const getData = async () => {
            let id = location.pathname.split('/')[2];
            const res = await axiosReq(`team?id=${id}`)
            setData(res.data)
        }
        getTeam()
        getData()
    }, [])

  return (
    <div className={styles.container}>
        <Navbar />
        <h1 className={styles.teamName}>{id?.toUpperCase()}</h1>
        <div className={styles.wrapper}>

            <div className={styles.section}>
                <h2 style={styles.sectionTitle}>Roaster</h2>
                <div className={styles.classifica}>
                     <TableContainer component={Paper} sx={{width: '100%'}}>
                        <Table  aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell className={styles.gray}>Nome</StyledTableCell>
                                <StyledTableCell align="right" className={styles.gray} sx={{textAlign: 'center', padding: {xs: '3px 8px'}}}>Anno</StyledTableCell>
                                <StyledTableCell align="right" className={styles.gray} sx={{textAlign: 'center', padding: {xs: '3px 8px'}}}>Numero</StyledTableCell>
                                {id == 'under 19' && (
                                    <>
                                    <StyledTableCell align="right" className={styles.gray} sx={{textAlign: 'center', padding: {xs: '3px 8px'}}}>Punti</StyledTableCell>
                                    <StyledTableCell align="right" className={styles.gray} sx={{textAlign: 'center', padding: {xs: '3px 8px'}}}>Partite</StyledTableCell>
                                    <StyledTableCell align="right" className={styles.gray} sx={{textAlign: 'center',  padding: {xs: '3px 8px'}}}>Media</StyledTableCell>
                                    </>
                                )}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data?.roaster.map((row) => (
                                <StyledTableRow key={row.nome}>
                                <StyledTableCell component="th" scope="row"  sx={{fontWeight: '600', color: "rgb(70 56 56)", padding: {xs: '8px 10px'} }}>
                                    {row.nome}
                                </StyledTableCell>
                                <StyledTableCell align="center" sx={{padding: {xs: '3px 8px'}}} >{row.anno}</StyledTableCell>
                                <StyledTableCell align="center" sx={{padding: {xs: '3px 8px'}}} >{row.numero}</StyledTableCell>
                                {id === 'under 19' && (
                                    <>
                                        <StyledTableCell align="center" sx={{color: "blue", padding: {xs: '3px 8px'}}} >188</StyledTableCell>
                                        <StyledTableCell align="center" sx={{color: "red", padding: {xs: '3px 8px'}}} >10</StyledTableCell>
                                        <StyledTableCell align="center" sx={{color: "green", padding: {xs: '3px 8px'}}} >18</StyledTableCell>
                                    </>
                                )}
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
            </div>

            <div className={styles.section}>
                <h2 style={styles.sectionTitle}>Classifica</h2>
                <div className={styles.classifica}>
                
                <TableContainer component={Paper} sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell className={styles.blue}>Posizione</StyledTableCell>
                                <StyledTableCell className={styles.blue} align="center">Squadra</StyledTableCell>
                                <StyledTableCell className={styles.blue} align="center">Punti</StyledTableCell>
                                <StyledTableCell className={styles.blue} align="center">Partite</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data?.classifica.map((row) => (
                                <StyledTableRow key={row.posizione}>
                                <StyledTableCell component="th" scope="row" sx={{color: 'blue', padding: {xs: '8px 10px'}}}>
                                    {row.posizione}
                                </StyledTableCell>
                                <StyledTableCell align="center"  sx={{fontWeight: '600', color: "rgb(70 56 56)", padding: {xs: '8px 10px'}}} >{row.nome}</StyledTableCell>
                                <StyledTableCell align="center"  sx={{padding: {xs: '8px 10px'}}}>{row.punti}</StyledTableCell>
                                    <StyledTableCell align="center" sx={{padding: {xs: '8px 10px'}}} >{row.partite}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className={styles.section}>
                <h2 style={styles.sectionTitle}>Calendario</h2>
                <div className={styles.calendario}>
                    <div className={styles.classifica}>
                    
                    <TableContainer component={Paper} sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell className={styles.red} >Partita</StyledTableCell>
                                        <StyledTableCell className={styles.red} align="center">Data</StyledTableCell>
                                        <StyledTableCell className={styles.red} align="center">Risultato</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {data?.calendario.map((row) => (
                                    <StyledTableRow key={row.casa}>
                                    <StyledTableCell component="th" scope="row" sx={{fontWeight: '600', color: "rgb(70 56 56)", padding: {xs: '10px'}}}>
                                        {row.partita}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" sx={{color: 'gray', fontWeight: '100', padding: {xs: '8px 10px'}}} >{row.data}</StyledTableCell>
                                    <StyledTableCell align="center" sx={{color: 'gray', padding: {xs: '8px 10px'}}} >{row.risultato}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>

        </div>
        <Pagination squadra={id && id} images={data && data.images} />
        <Footer />
    </div>
  )
}

export default Squadra