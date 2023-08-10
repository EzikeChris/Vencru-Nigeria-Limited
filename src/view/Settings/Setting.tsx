import Navbar from "../../components/Home/navbar/Navbar";
import Tab from "../../components/Home/tab/Tab";
import PaymentSection from "../../components/Home/payment/Payment";
import BillingHistory from "../../components/Home/billing/Billing";
import SideNav from "../../components/Home/navbar/SideNav";

const Settings = () => {
  return (
    <div className="flex h-screen">
      <section className="h-full overflow-y-scroll">
        <SideNav />
      </section>
      <section className="setting_section overflow-y-scroll w-full">
        <Navbar />
        <Tab />
        <PaymentSection />
        <BillingHistory />
      </section>
    </div>
  );
};

export default Settings;
