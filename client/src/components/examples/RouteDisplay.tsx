import RouteDisplay from '../RouteDisplay';

export default function RouteDisplayExample() {
  const steps = [
    { id: '1', itemName: 'Milk', location: 'Aisle 1, Dairy', order: 1 },
    { id: '2', itemName: 'Bread', location: 'Aisle 3, Bakery', order: 2 },
    { id: '3', itemName: 'Eggs', location: 'Aisle 1, Dairy', order: 3 },
  ];
  
  return (
    <div className="p-4">
      <RouteDisplay
        steps={steps}
        estimatedTime={5}
        onStartNavigation={() => console.log('Navigation started')}
      />
    </div>
  );
}
