import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { loadWeb3 } from '../api';
import axios from 'axios'
import { contractAbi, contractAddress } from '../constants/contract'
import Skeleton from '@mui/material/Skeleton';
import Web3 from 'web3';
import { borderRadius } from '@mui/system';

const webSupplay = new Web3("https://evm-cronos.crypto.org")
export default function Header({isToggle, setIsToogel}) {

    let [isActiveDash, setIsActiveDash] = useState(true)
    let [isActiveSWTC, setIsActiveSWTC] = useState(false)
    let [dispalyAcc, setDisplayAcc] = useState("")
    let [totalStakeAmount, setTotalStakeAmount] = useState(0);
    let [avaxPrice, setAvaxPrice] = useState(0);
    let [contractBal, setContractBal]=useState(0)
    const changeActiveDash = () => {
        setIsActiveDash(true);
        setIsActiveSWTC(false)
    }
    const changeActiveSWTC = () => {
        setIsActiveDash(false);
        setIsActiveSWTC(true)
    }


    const getAccount = async () => {
        try {
            let acc = await loadWeb3()
            if (acc == "No Wallet") {
                setDisplayAcc("Connect Wallet")
            } else if (acc == "Wrong Network") {
                setDisplayAcc(acc)
            } else {
                setDisplayAcc(acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4))
                setIsToogel(!isToggle)
            }
        } catch (e) {
            console.error("error while get account");
        }
    }
    const getData = async () => {
        try {
           
                const contract = new webSupplay.eth.Contract(contractAbi, contractAddress);
                let toatalStake = await contract.methods.totalStaked().call();
                setTotalStakeAmount(webSupplay.utils.fromWei(toatalStake));
                
                
                let price = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=CRO&tsyms=USDT");
                setAvaxPrice(parseFloat(price.data.USDT).toFixed(3))
        

        } catch (e) {
            console.error("error");
        }
    }
useEffect(()=>{
    getData()
},[isToggle])
useEffect(()=> {
    getAccount()
},[])

    return (
        <div className='container'>



            <Navbar collapseOnSelect expand="lg" className='Small_nav' >
                <Container>
                    <Navbar.Brand href="#home"><img src="WhatsApp Image 2022-03-29 at 7.23.18 AM.jpeg" alt="" width="100px" style={{ borderRadius: '10px' }} /><span
                    className='ms-2'
                    style={{ borderRadius: '10px',
                            fontFamily:"'Lora', serif",
                            letterSpacing:"2px",
                            fontSize:"25px",
                            color:"#0b1695",
                            fontWeight:"700",
                            textShadow:"2px 1px 0 #323fc9, -3px -3px 0 #fff"
                }}
                    >CRONSTAKER</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navcheck ">
                            <Nav.Link href="#"> <div className="top-prices">
                                <p>CRO PRICE</p>
                                <span>
                                    <span>
                                        {
                                            avaxPrice ?
                                                <span>${avaxPrice}</span>
                                                :
                                                <Skeleton animation="wave" width={80} height={28} />
                                        }
                                    </span>
                                </span>
                            </div></Nav.Link>
                            <Nav.Link href="#" className='nav-link'> <div className="top-prices">
                                <p>TOTAL STAKED AMOUNT</p>
                                <span>
                                    <span>
                                        {
                                            totalStakeAmount ?
                                                <span>{totalStakeAmount}</span>
                                                :
                                                <Skeleton animation="wave" width={80} height={28} />
                                        }

                                    </span>
                                </span>
                            </div></Nav.Link>
                            <Nav.Link href="#" className='nav-link navcheck'><NavLink to="/"
                                className={isActiveDash ? "navbar__link__active" : "navbar__link"}
                                onClick={changeActiveDash}
                            > DASHBOARD</NavLink></Nav.Link>


                            <Nav.Link href="#" className='nav-link navcheck'>   
                            <a className=' navbar__link__active' href="https://cronoscan.com/address/0x06e39dd247dfee3d68ccdd4f59b0bc1a95295010#code" target="_blank" rel="noreferrer">CONTRACT</a>
                            </Nav.Link>
                            <Nav.Link href="#" className='nav-link navcheck'><a className='navbar__link__active' href="https://t.me/+Czh3bMlU3kdmNzM0" target="_blank" rel="noreferrer">TELEGRAM</a>
                            </Nav.Link>
                            <Nav.Link href="#" className='nav-link navcheck'><a className='navbar__link__active' href="whitepaper cronstaker.pdf" target="_blank" rel="noreferrer">TELEGRAM</a>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">  <div className="connect-button-wrap">
                                <button className="connect-wallet-btn" style={{ fontWeight: "700", padding: "11px 20px" }}
                                    onClick={getAccount}
                                >{dispalyAcc}</button>
                            </div></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" className='large_nav' >
                <Container>
                    <Navbar.Brand href="#home"><img src="WhatsApp Image 2022-03-29 at 7.23.18 AM.jpeg" alt="" width="100px" style={{ borderRadius: '10px' }} /><span
                    className='ms-2'
                    style={{ borderRadius: '10px',
                            fontFamily:"'Lora', serif",
                            letterSpacing:"2px",
                            fontSize:"25px",
                            color:"#0b1695",
                            fontWeight:"700",
                            textShadow:"2px 1px 0 #323fc9, -3px -3px 0 #fff"
                }}
                    >CRONSTAKER</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">
                            <Nav.Link href="#"> <div className="top-prices">
                                <p>CRO PRICE</p>
                                <span>
                                    {
                                        avaxPrice ?
                                            <span>${avaxPrice}</span>
                                            :
                                            <Skeleton animation="wave" width={80} height={28} />
                                    }


                                </span>
                            </div></Nav.Link>
                            <Nav.Link href="#" className='nav-link'> <div className="top-prices">
                                <p>TOTAL STAKED AMOUNT</p>
                                <span>
                                    {
                                        totalStakeAmount ?
                                            <span>{totalStakeAmount}</span>
                                            :
                                            <Skeleton animation="wave" width={80} height={28} />
                                    }

                                </span>
                            </div></Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#">  <div className="connect-button-wrap">
                                <button className="connect-wallet-btn" style={{ fontWeight: "700", padding: "11px 20px" }}
                                    onClick={getAccount}
                                >{dispalyAcc}</button>
                            </div></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>







            <div className="menu-container large_nav"  >

                <NavLink to="/"
                    className={isActiveDash ? "navbar__link__active" : "navbar__link"}
                    onClick={changeActiveDash}
                > DASHBOARD</NavLink>
                {/* <NavLink to="/SWTC"
                    onClick={changeActiveSWTC}
                    className={isActiveSWTC ? "navbar__link__active" : "navbar__link"}
                >SWTC REWARD</NavLink> */}
               
                <a className='navlink navbar__link__active' href="https://cronoscan.com/address/0x06e39dd247dfee3d68ccdd4f59b0bc1a95295010#code" target="_blank" rel="noreferrer">CONTRACT</a>
                <a className='navlink navbar__link__active' href="https://t.me/+Czh3bMlU3kdmNzM0" target="_blank" rel="noreferrer">TELEGRAM</a>
                <a className='navlink navbar__link__active' href="whitepaper cronstaker.pdf" target="_blank" rel="noreferrer">WHITEPAPER</a>
                
            </div>





        </div>
    )
}
