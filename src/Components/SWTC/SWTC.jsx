import React from 'react'
import './SWTC.css'

export default function SWTC() {
    return (
        <div>

            <div className="container">
                <div className="row">
                <div className="col-lg-1"></div>

                    <div className="col-lg-3 mt-5">
                        <div class="global-stats-box global-stats-wrap height_her ">
                            <h5 className='fs-6'>STATS</h5>
                            <hr />
                            <div className="stat-box-wrap  wallet text-center">
                                <div className="container" >
                                    <div >
                                        <p>SWTC price</p>
                                        <span>
                                            <span>$ 5.65</span>
                                        </span>
                                    </div>
                                    <div>
                                        <p>SWTC Total Supply</p>
                                        <span><span>12,493.52</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="col-lg-4 mt-5">
                        <div className="global-stats-box global-stats-wrap height_her ">
                            <h5 className='fs-6'>Reward for 28-day locked plan investors</h5>
                            <hr />

                            <div className="flex-div-wrap text-white">
                                <div>
                                    <p>Rewards claimed</p>
                                    <span>0.00 SWTC</span>
                                </div>
                                <div>
                                    <p>Your reward</p>
                                    <span>0.00 SWTC</span>
                                </div>
                            </div>
                            
                            <div className="stake-button-wrap">
                                <button className='btn'>CLAIM</button>
                            </div>
                        </div>


                    </div>

                    <div className="col-lg-3 mt-5">
                        <div class="global-stats-box global-stats-wrap height_her  ">
                            <h5 className='fs-6'>Reward for the last investor</h5>
                            <hr />
                            <div className="stat-box-wrap  wallet text-center">
                                <div className="container" >
                                    <div >
                                        <p>250.00 SWTC</p>
                                       
                                    </div>
                                    <div>
                                        <p>address: 0xC19...31262</p>
                                        <span><span>0.00</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-lg-1"></div>

                </div>
            </div>

        </div>
    )
}
