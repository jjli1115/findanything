import StoreCard from '../StoreCard';

export default function StoreCardExample() {
  return (
    <div className="p-4 space-y-4">
      <StoreCard
        id="1"
        name="Target"
        address="123 Main St, San Francisco, CA"
        distance={2.3}
        itemCount={15}
        onClick={() => console.log('Store clicked')}
        onNavigate={() => console.log('Navigate clicked')}
      />
    </div>
  );
}
