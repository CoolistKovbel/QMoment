import React from "react";

const Page = async () => {
  return (
    <main className="w-[100%] min-h-screen bg-[#222]">
      <div className="p-4">
        <div>
          <h2>Daily Withdrawl facuet</h2>
          <p>date: {Date.now()}</p>
          <p> </p>
        </div>

        <div>
          <div>
            <h2>basic generator</h2>
            <p>Insert token a to get token b</p>
            <form>
              <label htmlFor="specialTokenAmount">
                <input type="text" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
