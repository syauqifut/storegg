import Category from "./Category"
import TableRow from "./TableRow"

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
              <div className="row">
                <Category nominal={16000} icon="cat-desktop">
                    Game <br/>
                    Desktop
                </Category>
                <Category nominal={166000} icon="cat-mobile">
                    Game <br/>
                    Mobile
                </Category>
                <Category nominal={26000} icon="cat-desktop">
                    Game <br/>
                    Console
                </Category>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow title="The Royal Game" image="overview-2" category="Desktop" amount={230} price={300000} transactionstatus="success" />
                  <TableRow title="Call of Duty" image="overview-3" category="Desktop" amount={633} price={400000} transactionstatus="pending" />
                  <TableRow title="Mobile Legend" image="overview-4" category="Mobile" amount={1200} price={1100000} transactionstatus="failed" />
                  

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
  )
}
