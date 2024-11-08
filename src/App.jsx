import { useState } from "react";
import AvgCPMChart from "./components/cpm";
import LifetimeCPMChart from "./components/cpmlife";
import CPMChartMonthly from "./components/cpmmonthly";
import TotalDownloadsChart from "./components/downloads";
import LifetimeDownloadsChart from "./components/downloadslife";
import DownloadsMonthly from "./components/downloadsmonthly";
import EarningsChart from "./components/earnings";
import LifetimeEarningsChart from "./components/earningslife.jsx";
import EarningsChartMonthly from "./components/earningsmonthly";
import Historylog from "./components/history";
import Nav from "./components/navbar";
import Withdrawal from "./components/withdrawal";
import Footer from "./components/footer.jsx";

function App() {

  const [isTodayactive, setIsTodayactive] = useState(true)
  const [isMonthlyactive, setIsMonthlyactive] = useState(false)
  const [isLifetimeactive, setIsLifetimeactive] = useState(false)

  function showToday() {
    const todaytext = document.getElementById('today')
    const lastmonthtext = document.getElementById('lastmonth')
    const lifetimetext = document.getElementById('lifetime')


    todaytext.classList.add('active-filter')
    lastmonthtext.classList.remove('active-filter')
    lifetimetext.classList.remove('active-filter')


    setIsMonthlyactive(false);
    setIsLifetimeactive(false);
    setIsTodayactive(true)
   
  }



  function showLastMonth() {
    const todaytext = document.getElementById("today");
    const lastmonthtext = document.getElementById("lastmonth");
    const lifetimetext = document.getElementById("lifetime");

    lastmonthtext.classList.add("active-filter");
    todaytext.classList.remove("active-filter");
    lifetimetext.classList.remove("active-filter");

    
    
    setIsLifetimeactive(false);
    setIsTodayactive(false);
    setIsMonthlyactive(true);
  }



  function showLifetime() {
    const todaytext = document.getElementById("today");
    const lastmonthtext = document.getElementById("lastmonth");
    const lifetimetext = document.getElementById("lifetime");

    lifetimetext.classList.add("active-filter");
    lastmonthtext.classList.remove("active-filter");
    todaytext.classList.remove("active-filter");

    setIsTodayactive(false);
    setIsMonthlyactive(false);
    setIsLifetimeactive(true);
  }



  return (
    <>
      <Nav></Nav>
      <div className="outer-container">
        <Withdrawal></Withdrawal>
        <hr className="hrline" />
        <h2 className="analitycs">Analytics</h2>

        <div className="filter-container">
          <h2 className="active-filter" id="today" onClick={showToday}>
            Today
          </h2>
          <h2 onClick={showLastMonth} id="lastmonth">
            Last Month
          </h2>
          <h2 onClick={showLifetime} id="lifetime">
            Lifetime
          </h2>
        </div>

        <div className="stats-container">
          {isTodayactive ? (
            <>
              <TotalDownloadsChart></TotalDownloadsChart>
              <AvgCPMChart></AvgCPMChart>
              <EarningsChart></EarningsChart>
            </>
          ) : null}
          {isMonthlyactive ? (
            <>
              <DownloadsMonthly></DownloadsMonthly>
              <CPMChartMonthly></CPMChartMonthly>
              <EarningsChartMonthly></EarningsChartMonthly>
            </>
          ) : null}
          {isLifetimeactive ? (
            <>
              <LifetimeDownloadsChart></LifetimeDownloadsChart>
              <LifetimeCPMChart></LifetimeCPMChart>
              <LifetimeEarningsChart></LifetimeEarningsChart>
            </>
          ) : null}
        </div>
        <hr className="hrline" />

        <Historylog></Historylog>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
