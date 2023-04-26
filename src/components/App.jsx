import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* //React homework template */}

      {/* 1 - Профіль соціальної мережі */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* 2- Секція статистики */}
      <Statistics
        title='Upload stats'
        stats={data}
      />

      {/* 3 - Список друзів */}
      <FriendList friends={friends} />
      
      {/* 4 - Історія транзакцій */}
      <TransactionHistory items={transactions}/>

    </div>
  );
};
