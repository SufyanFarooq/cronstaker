import React,{useState,useEffect} from 'react'
import './Earning.css'
import { loadWeb3 } from '../api'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {contractAbi, contractAddress} from '../constants/contract';


export default function Earning({isToggle, setIsToogel}) {
    let [referral, setReferral]=useState(null);
    let [totalDeposit, setToatlDeposit]=useState(0);
    let [avalibleCRO, setAvaliableCRO]=useState(0)
    let [referralTotalBonus, setReferralTotalBonus]=useState(0);
    let [referralWithdrawn, setReferralWithdrawn]=useState(0);
    let [amounOfInvited, setAmounOfInvited] = useState(0);
    const get = async () => {
        try{
            const acc = await loadWeb3()
            if (acc == "No Wallet" ) {
                setToatlDeposit(0)
            } else if (acc == "Wrong Network") {
                setToatlDeposit(0)
            } else {
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress)
                let deposit = await contract.methods.getUserTotalDeposits(acc).call();
                deposit = web3.utils.fromWei(deposit);
                deposit = parseFloat(deposit).toFixed(2)
                console.log("deposit", deposit);
                setToatlDeposit(deposit);
                let totalInvited = await contract.methods. getUserDownlineCount(acc).call();
                setAmounOfInvited(+totalInvited[0] + +totalInvited[1] + +totalInvited[2])
                let refWithDraw =await contract.methods.getUserReferralWithdrawn(acc).call()
                setReferralWithdrawn(refWithDraw);
                let dividend = await contract.methods.getUserDividends(acc).call();
                dividend = web3.utils.fromWei(dividend);
                let withdraeFee = await contract.methods.WITHDRAW_FEE().call();
                let finalValue = (dividend * withdraeFee) / 10000;
                finalValue =  dividend - finalValue;
                let refferalBonus = await contract.methods.getUserReferralBonus(acc).call();
                setReferralTotalBonus(parseFloat(web3.utils.fromWei(refferalBonus)).toFixed(2))
                finalValue = finalValue + web3.utils.fromWei(refferalBonus);

                 let contractBal = await web3.eth.getBalance(contractAddress);
                 contractBal = web3.utils.fromWei(contractBal)
                 if(finalValue > contractBal){
                    setAvaliableCRO(parseFloat(contractBal).toFixed(2))
                 }else{
                    setAvaliableCRO(parseFloat(finalValue).toFixed(2))
                 }

            }
        }catch(e){
            console.error("error while get data", e);
        }
    }

    const withdrawReward = async() => {
        try{
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress)
                let dividend = await contract.methods.getUserDividends(acc).call();
                dividend = web3.utils.fromWei(dividend);
                let withdraeFee = await contract.methods.WITHDRAW_FEE().call();
                let finalValue = (dividend * withdraeFee) / 10000;
                finalValue =  dividend - finalValue;
                let refferalBonus = await contract.methods.getUserReferralBonus(acc).call();
                finalValue = finalValue + web3.utils.fromWei(refferalBonus);
                if(finalValue > 0) {
                    await contract.methods.withdraw().send({
                        from:acc
                    })
                }else{
                    toast.info("User has no divideds");
                }
            }
        }catch(e){
            console.error("error while get withdraw reward",e);
        }
    }

const getRef = async () => {
    try{
        let acc = await loadWeb3()
        if (acc == "No Wallet") {
            console.info(acc)
        } else if (acc == "Wrong Network") {
            console.info(acc)
        } else {
            setReferral(acc);
        }

    }catch(e){
        console.error("error while get ref", e);
    }
}


const copyRef = async() => {
     const acc = await loadWeb3()
    if (acc == "No Wallet") {
        copy(`${window.location.host}/?ref=null`)
        toast.success("copy to clipboard")
    } else if (acc == "Wrong Network") {
        copy(`${window.location.host}/?ref=null`)
        toast.success("copy to clipboard")
    } else {
        copy(`${window.location.host}/?ref=${referral}`)
        toast.success("copy to clipboard")
    }
 }
 useEffect(()=> {
     get()
     getRef();
 },[isToggle]);
    return (
        <div>

            <div className="container">
                <h5 style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "10px", fontSize: "14px" }}>EARNINGS</h5>

                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <div className="withdraw-wrap">
                            <div className="earning-div-flex div_height" >
                                <p>Staked CRO</p>
                                <span>
                                    <span className='text-white' >{totalDeposit}</span>
                                </span>
                            </div>
                            <div className="earning-div-flex div_height">
                                <p>Available CRO for withdraw</p>
                                <span>
                                    <span className='text-white'>{avalibleCRO}</span>
                                </span>
                            </div>
                            <div className="button-container">
                                
                                <button
                                onClick={withdrawReward}
                                >WITHDRAW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5">

                        <div className="referal-div-wrap">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p style={{ fontSize: "12px" }}>Your Referral Link</p>
                            </div>
                            <div className="flex-div-wrap">
                                <div className="ref-link-div">
                       
                                    <input type="text" value={`${window.location.host}/?ref=${referral}`} className="form-control" />
                                </div>
                                <div className="copy-div-wrap" 
                                onClick={()=>{
                                    copyRef()
                                }}
                                >
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="row flex-div-wrap" style={{ alignItems: "flex-start" }}>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className="ref-earning-wrap div_height" >
                                        <p>Total Referral Earned</p>
                                        <span>
                                            <span>{referralTotalBonus}CRO</span>
                                        </span>
                                    </div>
                                    <div className="ref-earning-wrap div_height">
                                        <p>Users Invited by You</p>
                                        <span>{amounOfInvited}</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 ref-earning-wrap div_height">
                                    <p>Total Referral Withdrawn</p>
                                    <span>
                                        <span>{referralWithdrawn} CRO</span>
                                    </span>
                                </div>
                                <div className="col-lg-5 col-md-12 col-12 ref-info-wrap div_height">
                                    <p>LongtermStaker Referral Information</p>
                                
                                    <p>You will receive:</p>
                                    <div style={{ marginTop: "5px" }} className="div_height">
                                        <p>6% from each level 1 referral deposits <br />3% from each level 2 referral deposits<br />
                                            1% from each level 3 referral deposits<br />
                                        </p>
                                       
                                        <p>
                                            <em>Note! You need to have at least <br /> 1 deposit to start receive earnings</em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* <h5 style={{marginLeft: "20px" ,marginTop: "40px",paddingBottom:'5rem' ,marginBottom: "10px", fontSize: "14px"}}>DEPOSITS</h5> */}
            </div>


        </div>
    )
}
