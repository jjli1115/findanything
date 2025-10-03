import { useState } from 'react';
import StoreMapCanvas from '../StoreMapCanvas';

export default function StoreMapCanvasExample() {
  const [items, setItems] = useState([
    { id: '1', x: 30, y: 40, name: 'Milk' },
    { id: '2', x: 70, y: 60, name: 'Bread' },
  ]);
  
  return (
    <div className="p-4">
      <StoreMapCanvas items={items} onItemsChange={setItems} editable />
    </div>
  );
}
