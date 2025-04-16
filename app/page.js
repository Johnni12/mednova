import StatWidget from './components/StatWidget';
import ChartWidget from './components/ChartWidget';
import RecentOrders from './components/RecentOrders';
import Notifications from './components/Notifications';
import QuickActions from './components/QuickActions';
import SellingProduct from './components/SellingProduct';

export default function Page() {
  return (
    <div className="p-6 flex flex-col gap-6 bg-[color:var(--bg-main)] min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatWidget label="Total Sales" value="$25,200" icon="💰" growth="+5%" />
        <StatWidget label="New Orders" value="112" icon="📦" growth="+8%" />
        <StatWidget label="Low Stock" value="5 Items" icon="⚠️" growth="-2%" />
        <StatWidget label="Support Tickets" value="12" icon="🛠️" growth="+1%" />
      </div>

      {/* Chart + Orders - 50/50 layout */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2">
          <ChartWidget />
        </div>
        <div className="w-full xl:w-1/2">
          <RecentOrders />
        </div>
      </div>

      {/* SellingProduct, Notifications, QuickActions - 3 equal columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <SellingProduct />
        <Notifications />
        <QuickActions />
      </div>
    </div>
  );
}
