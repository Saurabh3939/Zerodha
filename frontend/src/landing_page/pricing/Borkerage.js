import React from "react";
function Brokerage() {
  return (
    <div className='container p-5'>
      <div className='row mb-5 mt-5 p-5'>
        <div className='col-10' id='equity'>
          <span style={{ display: "flex", gap: "15px" }}>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: "none" }}
            >
              <h3>Equity</h3>
            </a>
            <h3>Currency </h3>
            <h3>Commodity</h3>
          </span>
          <hr />
          <table className='mb-5'>
            <thead className='border'>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody className='border'>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>
                  0.03% or Rs. 20/executed <br /> order whichever is lower
                </td>
                <td>
                  0.03% or Rs. 20/executed <br /> order whichever is lower
                </td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td> 0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <li>
                    0.125% of the intrinsic value on <br /> options that are
                    bought and <br />
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </td>
              </tr>
              <tr>
                <td>
                  Transaction <br /> charges
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00173% <br /> BSE: 0
                </td>
                <td>
                  NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />
                  charges)
                </td>
                <td>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />
                  charges)
                </td>
                <td>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />
                  charges)
                </td>
                <td>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />
                  charges)
                </td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>
                  0.015% or ₹1500 / crore on <br /> buy side
                </td>
                <td>
                  0.015% or ₹1500 / crore on <br /> buy side
                </td>
                <td>
                  0.015% or ₹1500 / crore on <br /> buy side
                </td>
                <td>
                  0.015% or ₹1500 / crore on <br /> buy side
                </td>
              </tr>
            </tbody>
          </table>
          <p className='text-center fs-6'>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: "none" }}
            >
              Calculate your costs upfront
            </a>
            &nbsp; using our brokerage calculator
          </p>
        </div>
        <h3 className='mt-5'>Charges for account opening</h3>
        <table className='mt-3 mb-5 border' id='account'>
          <thead className='border'>
            <th style={{ paddingLeft: "20px" }}>Type of account</th>
            <th>Charges</th>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td style={{ paddingRight: "20px" }}>
                <button
                  className='btn '
                  style={{
                    fontSize: "12px",
                    padding: "0px 3px 0px 3px",
                    borderRadius: "0px",
                  }}
                >
                  FREE
                </button>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td style={{ paddingRight: "0px" }}>
                <button
                  className='btn '
                  style={{
                    fontSize: "12px",
                    padding: "0px 3px 0px 3px",
                    borderRadius: "0px",
                  }}
                >
                  FREE
                </button>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
        <h4 className='mt-5'>Demat AMC (Annual Maintenance Charge)</h4>
        <table className='mt-3 border' id='account'>
          <thead className='border'>
            <th style={{ paddingLeft: "20px" }}>Value of holdings</th>
            <th style={{ paddingLeft: "25px" }}>AMC</th>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td style={{ paddingRight: "20px" }}>
                <button
                  className='btn '
                  style={{
                    fontSize: "12px",
                    padding: "3px 3px 3px 3px",
                    borderRadius: "0px",
                  }}
                >
                  FREE*
                </button>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td> ₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "13px", textDecoration: "none" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a
            style={{ fontSize: "13px", textDecoration: "none" }}
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            click here.
          </a>
        </p>
        <h3 className='mt-5 mb-3'>Charges for optional value added services</h3>
        <table className='mt-2 mb-5 border' id='account'>
          <thead className='border'>
            <th style={{ paddingLeft: "20px", fontWeight: "normal" }}>
              Service
            </th>
            <th style={{ paddingLeft: "10px", fontWeight: "normal" }}>
              Billing Frquency
            </th>
            <th style={{ paddingLeft: "20px", fontWeight: "normal" }}>
              Charges
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td> Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td> Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='row mx-5' id='charges'>
        <h2 className='mb-5 fs-3'>Charges explained</h2>
        <div className='col-6'>
          <h1>Securities/Commodities transaction tax</h1>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h1>Transaction/Turnover Charges</h1>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h1>Call & trade</h1>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h1>Stamp charges</h1>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h1>NRI brokerage charges</h1>
          <li>
            For a non-PIS account, 0.5% or ₹50 per executed order for equity and
            F&O (whichever is lower).
          </li>
          <li>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </li>
          <h1>Account with debit balance</h1>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h1>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h1>
          <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
          <li>Options - ₹50 per crore + GST traded value (premium value).</li>
          <li>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </li>
          <h1>Margin Trading Facility (MTF)</h1>
          <li>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </li>
          <li>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </li>
          <li>
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per
            ISIN.
          </li>
        </div>
        <div className='col-6'>
          <h1>GST</h1>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h1>SEBI Charges</h1>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h1>DP (Depository participant) charges</h1>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h1>Pledging charges</h1>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <h1>AMC (Account maintenance charges)</h1>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Click here
            </a>
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Click here
            </a>
          </p>
          <h1>Corporate action order charges</h1>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h1>Off-market transfer charges</h1>
          <p>₹25 per transaction.</p>
          <h1>Physical CMR request</h1>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h1>Payment gateway charges</h1>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h1>Delayed Payment Charges</h1>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Learn more.
            </a>
          </p>
          <h1>Trading using 3-in-1 account with block functionality</h1>
          <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
          <li>Intraday Brokerage: 0.05% per executed order.</li>
        </div>
        <h1>Disclaimer</h1>
        <p id='disclaimer'>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. <br />
          Brokerage will not exceed the rates specified by SEBI and the
          exchanges. All statutory and regulatory charges will be levied at
          actuals. Brokerage is also charged on expired, exercised, and <br />
          assigned options contracts. Free investments are available only for
          our retail individual clients. Companies, Partnerships, Trusts, and
          HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br />
          brokerage. A brokerage of 0.25% of the contract value will be charged
          for contracts where physical delivery happens. For netted off
          positions in physically settled contracts, a brokerage of 0.1% <br />
          will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
