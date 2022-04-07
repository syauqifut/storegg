import Sidebar from "../../../components/organisms/Sidebar";
import TransactionDetailContetn from "../../../components/organisms/TransactionDetailContent";

/* eslint-disable linebreak-style */
export default function Detail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContetn />
    </section>
  );
}
