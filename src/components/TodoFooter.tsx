import React from 'react';

interface TodoFooterProps {
  itemsLeft: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ itemsLeft, filter, setFilter, clearCompleted }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '5mm' }}>
      <span>{itemsLeft} items left</span>
      <div>
        <button onClick={() => setFilter('all')} style={{ fontWeight: filter === 'all' ? 'bold' : 'normal', margin: '0 5px' }}>
          All
        </button>
        <button onClick={() => setFilter('active')} style={{ fontWeight: filter === 'active' ? 'bold' : 'normal', margin: '0 5px' }}>
          Active
        </button>
        <button onClick={() => setFilter('completed')} style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal', margin: '0 5px' }}>
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} style={{ marginLeft: '5px' }}>Clear Completed</button>
    </div>
  );
};

export default TodoFooter;