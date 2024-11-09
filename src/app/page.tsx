import PriceHeader from '@/app/components/PriceHeader';
import OrderBook from '@/app/components/OrderBook';
import PriceChart from '@/app/components/PriceChart';
import VolumeChart from '@/app/components/VolumeChart';
import MarketList from '@/app/components/MarketList';
import TradeHistory from '@/app/components/TradeHistory';
import TradingForm from '@/app/components/TradingForm';

export default function Home() {
  return (
    <main className='text-white h-screen bg-gray-900'>
      <div className='grid grid-cols-12 gap-4 p-4 h-full'>
        {/* Left Column (9 spans) */}
        <div className='col-span-9 flex flex-col gap-4'>
          {/* Price Header */}
          <div className='h-20 bg-gray-800'>
            <PriceHeader />
          </div>

          {/* Main Content Area */}
          <div className='flex-1 grid grid-cols-12 gap-4'>
            {/* Left Side - Order Book */}
            <div className='col-span-3 bg-gray-800'>
              <OrderBook />
            </div>

            {/* Right Side - Charts and Trading Form */}
            <div className='col-span-9 flex flex-col gap-4'>
              {/* Price Chart */}
              <div className='h-[45%] bg-gray-800'>
                <PriceChart />
              </div>

              {/* Volume Chart */}
              <div className='h-[25%] bg-gray-800'>
                <VolumeChart />
              </div>

              {/* Trading Form */}
              <div className='h-[30%] bg-gray-800'>
                <TradingForm />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (3 spans) */}
        <div className='col-span-3 grid grid-rows-2 gap-4 h-full'>
          {/* Market List */}
          <div className='bg-gray-800'>
            <MarketList />
          </div>

          {/* Trade History */}
          <div className='bg-gray-800'>
            <TradeHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
