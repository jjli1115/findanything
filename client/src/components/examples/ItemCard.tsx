import ItemCard from '../ItemCard';

export default function ItemCardExample() {
  return (
    <div className="p-4">
      <ItemCard
        id="1"
        name="Size 43 Mocha Birkenstock Bostons"
        storeName="Target"
        location="Aisle 5, Section B"
        onEdit={() => console.log('Edit item')}
        onDelete={() => console.log('Delete item')}
      />
    </div>
  );
}
