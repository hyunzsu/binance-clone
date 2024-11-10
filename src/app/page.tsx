import PriceHeader from '@/app/components/PriceHeader';
import OrderBook from '@/app/components/OrderBook';
import MarketList from '@/app/components/MarketList';
import TradeHistory from '@/app/components/TradeHistory';
import TradingForm from '@/app/components/TradingForm';
import Chart from '@/app/components/Chart';

export default function Home() {
  return (
    <main className='text-white h-screen bg-background'>
      <div className='grid grid-cols-12 gap-4 p-4 h-full'>
        {/* Left Column (9 spans) */}
        <div className='col-span-9 flex flex-col gap-4'>
          {/* Price Header */}
          <div className='h-20'>
            <PriceHeader />
          </div>

          {/* Main Content Area */}
          <div className='flex-1 grid grid-cols-12 gap-4'>
            {/* Left Side - Order Book */}
            <div className='col-span-3 '>
              <OrderBook />
            </div>

            {/* Right Side - Chart and Trading Form */}
            <div className='col-span-9 flex flex-col gap-4'>
              {/* Chart Section */}
              <div className='h-[70%] '>
                <Chart />
              </div>

              {/* Trading Form */}
              <div className='h-[30%] '>
                <TradingForm />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (3 spans) */}
        <div className='col-span-3 grid grid-rows-2 gap-4 h-full'>
          {/* Market List */}
          <div className=''>
            <MarketList />
          </div>

          {/* Trade History */}
          <div className=''>
            <TradeHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
