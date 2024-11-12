import PriceHeader from '@/app/components/PriceHeader';
import OrderBook from '@/app/components/OrderBook';
import MarketList from '@/app/components/MarketList';
import TradeHistory from '@/app/components/TradeHistory';
import TradingForm from '@/app/components/TradingForm';
import Chart from '@/app/components/Chart';

export default function Home() {
  return (
    <main className="h-screen bg-background text-textPimary">
      <div className="mx-auto h-full max-w-screen-2xl p-4">
        <div className="grid h-full gap-4 grid-cols-1 md:grid-cols-8 lg:grid-cols-12">
          
          {/* Main Content Area - Takes full width on mobile, 6 cols on tablet, 9 cols on desktop */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-8 lg:col-span-9">
            {/* Price Header - Always visible */}
            <div className="h-20">
              <PriceHeader />
            </div>
            {/* Chart and Trading Area */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-8">
              {/* Order Book - Hidden on mobile, 3 cols on tablet/desktop */}
              <div className="hidden md:block md:col-span-3">
                <OrderBook />
              </div>

              {/* Chart and Trading Form Container */}
              <div className="flex flex-col gap-4
                              col-span-1
                              md:col-span-5">
                {/* Chart Section - Always visible */}
                <div className="h-[60vh] md:h-[60%]">
                  <Chart symbol="BTCUSDT" />
                </div>

                {/* Trading Form - Hidden on mobile */}
                <div className="hidden md:block md:h-[40%]">
                  <TradingForm />
                </div>
              </div>
            </div>
          </div>

          {/* Market List and Trade History Container 
              Hidden on mobile, Bottom on tablet, Right side on desktop */}
          <div className="hidden md:flex md:flex-col md:gap-4
                          md:col-span-8
                          lg:col-span-3">
            <MarketList />
            <TradeHistory />
          </div>
        </div>
      </div>
    </main>
  );
}