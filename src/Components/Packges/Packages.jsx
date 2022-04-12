import React, { useState, useEffect, useRef } from 'react'
import './Packages.css'
import { contractAbi, contractAddress } from '../constants/contract';
import { loadWeb3 } from '../api';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';

export default function Packages({isToggle, setIsToogel}) {

    let plan1 = useRef();
    let plan1Change = useRef()

    const changePlanOne = () => {
        try {
            let vlaue = plan1.current.value;
            let newVal = (vlaue * 217.00) / 100;
            plan1Change.current.innerHTML = parseFloat(newVal).toFixed(3);
        } catch (e) {
            console.error("error while change paln one");
        }
    }

    const approvePlanOne = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan1.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,0).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,0).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("Invest failed")
            console.error("error while approve paln one", e)
        }
    }

    let plan2 = useRef();
    let plan2Change = useRef();

    const changePlanTwo = () => {
        try {
            let vlaue = plan2.current.value;
            let newVal = (vlaue * 315.00) / 100;
            plan2Change.current.innerHTML = newVal;
        } catch (e) {
            console.error("error while change paln one");
        }
    }

    const approvePlanTwo = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan2.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,1).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,1).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("invest failed")
            console.error("error while approve paln one", e)
        }
    }

    let plan3 = useRef();
    let plan3Change = useRef();

    const changePlanThree = () => {
        try {
            let vlaue = plan3.current.value;
            let newVal = (vlaue * 406.00) / 100;
            plan3Change.current.innerHTML = newVal.toFixed(2);
        } catch (e) {
            console.error("error while change paln one");
        }
    }
    const approvePlanThree = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan3.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,2).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,2).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("Invest failed")
            console.error("error while approve paln one", e)
        }
    }

    let plan4 = useRef();
    let plan4Change = useRef();

    const changePlanFour = () => {
        try {
            let vlaue = plan4.current.value;
            let newVal = (vlaue * 651.88) / 100;
            plan4Change.current.innerHTML = newVal.toFixed(2);
        } catch (e) {
            console.error("error while change paln one");
        }
    }
    const approvePlanFour = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan4.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,3).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,3).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("Invest failed")
            console.error("error while approve paln one", e)
        }
    }

    let plan5 = useRef();
    let plan5Change = useRef();

    const changePlanFive = () => {
        try {
            let vlaue = plan5.current.value;
            let newVal = (vlaue * 1782.15) / 100;
            plan5Change.current.innerHTML = newVal.toFixed(2);
        } catch (e) {
            console.error("error while change paln one");
        }
    }
    const approvePlanFive = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan5.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,4).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,4).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("Invest failed")
            console.error("error while approve paln one", e)
        }
    }

    let plan6 = useRef();
    let plan6Change = useRef();

    const changePlanSix = () => {
        try {
            let vlaue = plan6.current.value;
            let newVal = (vlaue * 4331.53) / 100;

            plan6Change.current.innerHTML = newVal.toFixed(2);
        } catch (e) {
            console.error("error while change paln one");
        }
    }
    const approvePlanSix = async () => {
        try {
            const acc = await loadWeb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                let amount = plan6.current.value;
                amount = parseFloat(amount)
                if(amount <0.05){
                    toast.info("please enter amount greater then 0.05")
                }else{
                    const search = window.location.search;
                    const params = new URLSearchParams(search);
                    let isRef = params.get("ref")
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);

                    if(isRef != null){
                        await contract.methods.invest(isRef,5).send({
                            from:acc,
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }else{
                        await contract.methods.invest(acc,5).send({
                            from:acc, 
                            value:web3.utils.toWei(amount.toString())
                        })
                        setIsToogel(!isToggle)
                        toast.success("Invest successfully")
                    }

                }
            }

        } catch (e) {
            toast.error("Invest failed")
            console.error("error while approve paln one", e)
        }
    }

    return (
        <div>
            <div className="container">

                <h5 style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "10px", fontSize: "14px" }}>PACKAGES</h5>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>SAVINGS</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span>15.5%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span>217.00%</span>
                                </div>
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>14</h3>
                                    <p>DAYS</p>
                                </div>
                               
                            </div>
                            <div className="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"
                                    ref={plan1}
                                    onChange={changePlanOne}
                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }} >ROI in 14 Days</p>
                                    <span className="Avalanche" ref={plan1Change} >0.00</span>
                                </div>
                            </div>
                            <div class="stake-button-wrap">
                                <button className='btn btn-dark btn-outline-primary'
                                onClick={approvePlanOne}
                                >Approve</button>
                            </div>
                        </div>

                    </div>



                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>CLASSICS</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span>15%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span>315.00%</span>
                                </div>
                               
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>21</h3>
                                    <p>DAYS</p>
                                </div>
                            </div>
                            <div className="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"
                                    ref={plan2}
                                    onChange={changePlanTwo}
                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }}>ROI in 21 Days</p>
                                    <span className="Avalanche" ref={plan2Change}>0.00</span>
                                </div>
                            </div>
                            <div className="stake-button-wrap">
                                <button className='btn'
                                onClick={approvePlanTwo}
                                >Approve</button>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>PREMIUM</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span>14.5%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span>406.00%</span>
                                </div>
                                
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>28</h3>
                                    <p>DAYS</p>
                                </div>
                            </div>
                            <div className="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"
                                    ref={plan3}
                                    onChange={changePlanThree}

                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }}>ROI in 28 Days</p>
                                    <span className="Avalanche" ref={plan3Change}>0.00</span>
                                </div>
                            </div>
                            <div className="stake-button-wrap">
                                <button className='btn'
                                onClick={approvePlanThree}
                                >Approve</button>
                            </div>
                        </div>

                    </div>
                </div>








                <div className="row">
                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>SILVER</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255, 251, 0)" }}><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>15.5%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>651.88%</span>
                                </div>
                                
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>14</h3>
                                    <p>DAYS</p>
                                </div>
                            </div>
                            <div class="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"

                                    ref={plan4}
                                    onChange={changePlanFour}

                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }}>ROI in 14 Days</p>
                                    <span className="Avalanche" ref={plan4Change}>0.00</span>
                                </div>
                            </div>
                            <div className="stake-button-wrap">
                                <button className='btn'
                                onClick={approvePlanFour}
                                >Approve</button>
                            </div>
                        </div>

                    </div>



                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>GOLD</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255, 251, 0)" }}><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>15%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>1782.15%</span>
                                </div>
                                
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>21</h3>
                                    <p>DAYS</p>
                                </div>
                            </div>
                            <div className="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"

                                    ref={plan5}
                                    onChange={changePlanFive}

                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }}>ROI in 21 Days</p>
                                    <span className="Avalanche" ref={plan5Change}>0.00</span>
                                </div>
                            </div>
                            <div className="stake-button-wrap">
                                <button className='btn'
                                onClick={approvePlanFive}
                                >Approve</button>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="plans-box-wrap">
                            <div className="flex-div-wrap-header text-white">
                                <h3>PREMIUM</h3>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255, 251, 0)" }}><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                </svg>
                            </div>
                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Daily Earnings</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>14.5%</span>
                                </div>
                                <div>
                                    <p>Total ROI</p>
                                    <span style={{ color: "rgb(255, 252, 0)" }}>4331.53%</span>
                                </div>
                                
                            </div>
                            <div className="days-locked">
                                <div>
                                    <h3>28</h3>
                                    <p>DAYS</p>
                                </div>
                            </div>
                            <div className="flex-div-wrap">
                                <div><input placeholder="Enter Amount" name="amount"

                                    ref={plan6}
                                    onChange={changePlanSix}

                                />
                                </div>
                                <div className='line_hh' >
                                    <p style={{ fontSize: "12px", color: "#fff" }}>ROI in 28 Days</p>
                                    <span className="Avalanche" ref={plan6Change}>0.00</span>
                                </div>
                            </div>
                            <div className="stake-button-wrap">
                                <button className='btn'
                                onClick={approvePlanSix}
                                >Approve</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
