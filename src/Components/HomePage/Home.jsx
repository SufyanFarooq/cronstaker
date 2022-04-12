import React, { useState, useEffect } from 'react'
import './Home.css'
import { loadWeb3 } from '../api';
import { contractAbi, contractAddress } from '../constants/contract';
import Skeleton from '@mui/material/Skeleton';
import Web3 from 'web3';

const webSupplay = new Web3("https://evm-cronos.crypto.org")
export default function Home({isToggle, setIsToogel}) {
    let [contractBal, setContractBal] = useState(0);
    let [walletBalance, setWalletBalance]=useState(0);

    const getData = async () => {
        try {
            const contract = new webSupplay.eth.Contract(contractAbi, contractAddress);
            let contBal = await contract.methods.getContractBalance().call();
            contBal = webSupplay.utils.fromWei(contBal)
            contBal = parseFloat(contBal).toFixed(2)
            setContractBal(contBal);
           
            

        } catch (e) {
            console.error("error while get data in home",e)
        }
    }
    const getDataWithMetaMask = async () => {
        try{
            let acc = await loadWeb3()
            if (acc == "No Wallet") {
                console.info(acc)
            } else if (acc == "Wrong Network") {
                console.info(acc)
            } else {
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                let walletBal = await web3.eth.getBalance(acc);
                walletBal = web3.utils.fromWei(walletBal)
                walletBal = parseFloat(walletBal).toFixed(2)
                setWalletBalance(walletBal)
            }

        }catch(e){
            console.error("error while get data withmetamask", e);
        }
    }
    useEffect(() => {
        getData()
        getDataWithMetaMask()
    }, [isToggle])
    return (
        <div>

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 mt-5">

                        <h1 className="top-title" style={{ marginLeft: "27px", marginTop: "20px" }}>Stake Your CRO  &amp; Earn up to 20% Daily</h1>

                    </div>

                    <div className="col-lg-4 mt-5">
                        <div className="global-stats-box global-stats-wrap">
                            <h5>GLOBAL STATS</h5>
                            <hr />
                            <div className="stat-box-wrap">
                                <div className='text-center'>
                                    <p>Total Contract Balance</p>
                                    <span >
                                        {
                                            contractBal ?
                                                <span>{contractBal}</span>
                                                :
                                                <Skeleton animation="wave" width={80} height={28} />
                                        }

                                    </span>
                                </div>
                                {/* <div>
                                    <p>SWTC Price</p>
                                    <span>
                                        <span>$ 5.65</span>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 mt-5">
                        <div class="global-stats-box wallet-stats-wrap">
                            <h5 className='text-white'>WALLET BALANCE</h5>
                            <hr />
                            <div className="stat-box-wrap">
                                <div>
                                    <p>SWTC</p>
                                    <span>
                                        <span>0.00</span>
                                    </span>
                                </div>
                                <div>
                                    <p >CRO</p>
                                    <span>
                                    {
                                            walletBalance ?
                                                <span>{walletBalance}</span>
                                                :
                                                <Skeleton animation="wave" width={80} height={28} />
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    )
}
