import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
  const loggedIn = {
    firstName: "Hamza",
    lastName: "el fateh",
    email: "hamzaelfateh@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently ."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={3999.45}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        trasactions={[]}
        banks={[{ currentBalance: 4234.45 }, { currentBalance: 14352.95 }]}
      />
    </section>
  );
};
export default Home;
