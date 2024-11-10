import PriceHeader from '@/app/components/PriceHeader';
import OrderBook from '@/app/components/OrderBook';
import MarketList from '@/app/components/MarketList';
import TradeHistory from '@/app/components/TradeHistory';
import TradingForm from '@/app/components/TradingForm';
import Chart from '@/app/components/Chart';

export default function Home() {
  return (
    <main className="h-screen bg-background text-textPimary">
      <div className="mx-auto grid h-full max-w-screen-2xl grid-cols-12 gap-4 p-4">
        {/* Left Column (9 spans) */}
        <div className="col-span-9 flex flex-col gap-4">
          {/* Price Header */}
          <div className="h-20">
            <PriceHeader />
          </div>

          {/* Main Content Area */}
          <div className="grid flex-1 grid-cols-9 gap-4">
            {/* Left Side - Order Book */}
            <div className="col-span-3">
              <OrderBook />
            </div>

            {/* Right Side - Chart and Trading Form */}
            <div className="col-span-6 flex flex-col gap-4">
              {/* Chart Section */}
              <div className="h-[70%]">
                <Chart />
              </div>

              {/* Trading Form */}
              <div className="h-[30%]">
                <TradingForm />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (3 spans) */}
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          {/* Market List */}
          <MarketList />
          {/* Trade History */}
          <TradeHistory />
        </div>
      </div>
    </main>
  );
}
