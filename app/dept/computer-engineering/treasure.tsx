import React, { useState } from 'react';

const Treasure = () => {
  const [teamName, setTeamName] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [name4, setName4] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Team Name:', teamName);
    console.log('Name 1:', name1);
    console.log('Name 2:', name2);
    console.log('Name 3:', name3);
    console.log('Name 4:', name4);
    console.log('Batch:', batch);
  };

  return (
    <div>
      <h1>Treasure Hunt Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name1">Name 1:</label>
          <input
            type="text"
            id="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name2">Name 2:</label>
          <input
            type="text"
            id="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name3">Name 3:</label>
          <input
            type="text"
            id="name3"
            value={name3}
            onChange={(e) => setName3(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name4">Name 4:</label>
          <input
            type="text"
            id="name4"
            value={name4}
            onChange={(e) => setName4(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="batch">Batch:</label>
          <select id="batch" value={batch} onChange={(e) => setBatch(e.target.value)}>
            <option value="BA">BA</option>
            <option value="BCA">BCA</option>
            <option value="BCOM">BCOM</option>
            <option value="BSC">BSC</option>
            <option value="MSC">MSC</option>
            <option value="MCOM">MCOM</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Treasure;